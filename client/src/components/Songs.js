import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getSongs } from '../reducers/songs';
import {
  Header,
  Icon,
  Container,
  Grid,
  Button,
  Form,
} from 'semantic-ui-react'
import {
  SpecialDiv,
  SectionHead,
  ContentStyle,
  SongStyle,
  CardHeader,
  BlueDiv,
  ContentStyleWhite,
  ColumnHead,
  IconHover,
  IconLink,
  Watermark,
  SongDiv,
  SongHeight,
} from './styles/CommonStyles'
import SongView from './SongView'

class Songs extends Component {
  state = {
    songData: {}, 
    songView: false,
    searchSongs: '',
    searchView: false,
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(getSongs())
  }

  setSong = (song) => {
    this.setState( { songData: {...song}, songView: true })
  }

  toggleView = () => {
    this.setState( { songView: !this.state.songView })
  }

  renderingSongView = () => {
    const { songView } = this.state
    if (songView === true) {
      return <SongView song={this.state.songData} view={this.toggleView} />
    } else 
      return <SpecialDiv />
  }

 handleChange = (e, { name, value }) => {
    this.setState({ [name]: value })
 }

 renderSearchSongs = () => {
   const { searchSongs } = this.state
   const songs = this.props.songs
   const lowerCaseSearch = searchSongs.toLowerCase()

   let filtered_songs = songs.filter( s => 
    s.title_english.toLowerCase().includes(lowerCaseSearch)
    ||
    s.title_alutiiq.toLowerCase().includes(lowerCaseSearch)
    ||
    ((s.credit != null) ?
    s.credit.toLowerCase().includes(lowerCaseSearch)
    :
    null)
    ||
    ((lowerCaseSearch === 'traditional') ?
    s.traditional 
    :
    null)
    ||
    ((s.notes != null) ?
    s.notes.toLowerCase().includes(lowerCaseSearch)
    : 
    null)
  )

  return(
    filtered_songs.map( (song) =>
      <Grid.Row key={song.id}>
        <Grid.Column computer={6} tablet={6} mobile={10}>
          <SongStyle>
            <i>{song.title_alutiiq}</i> 
          </SongStyle>
        </Grid.Column>
        <Grid.Column width={6} only='computer tablet'>
          <SongStyle>
            {song.title_english}
          </SongStyle>
        </Grid.Column>
        <Grid.Column computer={4} tablet={4} mobile={4} textAlign='center'>
        <SongStyle>
          <Icon name='eye' size='large' color='grey' onClick={() => this.setSong(song)}/>
        </SongStyle>
        </Grid.Column>
      </Grid.Row>
    )
  )
 }


  render() {
    const { searchSongs } = this.state

    return(
    <div> 
{/* header and welcome section of songs page  */}
      <SpecialDiv>
        <Header textAlign='center'>
          <SectionHead>
            Songs
          </SectionHead>
        </Header>
        <ContentStyle>
          Songs have been sung for millenia to mark important events and people, tell stories, celebrate and honor. Traditional songs have helped inpire new, modern songs. <i>Quyanaasinaq</i> to all the lyricists and Elders who have contributed over the years to develop this growing collection of Alutiiq Songs.
        </ContentStyle>
      </SpecialDiv>
        

{/* Two columns with key sing phrases and icons */}
      <Grid>
        <Grid.Row centered columns={2} divided only='computer tablet'>
          <Grid.Column textAlign='center'>
            <SpecialDiv>
              <IconHover name='talk' size='large' color='grey' />
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
              <IconHover name='talk' size='large' color='grey' />
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

{/* Song search field and buttons */}

      <SpecialDiv>
        <Form>
          <Form.Input
            placeholder='Search Songs...'
            name='searchSongs'
            value={searchSongs}
            onChange={this.handleChange}
            fluid
          />
          <Button
            content='search'
            icon='search'
            labelPosition='right'
            name='searchView'
            value={true}
            onClick={this.handleChange}
          />
        </Form>
      </SpecialDiv>

{/* start of the song list and conditional component - only renders on computer and tablet */}

      <Grid columns={2}>
        <Grid.Row only='computer tablet'>
          <Grid.Column>
            <SongHeight>
              <SpecialDiv>
                <Grid celled='internally' > 
                  <Grid.Row>
                    <Grid.Column computer={6} tablet={6} textAlign='center'>
                      <ColumnHead>
                        Alutiiq Title
                      </ColumnHead>
                    </Grid.Column>
                    <Grid.Column width={6} only='computer tablet' textAlign='center'>
                      <ColumnHead>
                        English Title
                      </ColumnHead>
                    </Grid.Column>
                    <Grid.Column computer={4} tablet={4} textAlign='center'>
                      <ColumnHead>
                        View
                      </ColumnHead>
                    </Grid.Column>
                  </Grid.Row>
                    { this.renderSearchSongs() }
                </Grid>
              </SpecialDiv>
            </SongHeight>
        </Grid.Column>  

        {/* New conditionally rendered song view - not sticky */}
        <Grid.Column>
          { this.state.songView === false ?
            <SongDiv>
              <Watermark>
                Click on a song to view
              </Watermark>
            </SongDiv>
            :
            this.renderingSongView()
          }
        </Grid.Column>
      </Grid.Row>

{/* start of the song list and conditional component - only renders on phones */}

      <Grid.Row only='mobile'>
        <SpecialDiv>
        {_.times(1, i => 
          <Grid celled='internally' key={i}>
            <Grid.Row>
              <Grid.Column width={10} textAlign='center'>
                <ColumnHead>
                  Alutiiq Title
                </ColumnHead>
              </Grid.Column>
              <Grid.Column width={6} textAlign='center'>
                <ColumnHead>
                  View
                </ColumnHead>
              </Grid.Column>
            </Grid.Row>
              { this.renderSearchSongs() }
          </Grid>
        )}
        </SpecialDiv>
      </Grid.Row>
      <Grid.Row only='mobile'>
        { this.state.songView === false ?
          <SpecialDiv>
            <Watermark>
              Click on a song to view
            </Watermark>
          </SpecialDiv>
          :
          this.renderingSongView() 
        }
      </Grid.Row>
    </Grid>

{/* blue songbook section at the bottom of the page */}
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
