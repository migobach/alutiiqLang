import React, { Component, Fragment } from 'react'
import axios from 'axios'
import InfiniteScroll from 'react-infinite-scroller'
import { connect } from 'react-redux'
import {  
  Header,
  Grid,
  Icon, 
  Form,
  Loader,
  Button,
} from 'semantic-ui-react'
import {
  BlueDiv,
  SectionHead,
  ColumnHead,
  ContentStyle,
  ContentStyleWhite,
  SpecialDiv,
  Div,
  Watermark,
} from './styles/CommonStyles'
import DictionaryView from './DictionaryView'

class Dictionary extends Component {

  state = { dictionaryWords: [], page: 1, total_pages: 0, searchTerms: '', wordView: false, wordData: {}, searchView: false }

  componentDidMount() {
    axios.get('/api/dictionaries')
      .then( res => { 
          this.setState({ dictionaryWords: res.data.dictionaries, total_pages: res.data.total_pages  })
      })
  }

  loadMore = () => {
    const page = this.state.page + 1
    axios.get(`/api/dictionaries?page=${page}`)
      .then( ({ data }) => {
        this.setState(state => {
          return{ dictionaryWords: [...state.dictionaryWords, ...data.dictionaries], page: state.page + 1 }
        })
      })
  }

  setWord = (word) => {
    this.setState( { wordData: {...word}, wordView: true})
  }
  
  renderWordView = () => {
    const { wordView } = this.state
    if(wordView === true) {
      return <DictionaryView word={this.state.wordData} toggleView={this.state.wordView} />
    } else
    return <SpecialDiv />
  }

