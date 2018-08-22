import _ from 'lodash'
import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import {
  Divider,
  Grid,
} from 'semantic-ui-react'
import {
  SpecialDiv,
  SongHead,
} from './styles/CommonStyles'

class DictionaryView extends Component {
 
  render() {
    return(
      <div>
        <SpecialDiv>
          <SongHead>
            {/* {this.props.word.english} */}
            Proof
          </SongHead>
        </SpecialDiv>
      </div>
    )
  }
}

export default DictionaryView
