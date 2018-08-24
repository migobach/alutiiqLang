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
  ContentStyle,
} from './styles/CommonStyles'

const englishStyle = {
  fontSize: '2em',
}

class DictionaryView extends Component {
 
  handleSentence = () => {
    if (this.props.word.north_sentence === this.props.word.south_sentence &&  this.props.word.north_sentence != null) {
      return(<ContentStyle> Example sentence: {this.props.word.north_sentence}</ContentStyle>)
    } else if (this.props.word.north_sentence != null) {
      // debugger
      return((<ContentStyle>Northern style example sentence: {this.props.word.north_sentence}</ContentStyle>))
    } else if (this.props.word.south_sentence != null) {
      // debugger
      return((<ContentStyle> Southern style example sentence: {this.props.word.south_sentence}</ContentStyle>))
    } else {
      return ''
    }
  }

  handleWord = () => {
    if (this.props.word.alutiiq_north === null) {
      return(
      <div>
        <SongHead>
          <i>{this.props.word.alutiiq_south}</i>
        </SongHead>
      </div>
      )
    } else if (this.props.word.alutiiq_south === null) {
      return(
      <div>
        <SongHead>
          <i>{this.props.word.alutiiq_north}</i>
        </SongHead>
      </div>
      )
    } else {
      return(
          <Grid columns={2}>
            <Grid.Column>
              <SongHead>
                <i>{this.props.word.alutiiq_north}</i>
              </SongHead>
              <ContentStyle>
                Northern Style Alutiiq 
              </ContentStyle>
            </Grid.Column>
            <Grid.Column>
              <SongHead>
                <i>{this.props.word.alutiiq_south}</i>
              </SongHead>
              <ContentStyle>
                Southern Style Alutiiq 
              </ContentStyle>
            </Grid.Column>
          </Grid>
      )
    }
  }

  render() {
    return(
      <div>
        <SpecialDiv>
            {
              this.props.word.alutiiq_north === this.props.word.alutiiq_south ?
                <SongHead>
                  <i>{this.props.word.alutiiq_north}</i>
                </SongHead>
              :
              this.handleWord() 
            }
          <Divider />
          <ContentStyle style={englishStyle}>
            {this.props.word.english}
          </ContentStyle>
          
          {this.handleSentence()}

          <Divider hidden />
          <Divider hidden />

          <ContentStyle>
            Part of speech: {this.props.word.part_of_speech}
            <br />
            Category: {this.props.word.category}
          </ContentStyle>

        </SpecialDiv>
      </div>
    )
  }
}

export default DictionaryView
