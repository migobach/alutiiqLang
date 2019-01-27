import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getPosters } from '../reducers/posters'
import { getGames } from '../reducers/games'
import { getArticles } from '../reducers/articles'
import { getBooks } from '../reducers/books'
import { getCurriculum } from '../reducers/curriculum'
import { getMaterials } from '../reducers/materials'
import { getSongs } from '../reducers/songs'
import {  
  Card,
  Button, 
  Header,
  Divider,
  Container,
  Grid,
  Icon, 
  Form,
} from 'semantic-ui-react'
import { Parallax } from 'react-parallax'
import Banner from '../images/Afognak.jpg'

import { 
  CardHeader,
  ContainerPad,
  SpecialDiv,
  MainHeader,
  MainHeaderContent,
  MainDiv,
  ContentStyle,
  SubHeader,
  SubHeaderContent,
  GreenDiv,
  WhiteTitle,
  ContentStyleWhiteLeft,
  Div,
  SongStyleWhite, 
  Pointer,
  IconLink,
} from './styles/CommonStyles'

class Home extends Component {
  state = { 
    itemData: {},
    searchData: '',
    renderSearch: false
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(getGames())
    dispatch(getPosters())
    dispatch(getArticles())
    dispatch(getBooks())
    dispatch(getCurriculum())
    dispatch(getMaterials())
    dispatch(getSongs())
  }
  
  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value })
  }

  handleRenderingSearchData = () => {
    this.setState({ renderSearch: true })
    
  }

  renderSearchArticles = () => {
    const searchData = this.state.searchData
    const articles = this.props.articles // topic, author, LINK: article_pdf
    const lowerCaseSearch = searchData.toLowerCase()

    let filtered_articles = articles.filter(a => 
      a.topic.toLowerCase().includes(lowerCaseSearch)
      ||
      a.author.toLowerCase().includes(lowerCaseSearch)    
    )

    if (filtered_articles <= []) {
      return(
        <Grid.Row>
          <SongStyleWhite>
            <i>No articles with those keywords.</i>
          </SongStyleWhite>
        </Grid.Row>
      )     
    } else 
      return(
        filtered_articles.map( (article) => 
        <Grid.Row key={article.id}>
            <Grid.Column computer={6} tablet={10} mobile={10}>
              <SongStyleWhite>
                {article.topic} 
              </SongStyleWhite>
            </Grid.Column>
            <Grid.Column width={6} only='computer'>
              <SongStyleWhite>
                {article.author}
              </SongStyleWhite>
            </Grid.Column>
            <Grid.Column computer={4} tablet={4} mobile={4} textAlign='center'>
                
                
                <Pointer>
              <IconLink href={article.article_pdf} target='_blank'>
                
                <Icon name='eye' size='large' />
              
              </IconLink>
                </Pointer>


            </Grid.Column>
          </Grid.Row>
        )
      )
  }

  renderSearchBooks = () => {
    const searchData = this.state.searchData
    const books = this.props.books // book_title_alutiiq, book_title_alutiiq, creator, LINK: link
    const lowerCaseSearch = searchData.toLowerCase()

    let filtered_books = books.filter(b => 
      b.book_title_alutiiq.toLowerCase().includes(lowerCaseSearch)
      ||
      b.book_title_english.toLowerCase().includes(lowerCaseSearch)
      ||
      b.creator.toLowerCase().includes(lowerCaseSearch)
    )
    
    if (filtered_books <= [] ) {
      return(
        <Grid.Row>
          <SongStyleWhite>
            <i>No books with those keywords.</i>
          </SongStyleWhite>
        </Grid.Row>
      )
    } else 
    return(
      filtered_books.map( (book) => 
      <Grid.Row key={book.id}>
          <Grid.Column computer={6} tablet={10} mobile={10}>
            <SongStyleWhite>
              {book.book_title_english} 
            </SongStyleWhite>
          </Grid.Column>
          <Grid.Column width={6} only='computer'>
            <SongStyleWhite>
              {book.creator}
            </SongStyleWhite>
          </Grid.Column>
          <Grid.Column computer={4} tablet={4} mobile={4} textAlign='center'>
            <SongStyleWhite>
              <Icon name='eye' size='large' />
            </SongStyleWhite>
          </Grid.Column>
        </Grid.Row>
      )
    )
  }

  // WORKING: 
  
  // const curriculum = this.props.curriculum // curricular_name, group_name, link_to_item
  // const games = this.props.games // game_group, creator, NEED TO GO TO THE GAMES PAGE
  // const posters = this.props.posters // author, title, poster_link
  // const songs = this.props.songs // credit, title_alutiiq, title_english, NEED TO GO TO THE SONG VIEW
  

 

  render() {
    const { searchData, renderSearch } = this.state

    return (
      <div>
{/* HEAD BANNER WITH AFOGNAK BEACH IN THE BACKGROUND */}

        <Parallax
          bgImage={Banner}
          bgImageAlt="Afognak village beach, Afognak Island, Alaska"
          strength={500}
        >
          <div style={{height: 500}}>
            <MainDiv>
              <MainHeader>
                <i>Liicugtukut Alutiit'stun</i>
                <MainHeaderContent>
                  We want to learn Alutiiq
                </MainHeaderContent>
              </MainHeader>
            </MainDiv>
          </div>
        </Parallax>

{/* CARD OPTIONS THAT LEAD TO DIFFERENT COMPONENTS */}
          
        <ContainerPad>
          <Card.Group itemsPerRow={3} stackable={true}>
            <Card>
              <Card.Content header textAlign='center'>
                <CardHeader>
                  Happenings
                </CardHeader>
              </Card.Content>
              <Card.Content>
                <SpecialDiv>
                  <ContentStyle>
                    What is happeing, and how do you get involved? Click below to learn more about the history of language revitalization on the Kodiak Archipelago and learn about Alutiiq worldviews.
                  </ContentStyle>
                </SpecialDiv>
              </Card.Content>
                <Link to={`/happenings`} >
                  <Button color='yellow' size='small' fluid>
                    Go 
                  </Button>
                </Link>
            </Card>
    
            <Card>
              <Card.Content header textAlign='center'>
                <CardHeader>
                  Dictionary
                </CardHeader>
              </Card.Content>
              <Card.Content>
                <SpecialDiv>
                  <ContentStyle>
                    Discover new words in the Alutiiq language. Hear words being said by an Alutiiq speaker, and explore how to use words in full sentences.
                  </ContentStyle>
                </SpecialDiv>
              </Card.Content>
                <Link to={'/dictionary'}>
                  <Button color='yellow' size='small' fluid>
                    Go 
                  </Button>
                </Link>
            </Card>
    
            <Card>
              <Card.Content header textAlign='center'>
                <CardHeader>
                  Classes
                </CardHeader>
              </Card.Content>
              <Card.Content>
                <SpecialDiv>
                  <ContentStyle>
                    Are you interested in learning Alutiiq, and meeting other speakers and learners? Check out opportunities to learn in formal and informal settings by clicking the button.
                  </ContentStyle>
                </SpecialDiv>
              </Card.Content>
                <Link to={'/classes'}>
                  <Button color='yellow' size='small' fluid>
                    Go 
                  </Button>
                </Link>
            </Card>
    
          </Card.Group>
        </ContainerPad>

{/* GREEN DIV WITH ALL COMPONENET SEARCH FEATURE: MINUS DICTIOANRY */}

        <GreenDiv>
          <Grid stackable columns={2} verticalAlign='middle'>
            <Grid.Column width={4}> 
            <Icon name='search' size='big' />
              <WhiteTitle>
                Search
              </WhiteTitle>
            <Divider />
              <ContentStyleWhiteLeft>
                Where to start? Search the site for songs, books, curriculuar materials, games, articles, or posters. <i>Kita! Iwailuten caqia qainek!</i> 
              </ContentStyleWhiteLeft>
            </Grid.Column>

            <Grid.Column width={12}>
              <ContentStyleWhiteLeft>
                <Form>
                  <Form.Input
                    placeholder='Search...'
                    name='searchData'
                    value={searchData}
                    onChange={this.handleChange}
                    fluid
                  />
                  <Button onClick={() => this.handleRenderingSearchData() }>
                    Test
                  </Button>
                </Form> 
              </ContentStyleWhiteLeft>
              {
                renderSearch ?
                  <Div>
                    <Grid>
                      <Grid.Row>
                        <Link to={{ pathname: "/happenings", state: {newsComp: true} }}>
                          <WhiteTitle>
                            <Icon name='external alternate' size='small' /> Articles:
                          </WhiteTitle>
                        </Link>
                      </Grid.Row>
                      { this.renderSearchArticles() }
                    </Grid>

                    <Grid>                       
                      <Grid.Row>                                        
                        <Link to={'/books'}>
                          <WhiteTitle>
                            <Icon name='external alternate' size='small' /> Books: 
                          </WhiteTitle>
                        </Link>                                         
                      </Grid.Row>
                      { this.renderSearchBooks() }
                    </Grid>
                  </Div>
                :
                null
              }
            </Grid.Column>
          </Grid>
        </GreenDiv>

{/* SPECIAL CONTENT FEATURING SOMETHING IN THE NEAR FUTURE  */}

          <Container textAlign='center' verticalAlign='middle'>
          <SpecialDiv>
            <SpecialDiv>
              <Header textAlign='center'>
                <SubHeader>
                  <i>Alutiit'stun Niuwawik</i> Registration is Open!
                </SubHeader>
                  <Divider />
              </Header>
            </SpecialDiv>
    
              <SubHeaderContent>
                Are you interested in registering your little one in the Alutiiq Language Nest? The Alutiit'stun Niuwawik is now accepting student registrations for the fall of 2018.
                <br />
                <br />
                The Language Nest is a child-focused Alutiiq language immersion environment where language is acquired naturally. Children develop kindergarten readiness skills while they problem solve, explore, and play through the language in a supportive multi-generational setting.
              </SubHeaderContent>
            </SpecialDiv>
              <Button size='big' href='http://sunaq.org/languageprograms/language-nest/' target='_blank'>
                Learn more
              </Button>
          </Container>
          </div>
     
    )
  } 
}

const mapStateToProps = (state) => {
  return {
    posters: state.posters,
    games: state.games, 
    articles: state.articles,
    books: state.books,
    curriculum: state.curriculum,
    materials: state.material,
    songs: state.songs
  }
 }
export default connect(mapStateToProps)(Home)

