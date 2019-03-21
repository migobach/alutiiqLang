import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { getWords } from '../reducers/dictionary'
import {  
  Header,
  Grid,
  Icon, 
  Form,
  Button,
  Loader,
  Dimmer,
} from 'semantic-ui-react'
import {
  BlueDiv,
  SectionHead,
  ColumnHead,
  ContentStyle,
  ContentStyleWhite,
  SpecialDiv,
  Div,
  Watermark,
  Pointer,
} from './styles/CommonStyles'
import DictionaryView from './DictionaryView'

const r = '\u{0280}'
const russianR = new RegExp(`[${r}]`,'g');

class Dictionary extends Component {

  state = { searchTerms: '', wordView: false, wordData: {}, loading: true }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(getWords())
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.words !== prevProps.words) {
      this.setState( {loading: false} )
    } else {
      return
    }
  }

  setWord = (word) => {
    this.setState( { wordData: {...word}, wordView: true})
  }
  
  renderWordView = () => {
     if (this.state.wordView === true) {       
      return <DictionaryView word={this.state.wordData} />
    } else
    return <SpecialDiv />
  }

  handleNorthSouth = (word) => {
    if(word.alutiiq_north === word.alutiiq_south) {
      return(<ContentStyle>{word.alutiiq_north}</ContentStyle>)
    } else if (word.alutiiq_north === null) {
      return(<ContentStyle>{word.alutiiq_south}</ContentStyle>)
    } else if (word.alutiiq_south === null) {
      return(<ContentStyle>{word.alutiiq_north}</ContentStyle>)
    } else {
      return(<ContentStyle>{word.alutiiq_north}</ContentStyle>)
    }
  }

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value })
  }

  nowLoading = () => {
    return ( 
      <Dimmer active inverted>
         <Loader size="huge" inverted> Utaqaligiu... </Loader>
       </Dimmer>
     )
   }

  renderSearchWords = () => {
    const searchTerms = this.state.searchTerms
    const dictionaryWords = this.props.words
    const lowerCaseSearchWord = searchTerms.replace("'", "").toLowerCase()
    let filtered_words = dictionaryWords.filter( e => 
      ((e.alutiiq_north != null) ? 
      e.alutiiq_north.replace("'", "").replace(russianR , "r").toLowerCase().includes(lowerCaseSearchWord)
      :
      null)
      ||
      ((e.alutiiq_south != null) ?
      e.alutiiq_south.replace("'", "").replace(russianR , "r").toLowerCase().includes(lowerCaseSearchWord)
      :
      null)
      ||
      e.english.replace("'", "").toLowerCase().includes(lowerCaseSearchWord)
    )
    return(
      filtered_words.map( (word)  =>
      <Grid.Row key={word.id}>
        <Grid.Column width={6} verticalAlign='middle'>
          <ContentStyle>
            {word.english}
          </ContentStyle>
        </Grid.Column>
        <Grid.Column width={6} verticalAlign='middle'>
          <i>{this.handleNorthSouth(word)}</i>
        </Grid.Column>
        
        <Grid.Column width={4} textAlign='center' verticalAlign='middle'>
          <Pointer>
            <Icon name='eye' size='large' color='grey' onClick= {() => this.setWord(word)} />
          </Pointer>
        </Grid.Column>
      </Grid.Row>
      )
    ) 
  }
 
// RENDERING THE COMPONENET

  render() {
    const { searchTerms, loading } = this.state
    return(

// FIRST SECTION WELCOMING THE USER TO THE PAGE

    <Fragment>
      <BlueDiv>
        <Header textAlign="center">
          <SectionHead>
            Dictionary
          </SectionHead>
        </Header>
        <ContentStyleWhite>
          Search our on-line dictionary for common words, a specific word you are interested in learning, or review an entire category of words. Click the Alutiiq word to see information about the word. Most words have audio clips, example sentencences and style notes.
          <br />
          <br />
          To start exploring, just begin typing in the search bar below.
        </ContentStyleWhite>
      </BlueDiv>
      
{/* SEARCH FUNCTION */}
      <SpecialDiv>
        <Form>
          <Form.Input
            placeholder="Search Words..."
            autoFocus={true}
            name='searchTerms'
            value={searchTerms}
            onChange={this.handleChange}
            fluid
            />
        </Form>
      </SpecialDiv>
       
{/* DICTIONARY FOR COMPUTER AND TABLET ONLY */}

      <Grid columns={2}>
        <Grid.Row only='computer tablet'>
          <Grid.Column>
            <Div>
              <Grid celled='internally'>
                <Grid.Row>
                  <Grid.Column width={6} verticalAlign='middle'>
                    <ColumnHead>
                      English
                    </ColumnHead>
                  </Grid.Column>
                  <Grid.Column width={6} verticalAlign='middle'>
                    <ColumnHead>
                      Alutiiq
                    </ColumnHead>
                  </Grid.Column>
                  <Grid.Column width={4} textAlign='center' verticalAlign='middle'>
                    <ColumnHead>
                      Details
                    </ColumnHead>
                  </Grid.Column>
                </Grid.Row>
                { loading === true ?
                  this.nowLoading()
                  :
                  this.renderSearchWords()
                }
              </Grid>
            </Div>
          </Grid.Column>

{/* WORD VIEW */}

        <Grid.Column>
          {this.state.wordView === false ?
          <Watermark>
            Click on a word to view details
          </Watermark>
          :
          this.renderWordView()
        }
        </Grid.Column>
      </Grid.Row>
    </Grid>

{/* DICTIONARY TABLE MOBILE ONLY  */}

  <Grid>
    <Grid.Row only='mobile'>
    {/* word view */}
      <Grid.Column>
          {this.state.wordView === false ?
          <Watermark>
            Click on a word to view details
          </Watermark>
          :
          this.renderWordView()
        }
        </Grid.Column>
      </Grid.Row>

  {/* DICTIONARY LIST OF WORDS */}

      <Grid.Row only='mobile'>
        <Grid.Column>
          <Div>
              <Grid celled='internally'>
                <Grid.Row>
                  <Grid.Column width={6} verticalAlign='middle'>
                    <ColumnHead>
                      English
                    </ColumnHead>
                  </Grid.Column>
                  <Grid.Column width={6} verticalAlign='middle'>
                    <ColumnHead>
                      Alutiiq
                    </ColumnHead>
                  </Grid.Column>
                  <Grid.Column width={4} textAlign='center' verticalAlign='middle'>
                    <ColumnHead>
                      Details
                    </ColumnHead>
                  </Grid.Column>
                </Grid.Row>
                  { this.renderSearchWords() }
              </Grid>
          </Div>
        </Grid.Column>
      </Grid.Row>
      </Grid>
    </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    words: state.words
  }
}

export default connect(mapStateToProps)(Dictionary)
