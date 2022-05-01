import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import {
  Divider,
  Grid,
} from 'semantic-ui-react'
import {
  SpecialDiv,
  WordStyle,
  ContentStyle,
  ContentStyleThick,
  ContentStyleDictionaryView,
} from './styles/CommonStyles'

const englishStyle = {
  fontSize: '2em',
}

class DictionaryView extends Component {

  handleSentence = () => {
    if (this.props.word.north_sentence === this.props.word.south_sentence && this.props.word.north_sentence !== null) {
      return (
        <div>
          <ContentStyleThick>Example sentence:</ContentStyleThick>
          <ContentStyle><i>{this.props.word.north_sentence}</i></ContentStyle>
        </div>
      )
    } else if (this.props.word.north_sentence !== "" || this.props.word.north_sentence !== null) {
      return (
        <div>
          <ContentStyleThick>Northern style example sentence: </ContentStyleThick>
          <ContentStyle><i>{this.props.word.north_sentence}</i></ContentStyle>
        </div>
      )
    } else if (this.props.word.south_sentence !== "" || this.props.word.south_sentence !== null) {
      return (
        <div>
          <ContentStyleThick>Southern style example sentence:</ContentStyleThick>
          <ContentStyle><i>{this.props.word.south_sentence}</i></ContentStyle>
        </div>
      )

    } else {
      return null
    }
  }

  handleWord = () => {
    if (this.props.word.alutiiq_south !== null && this.props.word.alutiiq_north === null) {
      return (
        <div>
          <WordStyle>
            <i>{this.props.word.alutiiq_south}</i>
          </WordStyle>
        </div>
      )
    } else if (this.props.word.alutiiq_north !== null && this.props.word.alutiiq_south === null) {
      return (
        <div>
          <WordStyle>
            <i>{this.props.word.alutiiq_north}</i>
          </WordStyle>
        </div>
      )
    } else {
      return (
        <Grid columns={2}>
          <Grid.Column>
            <WordStyle>
              <i>{this.props.word.alutiiq_north}</i>
            </WordStyle>
            <ContentStyle>
              Northern Style Alutiiq
            </ContentStyle>
          </Grid.Column>
          <Grid.Column>
            <WordStyle>
              <i>{this.props.word.alutiiq_south}</i>
            </WordStyle>
            <ContentStyle>
              Southern Style Alutiiq
            </ContentStyle>
          </Grid.Column>
        </Grid>
      )
    }
  }

  handleAudio = () => {
    if ((this.props.word.north_audio === this.props.word.south_audio) && this.props.north_audio !== null) {
      return (<ReactPlayer
        url={this.props.word.north_audio}
        controls={true}
        height='5em'
        width='25em'
        loop={false}
      />)
    } else if (this.props.word.north_audio === "" || (this.props.word.north_audio === null && this.props.word.south_audio !== null)) {
      return (<ReactPlayer
        url={this.props.word.south_audio}
        controls={true}
        height='5em'
        width='25em'
        loop={false}
      />)
    } else if (this.props.word.south_audio === "" || (this.props.word.south_audio && this.props.word.north_audio !== null)) {
      return (<ReactPlayer
        url={this.props.word.north_audio}
        controls={true}
        height='5em'
        width='25em'
        loop={false}
      />)
    } else if (this.props.word.north_audio !== null && this.props.word.south_audio !== null) {
      return (<Grid>
        <Grid.Row>
          <Grid.Column width={8} stretched>
            <ContentStyle>
              Northern Style Alutiiq:
            </ContentStyle>
            <ReactPlayer
              url={this.props.word.north_audio}
              controls={true}
              height='5em'
              width='15em'
              loop={false}
            />
          </Grid.Column>
          <Grid.Column width={8} stretched>
            <ContentStyle>
              Southern Style Alutiiq:
            </ContentStyle>
            <ReactPlayer
              url={this.props.word.south_audio}
              controls={true}
              height='5em'
              width='15em'
              loop={false}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>)
    } else {
      return ''
    }
  }

  render() {

    return (
      <div>
        <SpecialDiv>
          {
            (this.props.word.alutiiq_north === this.props.word.alutiiq_south) ?
              <WordStyle>
                <i>{this.props.word.alutiiq_north}</i>
              </WordStyle>
              :
              this.handleWord()
          }
          <Divider />
          <ContentStyle style={englishStyle}>
            {this.props.word.english}
          </ContentStyle>

          {/* AUDIO PLAYER TERNARY */}

          {
            (this.props.word.north_audio === null && this.props.word.south_audio === null) ?
              null
              :
              this.handleAudio()
          }

          <Divider hidden />

          {/* SENTENCE TERNARY */}

          {
            (this.props.word.north_sentence === null && this.props.word.south_sentence === null) ?
              null
              :
              this.handleSentence()
          }

          <Divider hidden />

          {/* PART OF SPEECH TERNARY  */}

          {this.props.word.parth_of_speech !== null ?
            <div>
              <ContentStyleThick>
                Part of speech:
              </ContentStyleThick>
              <ContentStyleDictionaryView>
                {this.props.word.part_of_speech}
              </ContentStyleDictionaryView>
            </div>
            :
            null
          }

          {/* CATEGORY TERNARY  */}

          {this.props.word.category !== null ?
            <div>
              < br />
              <ContentStyleThick>
                Category of speech:
              </ContentStyleThick>
              <ContentStyleDictionaryView>
                {this.props.word.category}
              </ContentStyleDictionaryView>
            </div>
            :
            null
          }

          {/* EXAMPLES / CONJUGATIONS / IRREGULARS  */}

          {this.props.word.examples_conjugation_irregulars !== null ?
            <div>
              <ContentStyleThick>
                Examples / Conjugations / Irregulars:
              </ContentStyleThick>
              <ContentStyleDictionaryView>
                {this.props.word.examples_conjugation_irregulars}
              </ContentStyleDictionaryView>
            </div>
            :
            null
          }

          {/* CULTURAL SIGNIFICANCE  */}

          {this.props.word.cultural_significance !== null ?
            <div>
              <ContentStyleThick>
                Cultural notes:
              </ContentStyleThick>
              <ContentStyleDictionaryView>
                {this.props.word.cultural_significance}
              </ContentStyleDictionaryView>
            </div>
            :
            null
          }

          {/* NEGATIVE */}

          {this.props.word.negatives !== null ?
            <div>
              <ContentStyleThick>
                Negative forms:
              </ContentStyleThick>
              <ContentStyleDictionaryView>
                {this.props.word.negatives}
              </ContentStyleDictionaryView>
            </div>
            :
            null
          }


        </SpecialDiv>
      </div>
    )
  }
}

export default DictionaryView
