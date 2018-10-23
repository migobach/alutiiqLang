import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { getWords } from '../reducers/dictionary'
import {  
  Header,
  Grid,
  Icon, 
  Form,
  Button,
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
} from './styles/CommonStyles'
import DictionaryView from './DictionaryView'

const r = '\u{0280}'
const russianR = new RegExp(`[${r}]`,'g');

class Dictionary extends Component {

  state = { dictionaryWords: [], searchTerms: '', wordView: false, wordData: {}, searchView: false }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(getWords())
  }

  setWord = (word) => {
    this.setState( { wordData: {...word}, wordView: true})
  }
  
  renderWordView = () => {
    const { wordView } = this.state
    if(wordView === true) {
      return <DictionaryView word={this.state.wordData} toggleView={this.state.wordView} />
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

  clearSearch = () => {
    this.setState({ searchView: false, searchTerms: '', wordView: false })
  }
  
  words = () => {
    // const { dictionaryWords } = this.state
    // return dictionaryWords.map( word => {
    return this.props.words.map( word => {
      return(
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
          <Icon name='eye' size='large' color='grey' onClick= {() => this.setWord(word)} />
        </Grid.Column>
      </Grid.Row>
      )
    })
  }

  renderSearchWords = () => {
    const searchTerms = this.state.searchTerms
    const dictionaryWords = this.props.words
    const lowerCaseSearchWord = searchTerms.replace("'", "").toLowerCase()
// debugger
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
     // text the letter v - but other snippets in english don't work
    )
    
      
      // e.alutiiq_south != null, e.alutiiq_south.toLowerCase().includes(lowerCaseSearchWord)
    // )
     
      // e.alutiiq_north.toLowerCase().includes(lowerCaseSearchWord) || e.alutiiq_south.toLowerCase().includes(lowerCaseSearchWord))
      // add the other terms here something like e.alutiiq_north.include(searchTerms)
      // need to add some sort of terniary statement to handle the issue of if there is nothing in one of the alutiiq north or south columns
    
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
          <Icon name='eye' size='large' color='grey' onClick= {() => this.setWord(word)} />
        </Grid.Column>
      </Grid.Row>
      )
    ) 
  }
 

  render() {
    const { searchTerms, searchView } = this.state
    return(

// fist section describing the dictionary and welcoming user

    <Fragment>
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
      
{/* Search Function */}
      <SpecialDiv>
        <Form>
          <Form.Input
            placeholder="Search Words..."
            autoFocus={"true"}
            name='searchTerms'
            value={searchTerms}
            onChange={this.handleChange}
            fluid
            />
              <Button
                name='searchView'
                value={true}
                onClick={this.handleChange}
                >Search
              </Button>
              <Button
                onClick={this.clearSearch}
              >Clear
              </Button>
            {/* </div> */}
        </Form>
      </SpecialDiv>
       {/* </Form.Input> */}
       
{/* dictionary table - for computer and tablet only */}
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
                  {searchView === true ?
                    this.renderSearchWords()
                    :
                    this.words() 
                  }
              </Grid>
            </Div>
          </Grid.Column>

{/* Word View */}
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

{/* dictionary table - mobile only  */}
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
    {/* dictionary list of words */}
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
                  {searchView === true ?
                    this.renderSearchWords()
                    :
                    this.words() 
                  }
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
