import React, {Component, Fragment} from 'react'
import ReactPlayer from 'react-player'
import {
  Header,
  Icon,
} from 'semantic-ui-react'
import {
  SpecialDiv,
  SongHead,
  ContentStyle,
  IconHover,
  IconLinkGrey,
  MainDiv,
} from './styles/CommonStyles'


const paddingStyle ={
  paddingTop: '30px',
}

class SongView extends Component {
  // using state so that I can use the same form to update the site via admin permissions
  state = {}

  componentDidMount(){
    if (this.props.song)
    this.setState({...this.props.song})
  }

  render() {
    return(
      <div>
        <SpecialDiv>
          <SongHead>
            <i>{this.props.song.title_alutiiq}</i>
          </SongHead>

          <ContentStyle>
            {this.props.song.title_english}
          </ContentStyle>

        {/* Audio ternary  */}

          {this.props.song.audio ?
            <ReactPlayer 
              url={this.props.song.audio}
              playing
              controls='true'
              height='60px'
            />
            :
            <ContentStyle>
              No Audio
            </ContentStyle>
          }

          {/* Video ternary */}

          {this.props.song.video ?
            <div style={paddingStyle}>
            <ReactPlayer 
              url={this.props.song.video}
              playing
              controls='true'
              height='350px'
            />
            </div>
            :
            <ContentStyle style={paddingStyle}>
              No video associated with this song
            </ContentStyle>      
          }

          {/* Script ternary */}

          {this.props.song.script ?
          <div style={paddingStyle}>
            <ContentStyle>
              Download song script
            </ContentStyle>
            <IconLinkGrey href={this.props.song.script}>
              <IconHover name='cloud download' />
            </IconLinkGrey>
          </div>
          :
          <ContentStyle style={paddingStyle}>
            No script available for this song
          </ContentStyle>
          }
           
        </SpecialDiv>
      </div>
    )
  }



  //https://vimeo.com/108160097 intsead of http://player.vimeo.com/video/108160097 .  
}

export default SongView