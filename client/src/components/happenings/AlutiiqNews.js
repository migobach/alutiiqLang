import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getArticles } from '../../reducers/articles'
import {
  Header,
  Grid,
  Icon,
  Form,
  Button,
} from 'semantic-ui-react'
import {
  SpecialDiv,
  SectionHead,
  ContentStyle,
  BodyLink,
  ColumnHead,
  Div,
  SongStyle,
  SongStyleLeft,
  Pointer,
} from '../styles/CommonStyles'

class News extends Component {

  state = { searchArticles: '', searchView: false }

  componentDidMount() {
    const { dispatch } = this.props 
    dispatch(getArticles())
  }

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value })
  }

  renderArticles = () => {
    const { searchArticles } = this.state
    const articles = this.props.articles
    const lowerCaseSearch = searchArticles.toLowerCase()
      
    let filtered_articles = articles.filter( a => 
      a.author.toLowerCase().includes(lowerCaseSearch)
      ||
      a.topic.toLowerCase().includes(lowerCaseSearch)
      ||
      ((a.notes != null) ?
      a.notes.toLowerCase().includes(lowerCaseSearch)
      :
      null
      )
      )

    return(
      filtered_articles.map( article => 
        <Grid.Row key={article.id}>
          <Grid.Column computer={5} tablet={5}>
            <SongStyle>
              <i>{article.print_date}</i> 
            </SongStyle>
          </Grid.Column>
          <Grid.Column width={7} only='computer tablet'>
            <SongStyleLeft>
              {article.topic}
            </SongStyleLeft>
          </Grid.Column>
          <Grid.Column computer={4} tablet={4} textAlign='center'>
            <SongStyle>
              { article.article_pdf ?
                <Pointer>
                  <a href={article.article_pdf} target='_blank'>
                    <Icon name='eye' size='large' color='grey'/>
                  </a>
                </Pointer>
                :
                <Icon name='dont' size='large' color='grey' />
              }
            </SongStyle>
          </Grid.Column>
        </Grid.Row>
      )
    )
  }

  render() {
    const { searchArticles } = this.state

    return(
      <div>
        <SpecialDiv>
          <Header textAlign='center'>
            <SectionHead>
              <i>Erinarpet</i> - Our Voices:
              <br/>
              A Weekly Kodiak Daily Mirror column.
            </SectionHead>
          </Header>
          <ContentStyle>
            Each Wednesday, read an article about Alutiiq language history, news and people of interest.  Click on the titles below to read from the archive of articles published in the <BodyLink href='http://www.kodiakdailymirror.com/'>Kodiak Daily Mirror</BodyLink>, written by a variety of people involved in the language movement. If you're interested in writing an article for the column, email <BodyLink href='alisha@nunaworks.com'>Alisha Drabek</BodyLink>.
          </ContentStyle>

      {/* ARTICLES SEARCH FIELD */}

          <SpecialDiv>
            <Form>
              <Form.Input
                placeholder='Search Articles...'
                name='searchArticles'
                value={searchArticles}
                onChange={this.handleChange}
                fluid
              />
              {
                ((this.state.searchArticles === '' ) ?
                null
                :
                <Button
                  content='clear'
                  icon='cancel'
                  labelPosition='right'
                  name='searchArticles'
                  value={''}
                  onClick={this.handleChange}
                />
                )
              }
            </Form>
          </SpecialDiv>

    
          <SpecialDiv>
            <Div>
              <Grid celled='internally'>
                <Grid.Row>
                  <Grid.Column computer={5} tablet={5} mobile={10} verticalAlign='middle' textAlign='center'>
                    <ColumnHead >
                      Publish Date
                    </ColumnHead>
                  </Grid.Column>
                  <Grid.Column width={7} verticalAlign='middle' only='computer tablet' textAlign='center'>
                    <ColumnHead>
                      Topic
                    </ColumnHead>
                  </Grid.Column>
                  <Grid.Column width={4} verticalAlign='middle' only='computer tablet' textAlign='center'>
                    <ColumnHead>
                      View
                    </ColumnHead>
                  </Grid.Column>
                </Grid.Row>
                { this.renderArticles() }
              </Grid>
            </Div>
          </SpecialDiv>
    
        </SpecialDiv>
    
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    articles: state.articles
  }
}

export default connect(mapStateToProps)(News)