  handleNorthSouth = (word) => {
    if(word.alutiiq_north === word.alutiiq_south) {
      return(<ContentStyle>{word.alutiiq_north}</ContentStyle>)
    } else if (word.alutiiq_north === null) {
      return(<ContentStyle>{word.alutiiq_south}</ContentStyle>)
    } else if (word.alutiiq_south === null) {
      return(<ContentStyle>{word.alutiiq_north}</ContentStyle>)
    } else {
      return(<ContentStyle>{word.alutiiq_north}</ContentStyle>)
    }
  }

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value })
  }

  clearSearch = () => {
    this.setState({ searchView: false, searchTerms: '' })
  }
  
  words = () => {
    const { dictionaryWords } = this.state
    return dictionaryWords.map( word => {
      return(
      <Grid.Row key={word.id}>
        <Grid.Column width={6} verticalAlign='middle'>
          <ContentStyle>
            {word.english}
          </ContentStyle>
        </Grid.Column>
        <Grid.Column width={6} verticalAlign='middle'>
            <i>{this.handleNorthSouth(word)}</i>
        </Grid.Column>
        
        <Grid.Column width={4} textAlign='center' verticalAlign='middle'>
          <Icon name='eye' size='large' color='grey' onClick= {() => this.setWord(word)} />
        </Grid.Column>
      </Grid.Row>
      )
    })
  }

  renderSearchWords = () => {
    const { searchTerms, dictionaryWords } = this.state

    let filtered_words = dictionaryWords.filter( e => 
      e.english.includes(searchTerms) )

      // add the other terms here something like e.alutiiq_north.include(searchTerms)
      

    return(
      filtered_words.map( (word)  =>
      <Grid.Row key={word.id}>
        <Grid.Column width={6} verticalAlign='middle'>
          <ContentStyle>
            {word.english}
          </ContentStyle>
        </Grid.Column>
        <Grid.Column width={6} verticalAlign='middle'>
          <i>{this.handleNorthSouth(word)}</i>
        </Grid.Column>
        
        <Grid.Column width={4} textAlign='center' verticalAlign='middle'>
          <Icon name='eye' size='large' color='grey' onClick= {() => this.setWord(word)} />
        </Grid.Column>
      </Grid.Row>
      )
    ) 
  }

  render() {
    const { total_pages, searchTerms, page, searchView } = this.state
    return(

// fist section describing the dictionary and welcoming user

    <Fragment>
      <BlueDiv>
        <Header textAlign="center">
          <SectionHead>
            Dictionary
          </SectionHead>
        </Header>
        <ContentStyleWhite>
          Search our on-line dictionary for common words, a specific word you are interested in learning, or review an entire category of words. Click the Alutiiq word to see a flashcard with an image and audio clip.
        </ContentStyleWhite>
      </BlueDiv>
      
{/* Search Function */}
      <SpecialDiv>
        <Form>
          <Form.Input
            placeholder="Search Words..."
            autoFocus={"true"}
            name='searchTerms'
            value={searchTerms}
            onChange={this.handleChange}
            fluid
            />
              <Button
                name='searchView'
                value={true}
                onClick={this.handleChange}
                >Search
              </Button>
              <Button
                onClick={this.clearSearch}
              >Clear
              </Button>
            {/* </div> */}
        </Form>
      </SpecialDiv>
       {/* </Form.Input> */}
       
{/* dictionary table - for computer and tablet only */}
      <Grid columns={2}>
        <Grid.Row only='computer tablet'>
          <Grid.Column>
            <Div>
              <InfiniteScroll
                pageStart={page}
                loadMore={this.loadMore}
                hasMore={ page < total_pages }
                loader={<Loader />}
                useWindow={false}
              >
                <Grid celled='internally'>
                  <Grid.Row>
                    <Grid.Column width={6} verticalAlign='middle'>
                      <ColumnHead>
                        English
                      </ColumnHead>
                    </Grid.Column>
                    <Grid.Column width={6} verticalAlign='middle'>
                      <ColumnHead>
                        Alutiiq
                      </ColumnHead>
                    </Grid.Column>
                    <Grid.Column width={4} textAlign='center' verticalAlign='middle'>
                      <ColumnHead>
                        Details
                      </ColumnHead>
                    </Grid.Column>
                  </Grid.Row>
                    {searchView === true ?
                      this.renderSearchWords()
                      :
                      this.words() 
                    }
                </Grid>
              </InfiniteScroll>
            </Div>
          </Grid.Column>

{/* Word View */}
        <Grid.Column>
          {this.state.wordView === false ?
          <Watermark>
            Click on a word to view details
          </Watermark>
          :
          this.renderWordView()
        }
        </Grid.Column>
      </Grid.Row>
    </Grid>

{/* dictionary table - mobile only  */}
  <Grid>
    <Grid.Row only='mobile'>
    {/* word view */}
      <Grid.Column>
          {this.state.wordView === false ?
          <Watermark>
            Click on a word to view details
          </Watermark>
          :
          this.renderWordView()
        }
        </Grid.Column>
      </Grid.Row>
    {/* dictionary list of words */}
      <Grid.Row only='mobile'>
        <Grid.Column>
            <Div>
              <InfiniteScroll
                pageStart={page}
                loadMore={this.loadMore}
                hasMore={ page < total_pages }
                loader={<Loader />}
                useWindow={false}
              >
                <Grid celled='internally'>
                  <Grid.Row>
                    <Grid.Column width={6} verticalAlign='middle'>
                      <ColumnHead>
                        English
                      </ColumnHead>
                    </Grid.Column>
                    <Grid.Column width={6} verticalAlign='middle'>
                      <ColumnHead>
                        Alutiiq
                      </ColumnHead>
                    </Grid.Column>
                    <Grid.Column width={4} textAlign='center' verticalAlign='middle'>
                      <ColumnHead>
                        Details
                      </ColumnHead>
                    </Grid.Column>
                  </Grid.Row>
                    {searchView === true ?
                      this.renderSearchWords()
                      :
                      this.words() 
                    }
                </Grid>
              </InfiniteScroll>
            </Div>
          </Grid.Column>
      </Grid.Row>
      </Grid>
    </Fragment>
    )
  }


}


export default connect()(Dictionary)
