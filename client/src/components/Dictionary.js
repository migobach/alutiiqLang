import React, { Component } from 'react'
import { connect } from 'react-redux'
import {  
  Header,
  Grid,
  Icon,
} from 'semantic-ui-react'
import { getWords } from '../reducers/words'
import {
  BlueDiv,
  SectionHead,
  SpecialDiv,
  ColumnHead,
  ContentStyle,
  ContentStyleWhite,
} from './styles/CommonStyles'

class Dictionary extends Component {

  state = { dicWords: [] }

  componentDidMount() {
    // debugger
    const { dispatch } = this.props
    dispatch(getWords())
    this.populateState()
  }
  
  populateState = () => {
    this.setState({ dicWords: this.props.words })
  }

  componentDidUpdate

  words = () => {
    return this.props.words.map( word => 
      <Grid.Row key={word.id}>
        <Grid.Column width={4} verticalAlign='middle'>
          <ContentStyle>
            {word.english}
          </ContentStyle>
        </Grid.Column>
        <Grid.Column width={4} verticalAlign='middle'>
          <ContentStyle>
            {word.alutiiq_north}
          </ContentStyle>
        </Grid.Column>
        <Grid.Column width={4} textAlign='center' verticalAlign='middle'>
          {
            word.north_audio ? 
            // Need to interpolate: http://www.alutiiqlanguage.org/files/dictionary_audio/
            <a href={"http://www.alutiiqlanguage.org/files/dictionary_audio/".concat(word.north_audio)}>
              <Icon name='sound' size='large' color='grey' />
            </a>
            : 
            <a href={"http://www.alutiiqlanguage.org/files/dictionary_audio/".concat(word.south_audio)}>
              <Icon name='sound' size='large' color='grey' />
            </a>
          }
        </Grid.Column>
      </Grid.Row>
    )
  }

  render() {
    return(
    <div>
      <BlueDiv>
        <Header textAlign="center">
          <SectionHead>
            Dictionary
          </SectionHead>
        </Header>
        <ContentStyleWhite>
          Search our on-line dictionary for common words, a specific word you are interested in learning, or review an entire category of words. Click the Alutiiq word to see a flashcard with an image and audio clip.
        </ContentStyleWhite>
      </BlueDiv>
      
      {/* dictionary table  */}

      <SpecialDiv>
        <Grid celled='internally'>
          <Grid.Row>
            <Grid.Column width={4} verticalAlign='middle'>
              <ColumnHead>
                English
              </ColumnHead>
            </Grid.Column>
            <Grid.Column width={4} verticalAlign='middle'>
              <ColumnHead>
                Alutiiq
              </ColumnHead>
            </Grid.Column>
            <Grid.Column width={4} textAlign='center' verticalAlign='middle'>
              <ColumnHead>
                Audio
              </ColumnHead>
            </Grid.Column>
          </Grid.Row>

            { this.words() }

        </Grid>
      </SpecialDiv>
    </div>
    )
  }


}

const mapStateToProps = (state) => {
  return {
    words: state.words
  }
}

export default connect(mapStateToProps)(Dictionary)
