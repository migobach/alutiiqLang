import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getBooks } from '../../reducers/books'
import {
  Header,
  Grid,
  Icon,
  Form
} from 'semantic-ui-react'
import {
  SpecialDiv,
  SectionHead,
  BlueDiv,
  ContentStyle,
  Div,
  Pointer,
  ColumnHead,
} from '../styles/CommonStyles'
import BookView from './BookView'

class Books extends Component {

  state = { 
    searchBooks: '', 
    bookData: {}, 
    bookView: false 
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(getBooks())
  }

  setBook = (book) => {
    this.setState({ bookData: {...book}, bookView: true})
  }

  handleChange = (e, {name, value}) => {
    this.setState({ [name]: value})
  }

  renderBookView = () => {
    if (this.state.bookView === true) {       
      return <BookView book={this.state.bookData} view={this.toggleView} />
    } else 
    return
  }

  toggleView = () => {
    this.setState({ bookView: !this.state.bookView })
  }

  renderSearchBooks = () => {
    const books = this.props.books
    const { searchBooks } = this.state
    const lowerCaseSearch = searchBooks

    let filtered_books = books.filter( b => 
      b.book_title_alutiiq.toLowerCase().includes(lowerCaseSearch)
      || 
      b.book_title_english.toLowerCase().includes(lowerCaseSearch)
      ||
      ((b.creator != null) ?
      b.creator.toLowerCase().includes(lowerCaseSearch)
      :
      null)
      ||
      ((b.description != null) ? 
      b.description.toLowerCase().includes(lowerCaseSearch)
      :
      null)
    )

    return(
      filtered_books.map( (b) =>
        <Grid.Row key={b.id}>
          <Grid.Column computer={6} tablet={6} mobile={10} verticalAlign='middle'>
            <ContentStyle>
              <i>{b.book_title_alutiiq}</i>
            </ContentStyle>
          </Grid.Column>
          <Grid.Column width={6} verticalAlign='middle' only='computer tablet'>
            <ContentStyle>
              {b.book_title_english}
            </ContentStyle>
          </Grid.Column>
          <Grid.Column computer={4} tablet={4} mobile={6} textAlign='center' verticalAlign='middle'>
            <Pointer>
              <Icon name='eye' size='large' color='grey' onClick= {() => this.setBook(b)}/>
            </Pointer>
          </Grid.Column>
        </Grid.Row>
      )
    )
  }

  render() {
    const { searchBooks } = this.state

    return(
      <div>
        <BlueDiv>
          <Header textAlign='center'>
            <SectionHead>
              <i>Naaqisutet</i>: Books
            </SectionHead>
          </Header>
        </BlueDiv> 

        <SpecialDiv>
          <ContentStyle>
            Native Village of Afognak along with the Alutiiq Museum and Archaeological Repository have partnered with KIWA Media to create storybooks that read to you, spell for you, and allow you to be immersed in an Alutiiq storyetelling experience
            <br />
            <br />
            Free to download on both iOS and Android devices, all you need to do is search "Alutiiq" or "Native Village of Afoganak" wherever you get your apps to find the titles
            <br />
            <br />
            Titles are also available as PDFs below. With the PDF versions, you can print them out in black and white and use them as coloring books, or read them to a loved one. Practice with the application to master pronunciation, and then share the story with your own voice.
          </ContentStyle>
        </SpecialDiv>

      {/* BOOK SEARCH FILED AND BUTTONS */}

        <SpecialDiv>
          <Form>
            <Form.Input
              placeholder='Search Books...'
              name='searchBooks'
              value={searchBooks}
              onChange={this.handleChange}
              fluid
            />
            {/* <Button
              content='search'
              icon='search'
              labelPosition='right'
              name='searchView'
              value={true}
              onClick={this.handleChange}
            /> */}
          </Form>
        </SpecialDiv>

        { this.renderBookView() }

        <SpecialDiv>
          <Div>
            <Grid celled='internally'>
              <Grid.Row>
                <Grid.Column computer={6} tablet={6} mobile={10} verticalAlign='middle'>
                  <ColumnHead>
                    Title
                  </ColumnHead>
                </Grid.Column>
                <Grid.Column width={6} verticalAlign='middle' only='computer tablet'>
                  <ColumnHead>
                    Subject
                  </ColumnHead>
                </Grid.Column>
                <Grid.Column computer={4} tablet={4} mobile={6} textAlign='center' verticalAlign='middle'>
                  <ColumnHead>
                    View
                  </ColumnHead>
                </Grid.Column>
              </Grid.Row>
                
                { this.renderSearchBooks() }
                
            </Grid>
          </Div>
        </SpecialDiv>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.books
  }
}

export default connect(mapStateToProps)(Books)
