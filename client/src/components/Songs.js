import React, { Component } from 'react'
import axios from 'axios'
import { setFlash } from '../reducers/flash'
import {
  Header,
  Icon,
  Container,
  Grid,
} from 'semantic-ui-react'
import {
  SpecialDiv,
  SectionHead,
  ContentStyle,
  CardHeader,
  BlueDiv,
  ContentStyleWhite,
  ColumnHead,
} from './styles/CommonStyles'

class Songs extends Component {
  state = { songs: [] }

  componentDidMount() {
    axios.get('/api/songs')
      .then(res => {
        this.setState({ songs: res.data })
      })
      .catch( (err) => setFlash('Failed to retrieve songs', 'red') )
  }

  songs = () => {
    return this.state.songs.map( song => 
      <Grid.Row key={song.id}>
        <Grid.Column width={5}>
          {song.title_alutiiq}
        </Grid.Column>
        <Grid.Column width={5}>
          {song.title_english}
        </Grid.Column>
        <Grid.Column width={2} textAlign='center'>
          {song.audio}
        </Grid.Column>
        <Grid.Column width={2} textAlign='center'>
          {song.video}
        </Grid.Column>
        <Grid.Column width={2} textAlign='center'>
          {song.text}
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
              <Icon name='talk' size='huge' color='grey' />
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
              <Icon name='talk' size='huge' color='grey' />
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

      {/* song output */}

      <SpecialDiv>
        <Grid celled='internally'>
          <Grid.Row>
            <Grid.Column width={5}>
              <ColumnHead>
                Alutiiq Title
              </ColumnHead>
            </Grid.Column>
            <Grid.Column width={5}>
              <ColumnHead>
                English Title
              </ColumnHead>
            </Grid.Column>
            <Grid.Column width={2}>
              <ColumnHead>
                Audio
              </ColumnHead>
            </Grid.Column>
            <Grid.Column width={2}>
              <ColumnHead>
                Video
              </ColumnHead>
            </Grid.Column>
            <Grid.Column width={2}>
              <ColumnHead>
                Text
              </ColumnHead>
            </Grid.Column>
          </Grid.Row>
          
            { this.songs() }
          
        </Grid>
      </SpecialDiv>

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
              <Icon name='book' size='huge' />
            </Container>
          </SpecialDiv>
      </BlueDiv>
    </div>
    )
  }
}

export default Songs

// needs to be a class becuase I would there to be songs that are live searching 