import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getSongs } from '../reducers/songs';
import { Parallax } from 'react-parallax'
import {
  Header,
  Icon,
  Container,
  Grid,
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
  Div, 
  Pointer
} from './styles/CommonStyles'
import SongView from './SongView'
import Dancers from '../images/Dancers.jpg'
import ContentEditable from 'react-contenteditable'
import axios from 'axios'
import { getEditablesData } from '../reducers/editables'

let firstButton = new Audio('https://alutiiq-language-resources.s3-us-west-2.amazonaws.com/page_audio/Aturlita.mp3')
let secondButton = new Audio('https://alutiiq-language-resources.s3-us-west-2.amazonaws.com/page_audio/Atuuciqarpenga.mp3')

class Songs extends Component {
  state = {
    songData: {}, 
    songView: false,
    searchSongs: '',
    searchView: false, 
    songHeader: {},
    songBody: {}
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(getEditablesData())

    this.props.location.state == null ?
    dispatch(getSongs())
    : 
    this.setState( {songView: this.props.location.state.songView, songData: this.props.location.state.songData} ) // add this.props.location.state.songDataId
  }

  setSong = (song) => {
    this.setState( { songData: {...song}, songView: true } )
  }

  toggleView = () => {
    this.setState( { songView: !this.state.songView } ) 
  }

  toggleFirstIcon = () => {
    console.log(firstButton)
    firstButton.play() 
  }

  toggleSecondIcon = () => {
    console.log(secondButton)
    secondButton.play()
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

 handleChangeEditable = evt => {
   console.log('evt: ', evt)
   const elementType = evt._dispatchInstances.type
   
   if (elementType == 'SongsHeader') {
     const preStructuredHeader = this.props.editables.find(val => val.name === 'songHeader')
      preStructuredHeader.textShort = evt.target.value
      this.state.songHeader = preStructuredHeader
   } else if (elementType == 'SongsBody') {
     const presturcturedBody = this.props.editables.find(val => val.name === 'songBody')
      presturcturedBody.textLong = evt.target.value
      this.state.songBody = presturcturedBody
   }
 }

 handleBlurEditable = () => {
   const updatedHeader = this.state.songHeader
   const updatedBody = this.state.songBody

   if (updatedHeader.id) {
     console.log('in header PUT', updatedHeader)
     axios.put(`api/editables/${updatedHeader.id}`, updatedHeader)
   } 

   if (updatedBody.id) {
     console.log('in body PUT', updatedBody)
     axios.put(`api/editables/${updatedBody.id}`, updatedBody)
   }
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
    || 
    (s.script_english_words != null ?
    s.script_english_words.toLowerCase().includes(lowerCaseSearch)
    :
    null)
    ||
    (s.script_alutiiq_words != null ?
      s.script_alutiiq_words.toLowerCase().includes(lowerCaseSearch)
      :
      null)
  )

  return(
    filtered_songs.map( (song) =>
      <Grid.Row key={song.id}>
        <Grid.Column computer={6} tablet={10} mobile={10}>
          <SongStyle>
            <i>{song.title_alutiiq}</i> 
          </SongStyle>
        </Grid.Column>
        <Grid.Column width={6} only='computer'>
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
    const { searchSongs, songView } = this.state

    return(
    <div> 
{/* header and welcome section of songs page  */}
      <Parallax
          bgImage={Dancers}
          blur={{min: 5, max:1}}
          bgImageAlt="Illustration from Grouse Girl Book"
          strength={500}
        >
        <div style={{height: 350}}>
          <SpecialDiv>
            <Header textAlign="center">
              <SectionHead>
                <ContentEditable
                  html={this.props.editables.length >= 1 ? this.props.editables.find(val => val.name === 'songHeader').textShort : 'Songs'} // innerHTML of the editable div - this.state.html
                  disabled={this.props.user.id  ? false : true} // use true to disable editing maybe use the user in props here to give permissions
                  onChange={this.handleChangeEditable} // handle innerHTML change
                  tagName='SongsHeader' // Use a custom HTML tag (uses a div by default)
                  onBlur={this.handleBlurEditable}
                />
              </SectionHead>
            </Header>
              <ContentStyleWhite>
                <ContentEditable
                  html={this.props.editables.length >= 1 ? this.props.editables.find(val => val.name === 'songBody').textLong : `Songs have been sung for millenia to mark important events and people, tell stories, celebrate and honor. Traditional songs have helped inpire new, modern songs. <i>Quyanaasinaq</i> to all the lyricists and Elders who have contributed over the years to develop this growing collection of Alutiiq Songs.`} // innerHTML of the editable div - this.state.html
                  disabled={this.props.user.id  ? false : true} // use true to disable editing maybe use the user in props here to give permissions
                  onChange={this.handleChangeEditable} // handle innerHTML change
                  tagName='SongsBody' // Use a custom HTML tag (uses a div by default)
                  onBlur={this.handleBlurEditable}
                />
              </ContentStyleWhite>
          </SpecialDiv>
        </div>
    </Parallax>
        

{/* Two columns with key sing phrases and icons */}
    <SpecialDiv>
      <Grid>
        <Grid.Row centered columns={2} divided only='computer tablet'>
          <Grid.Column textAlign='center'>
            <SpecialDiv>
              <Pointer>
                <IconHover name='talk' size='large' color='grey' onClick={this.toggleFirstIcon}/>              
              </Pointer>
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
              <Pointer>
                <IconHover name='talk' size='large' color='grey' onClick={this.toggleSecondIcon} />
              </Pointer>
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
    </SpecialDiv>

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
                    <Grid.Column computer={6} tablet={10} textAlign='center'>
                      <ColumnHead>
                        Alutiiq Title
                      </ColumnHead>
                    </Grid.Column>
                    <Grid.Column width={6} only='computer' textAlign='center'>
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
          { songView === false ?
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
        { songView === false ?
          null
          :
          this.renderingSongView() 
        }
      </Grid.Row>
      <Grid.Row only='mobile'>
        <Div>
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
        </Div>
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
              <IconLink href='https://s3-us-west-2.amazonaws.com/alutiiq-language-resources/resources/Alutiiq+Songbook+NO+glossary.pdf' target='_blank'>
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
    songs: state.songs,
    editables: state.editables,
    user: state.user
  }
}

export default connect(mapStateToProps)(Songs)
