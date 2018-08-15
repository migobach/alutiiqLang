import React, {Component, Fragment} from 'react'
import Iframe from 'react-iframe'
import {
  Header,
} from 'semantic-ui-react'
import {
  SpecialDiv,
  SongHead,
  ContentStyle,
} from './styles/CommonStyles'
import ReactPlayer from 'react-player'

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
           
        </SpecialDiv>
      </div>
    )
  }



  //https://vimeo.com/108160097 intsead of http://player.vimeo.com/video/108160097 .  
}

export default SongView