import React, {Component} from 'react'
import { connect } from 'react-redux'
import { getPosters } from '../../reducers/posters'
import { getGames } from '../../reducers/games'
import {
  Header,
  Grid,
  Icon, 
  Image,
  Divider,
} from 'semantic-ui-react'
import {
  SpecialDiv,
  SectionHead,
  BlueDiv,
  ContentStyle,
  ColumnHead,
  SongStyle,
  SongStyleLeft,
  Pointer, 
  Div,
} from '../styles/CommonStyles'
import GameView from './GameView.js'
import Values from '../../images/ValuesPoster.jpg'
import Games from '../../images/games.jpg'

class Posters extends Component {
  state = { gameViewComp: false, gameData: {} }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(getGames())
    dispatch(getPosters())
  }

  setGame = () => {
    this.setState( { gameViewComp: !this.state.gameViewComp })
  }

  renderGameView = () => {
    const { gameViewComp } = this.state
    if (gameViewComp === true) {
      return (
        <SpecialDiv>
          <GameView song={this.state.gameData} view={this.toggleView} />
        </SpecialDiv>
      )
    } else 
      return <SpecialDiv />
  }

  renderPosters = () => {
    return this.props.posters.map( poster => 
      <Grid.Row key={poster.id}>
      <Grid.Column computer={5} tablet={5} mobile={10}>
        <SongStyle>
          {poster.title} 
        </SongStyle>
      </Grid.Column>
      <Grid.Column width={7} only='computer tablet'>
        <SongStyleLeft>
          {poster.author}
        </SongStyleLeft>
      </Grid.Column>
      <Grid.Column computer={4} tablet={4} mobile={6} textAlign='center'>
        <SongStyle>
          { poster.poster_link ?
            <Pointer>
              <a href={poster.poster_link} target='_blank'>
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
  }

  renderGameNames = () => {
    return this.props.games.map( game => {
      if (game.order !== 1) {
        return ( null )
      } else 
      return (
        <Grid.Row>
          <Grid.Column width = {10}>
            <SongStyle>
              {game.game_name_english}
            </SongStyle>
          </Grid.Column>
          <Grid.Column width={6} textAlign='center' verticalAlign='center'>
            <SongStyle>
              <Pointer>
                <Icon name='eye' size='large' color='grey' onClick={() => this.setGame(game)} />
              </Pointer>
            </SongStyle>  
          </Grid.Column>
        </Grid.Row>
      )
    })
  }

  render() {
    return(
      <div>
        <BlueDiv>
          <Header textAlign='center'>
            <SectionHead>
              Posters and Games
            </SectionHead>
          </Header>
        </BlueDiv> 

        <SpecialDiv>
          <ContentStyle>
            Posters have been created to visually cue learners into speaking Alutiiq. They may be printed out and posted around the house, office, or classroom to bring Alutiiq language into your daily routines.
            <br />
            <br />
            Some of the posters that have been developed help learners perform basic conversation in Alutiiq, identify foods, colors, emotions, or items visible all around us on a daily basis. Click on the posters below to access a printable PDF and begin using these posters to help expand your Alutiiq vocabulary and conversational abilities. 
          </ContentStyle>
        </SpecialDiv>

{/* POSTER SECTION */}

        <Grid stackable columns={2} verticalAlign='middle'>
          <Grid.Column width={6} textAlign='center'>
            <Image src={Values} 
              size='medium'
              verticalAlign='middle' 
              href="https://s3-us-west-2.amazonaws.com/alutiiq-language-resources/poster/Alutiiq+Values+Poster.pdf" 
              target="_blank" 
              />
          </Grid.Column>
          <Grid.Column width={10}>
            <SpecialDiv>
                <Div>
                  <Grid celled='internally'>
                    <Grid.Row>
                      <Grid.Column computer={5} tablet={5} mobile={10} verticalAlign='middle' textAlign='center'>
                        <ColumnHead >
                          Poster Title
                        </ColumnHead>
                      </Grid.Column>
                      <Grid.Column width={7} verticalAlign='middle' only='computer tablet' textAlign='center'>
                        <ColumnHead>
                          Creator
                        </ColumnHead>
                      </Grid.Column>
                      <Grid.Column computer={4} tablet={4} mobile={6} verticalAlign='middle' textAlign='center'>
                        <ColumnHead>
                          View
                        </ColumnHead>
                      </Grid.Column>
                    </Grid.Row>
                    { this.renderPosters() }
                  </Grid>
                </Div>
              </SpecialDiv>
          </Grid.Column>
        </Grid>

        <Divider hidden/>

{/* RENDERING GAME VIEW */}

        <Grid>
          <Grid.Row>
            {/* <SpecialDiv> */}
              {
                this.state.gameViewComp == true ? 
                  
                  this.renderGameView() 
                  
                : 
                null
              }
            {/* </SpecialDiv> */}
          </Grid.Row>
        </Grid>


{/* GAMES LIST SECTION */}

        <Grid stackable columns={2} verticalAlign='middle'>
          <Grid.Column width={8}>
            <SpecialDiv>
                <Div>
                  <Grid celled='internally'>
                    <Grid.Row>
                      <Grid.Column computer={10} tablet={10} mobile={10} verticalAlign='middle' textAlign='center'>
                        <ColumnHead >
                          Game Title
                        </ColumnHead>
                      </Grid.Column>
                     
                      <Grid.Column computer={6} tablet={6} mobile={6} verticalAlign='middle' textAlign='center'>
                        <ColumnHead>
                          View
                        </ColumnHead>
                      </Grid.Column>
                    </Grid.Row>
                    { this.renderGameNames() }
                  </Grid>
                </Div>
              </SpecialDiv>
          </Grid.Column>

          <Grid.Column width={8} textAlign='center'>
            <SpecialDiv>
              <BlueDiv>
                <Image src={Games} 
                  size='massive'
                  verticalAlign='middle' 
                  href="https://s3-us-west-2.amazonaws.com/alutiiq-language-resources/poster/Alutiiq+Values+Poster.pdf" 
                  target="_blank" 
                  />
              </BlueDiv>
            </SpecialDiv>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posters: state.posters,
    games: state.games
  }
}

export default connect(mapStateToProps)(Posters)
