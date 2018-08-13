import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getSongs } from '../reducers/songs';
import {
  Header,
  Icon,
  Container,
  Grid,
  Button,
} from 'semantic-ui-react'
import {
  SpecialDiv,
  SectionHead,
  ContentStyle,
  CardHeader,
  BlueDiv,
  ContentStyleWhite,
  ColumnHead,
  IconHover,
  IconLink,
} from './styles/CommonStyles'
import SongView from './SongView'


class Songs extends Component {
  state = {songData: {}, songView: false}

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(getSongs())
  }

  setSong = (song) => {
    this.setState( { songData: {...song}, songView: true })
  }

  renderingSongView = () => {
    const { songView } = this.state
    if (songView === true) {
      // debugger
      return <SongView song={this.state.songData} toggleView={this.state.songView}/>
    } else 
      return <SpecialDiv />
  }

  songs = () => {
    return this.props.songs.map( song => 
      <Grid.Row key={song.id}>
        <Grid.Column width={6}>
          <ContentStyle>
            <i>{song.title_alutiiq}</i>
          </ContentStyle>
        </Grid.Column>
        <Grid.Column width={6}>
          <ContentStyle>
            {song.title_english}
          </ContentStyle>
        </Grid.Column>
        <Grid.Column width={4} textAlign='center'>
          <Button onClick={() => this.setSong(song)}>
            <Icon name='eye' size='large' color='grey' />
          </Button>
        </Grid.Column>
      </Grid.Row>
    )
  }

  render() {
    return(
    <div> 
      <Grid>
        <Grid.Row columns={1}>
          <Grid.Column textAlign='center'>
            <SpecialDiv>
              <Header>
                <SectionHead>
                  Songs
                </SectionHead>
              </Header>
              <ContentStyle>
                {/* TODO change this back to being left aligned */}
                Songs have been sung for millenia to mark important events and people, tell stories, celebrate and honor. Traditional songs have helped inpire new, modern songs. <i>Quyanaasinaq</i> to all the lyricists and Elders who have contributed over the years to develop this growing collection of Alutiiq Songs.
              </ContentStyle>
            </SpecialDiv>
          </Grid.Column>
        </Grid.Row>

        {/* Two columns with key sing phrases */}

        <Grid.Row centered columns={2} divided>
          <Grid.Column textAlign='center'>
            <SpecialDiv>
              <IconHover name='talk' size='huge' color='grey' />
              <CardHeader>
                <i>Aturlita!</i>
              </CardHeader>
              <ContentStyle>
                Let's all sing!
              </ContentStyle>
            </SpecialDiv>
          </Grid.Column>
          <Grid.Column textAlign='center'>
            <SpecialDiv>
              <IconHover name='talk' size='huge' color='grey' />
              <CardHeader>
                <i>Atuut'ciqar'penga-qaa?</i>
              </CardHeader>
              <ContentStyle>
                Will you sing to me? 
              </ContentStyle>
            </SpecialDiv>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Grid stackable>
        <Grid.Row>
          <Grid.Column width={8}>

      {/* song output */}
      
            <SpecialDiv>
              <Grid celled='internally'>
                <Grid.Row>
                  <Grid.Column width={6}>
                    <ColumnHead>
                      Alutiiq Title
                    </ColumnHead>
                  </Grid.Column>
                  <Grid.Column width={6}>
                    <ColumnHead>
                      English Title
                    </ColumnHead>
                  </Grid.Column>
                  <Grid.Column width={4} textAlign='center'>
                    <ColumnHead>
                      View
                    </ColumnHead>
                  </Grid.Column>
                
                </Grid.Row>
                
                  { this.songs() }
                
              </Grid>
            </SpecialDiv>
        </Grid.Column>

          <Grid.Column width={8}>

            { this.renderingSongView() }

          </Grid.Column>
        </Grid.Row>
      </Grid>

      <BlueDiv>
        <Header textAlign='center'>
          <SectionHead>
            Songbook  
          </SectionHead>
        </Header>
        <ContentStyleWhite>
          We are proud to announce our Alutiiq Songbook! This book features traditional and contemporary Alutiiq songs including sheet music and lyrics for each song. To use the Songbook, click the icon below. Special thanks to author Peter Squartsoff. <i>Quyanaa</i> to all who contributed to this project. 
        </ContentStyleWhite>
          <SpecialDiv>
            <Container textAlign='center'>
              <IconLink href='http://www.alutiiqlanguage.org/files/Alutiiq%20Songbook%20NO%20glossary.pdf'>
                <IconHover name='book'/>
              </IconLink>
            </Container>
          </SpecialDiv>
      </BlueDiv>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    songs: state.songs
  }
}

export default connect(mapStateToProps)(Songs)