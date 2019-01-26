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
} from './styles/CommonStyles'

class Home extends Component {
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
  
  render() {
    return (
      <div>
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
            <WhiteTitle>
              Search:
            </WhiteTitle>
              <ContentStyleWhiteLeft>
                Find a good search picture here. Or a nice explanaition of what people can search for. 
              </ContentStyleWhiteLeft>
            </Grid.Column>

            <Grid.Column width={12}>
              <ContentStyleWhiteLeft>
                Here is where the search bar will be. 
              </ContentStyleWhiteLeft>
            </Grid.Column>
          </Grid>
        </GreenDiv>

{/* SPECIAL CONTENT FEATURING SOMETHING IN THE NEAR FUTURE  */}

          <Container textAlign='center' verticalAlign='center'>
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

