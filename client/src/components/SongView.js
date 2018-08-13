import React, {Component} from 'react'
import {
  Header,
} from 'semantic-ui-react'
import {
  SpecialDiv,
  SectionHead,
  ContentStyle,
} from './styles/CommonStyles'

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
          {/* <Header> */}
            <SectionHead>
              <i>{this.props.song.title_alutiiq}</i>
            </SectionHead>
          {/* </Header> */}
          <ContentStyle>
            {this.props.song.title_english}
          </ContentStyle>
        </SpecialDiv>
      </div>
    )
  }

}

export default SongView