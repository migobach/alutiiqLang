import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getSongs } from '../reducers/songs';
import {
  Header,
  Icon,
  Container,
  Grid,
  Sticky, 
  Rail,
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
} from './styles/CommonStyles'
import SongView from './SongView'

class Songs extends Component {
  state = {songData: {}, songView: false, ref: {} }

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
      return <SongView song={this.state.songData} toggleView={this.state.songView} />
    } else 
      return <SpecialDiv />
  }

  handleContextRef = contextRef => {
    this.setState({ ref: {contextRef}})
  }

  songs = () => {
    return this.props.songs.map( song => 
      <Grid.Row key={song.id}>
        <Grid.Column computer={6} tablet={6}>
          <SongStyle>
            <i>{song.title_alutiiq}</i> 
          </SongStyle>
        </Grid.Column>
        <Grid.Column width={6} only='computer tablet'>
          <SongStyle>
            {song.title_english}
          </SongStyle>
        </Grid.Column>
        <Grid.Column computer={4} tablet={4} textAlign='center'>
        <SongStyle>
          <Icon name='eye' size='large' color='grey' onClick={() => this.setSong(song)}/>
        </SongStyle>
        </Grid.Column>
      </Grid.Row>
    )
  }

  songsMobile = () => {
    return this.props.songs.map( song => 
      <Grid.Row key={song.id}>
        <Grid.Column width={10}>
          <SongStyle>
            <i>{song.title_alutiiq}</i> 
          </SongStyle>
        </Grid.Column>
        <Grid.Column width={6} textAlign='center'>
          <SongStyle>
            <Icon name='eye' size='large' color='grey' onClick={() => this.setSong(song)}/>
          </SongStyle>
        </Grid.Column>
      </Grid.Row>
    )
  }

  render() {
    const {contextRef} = this.state.ref
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

{/* start of the song list and conditional component - only renders on computer and tablet */}
      <Grid columns={2}>
        <Grid.Row only='computer tablet'>
          <Grid.Column>
            <div ref={this.handleContextRef}>
              <SpecialDiv>
                {_.times(1, i => 
                  <Grid celled='internally' key={i}>
                    <Grid.Row>
                      <Grid.Column computer={6} tablet={6}>
                        <ColumnHead>
                          Alutiiq Title
                        </ColumnHead>
                      </Grid.Column>
                      <Grid.Column width={6} only='computer tablet'>
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
                      { this.songs() }
                  </Grid>
                )}

                <Rail position='right'>
                  <Sticky context={contextRef} as={SongDiv}>
                  { this.state.songView === false ?
                    <SpecialDiv>
                      <Watermark>
                        Click on a song to view 
                      </Watermark>
                    </SpecialDiv>
                  :
                    this.renderingSongView() 
                  
                  }
                  </Sticky>
                </Rail>
              </SpecialDiv>
           </div>
        </Grid.Column>  
      </Grid.Row>

{/* start of the song list and conditional component - only renders on phones */}
      <Grid.Row only='mobile'>
        <SpecialDiv>
        {_.times(1, i => 
          <Grid celled='internally' key={i}>
            <Grid.Row>
              <Grid.Column width={10}>
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
              { this.songsMobile() }
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
