import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { getWords } from '../reducers/dictionary'
import { getEditablesData } from '../reducers/editables'
import { Parallax } from 'react-parallax'
import {
  Header,
  Grid,
  Icon,
  Form,
  Loader,
  Dimmer,
} from 'semantic-ui-react'
import {
  SectionHead,
  ColumnHead,
  ContentStyle,
  ContentStyleCenter,
  SpecialDiv,
  DictionaryHeight,
  Div,
  Watermark,
  Pointer,
} from './styles/CommonStyles'
import ContentEditable from 'react-contenteditable'
import axios from 'axios'
import DictionaryView from './DictionaryView'
import DictionaryTop from '../images/Dictionary.jpg'

const r = '\u{0280}'
const russianR = new RegExp(`[${r}]`,'g');

class Dictionary extends Component {
  state = {
    searchTerms: '',
    wordView: false,
    wordData: {},
    loading: true,
    dictionaryHead: {},
    dictionaryBody: {},
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(getWords())
    dispatch(getEditablesData());
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
      ((e.alutiiq_north !== null) ?
      e.alutiiq_north.replace("'", "").replace(russianR , "r").toLowerCase().includes(lowerCaseSearchWord)
      :
      null)
      ||
      ((e.alutiiq_south !== null) ?
      e.alutiiq_south.replace("'", "").replace(russianR , "r").toLowerCase().includes(lowerCaseSearchWord)
      :
      null)
      ||
      e.english.replace("'", "").toLowerCase().includes(lowerCaseSearchWord)

      // TODO: bring back if we populate the part_of_speech
      // TODO: SEARCH BY CATEGORY AND
      // TOOD: ADD ADDITION_MEANING COLUMN, CREATE MIGRATION, HANDLE NEW COLUMNS IN CSV UPLOAD
      ||
      ((e.part_of_speech !== null) ?
      e.part_of_speech.toLowerCase().includes(lowerCaseSearchWord)
      :
      null)
      ||
      ((e.additional_meanings !== null) ?
      e.additional_meanings.toLowerCase().includes(lowerCaseSearchWord)
      :
      null)
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

  handleChangeEditable = (evt) => {
    const elementType = evt._dispatchInstances.type

    if (elementType === 'dictionaryHead') {;
      if (this.props.editables.find(val => val.name === 'dictionaryHead')!== undefined ) {
        const preStructuredHeader = this.props.editables.find(val => val.name === 'dictionaryHead')
          preStructuredHeader.textShort = evt.target.value
          this.setState({dictionaryHead: preStructuredHeader })
      } else {
        this.setState({ dictionaryHead: { name: 'dictionaryHead', textShort: evt.target.value }})
      }
    }

    if (elementType === 'dictionaryBody') {;
      if (this.props.editables.find(val => val.name === 'dictionaryBody')!== undefined ) {
        const preStructuredHeader = this.props.editables.find(val => val.name === 'dictionaryBody')
          preStructuredHeader.textLong = evt.target.value
          this.setState({dictionaryBody: preStructuredHeader })
      } else {
        this.setState({ dictionaryBody: { name: 'dictionaryBody', textLong: evt.target.value }})
      }
    }
  }

  handBlurEditable = () => {
    const updatedHeader = this.state.dictionaryHead
    const updatedBody = this.state.dictionaryBody

    console.log('updatedHeader:', updatedHeader)
    console.log('updatedBody:', updatedBody)

    if (updatedBody.id === undefined && updatedBody.name === 'dictionaryBody') {
      console.log('in header POST', updatedBody)
      axios.post('api/editables', updatedBody)
    }

    if(updatedBody.id) {
      console.log('in body PUT', updatedBody)
      axios.put(`api/editables/${updatedBody.id}`, updatedBody)
    }

    if (updatedHeader.id === undefined && updatedHeader.name === 'dictionaryHead') {
      console.log('in header CREATE', updatedHeader)
      axios.post('api/editables', updatedHeader)
    }

    if (updatedHeader.id) {
      console.log('in header PUT', updatedHeader)
      axios.put(`api/editables/${updatedHeader.id}`, updatedHeader)
    }

  }

// RENDERING THE COMPONENET

  render() {
    const { searchTerms, loading } = this.state
    return(

// FIRST SECTION WELCOMING THE USER TO THE PAGE

    <Fragment>
      <Parallax
        bgImage={DictionaryTop}
        blur={{min: 5, max:1}}
        bgImageAlt="Page from Dr. Jeff Leer's Dictionary"
        strength={500}
      >
        <div style={{height: 350}}>
          <SpecialDiv>
            <Header textAlign="center">
              <SectionHead>
                <ContentEditable
                  html={(
                    this.props.editables.length >= 1 && this.props.editables.find(val => val.name === 'dictionaryHead') !== undefined ?
                    this.props.editables.find(val => val.name === 'dictionaryHead').textShort :
                    'Dictionary'
                  )}
                  disabled={this.props.user.id ? false : true}
                  onChange={this.handleChangeEditable}
                  tagName='dictionaryHead'
                  onBlur={this.handBlurEditable}
                />
              </SectionHead>
            </Header>
              <ContentStyleCenter>
                <ContentEditable
                  html={(
                    this.props.editables.length >= 1 && this.props.editables.find(val => val.name === 'dictionaryBody') !== undefined ?
                    this.props.editables.find(val => val.name === 'dictionaryBody').textLong :
                    `Search our online dictionary for common words, a specific word you are interested in learning, or review an entire category of words. Click the Alutiiq word to see information about the word. Most words have audio clips, example sentencences and style notes.
                    <br />
                    <br />
                    To start exploring, just begin typing in the search bar below.`
                    )}
                    disabled={this.props.user.id ? false : true}
                    onChange={this.handleChangeEditable}
                    tagName='dictionaryBody'
                    onBlur={this.handBlurEditable}
                />
                {/* TODO: TEXT EDIT FIELDS */}
              </ContentStyleCenter>
          </SpecialDiv>
        </div>
      </Parallax>

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
            <DictionaryHeight>
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
            </DictionaryHeight>
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
    words: state.words,
    editables: state.editables,
    user: state.user
  }
}

export default connect(mapStateToProps)(Dictionary)
