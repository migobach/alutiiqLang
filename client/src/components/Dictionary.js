import React, { Component, Fragment } from 'react'
import axios from 'axios'
import InfiniteScroll from 'react-infinite-scroller'
import { connect } from 'react-redux'
import {  
  Header,
  Grid,
  Icon, 
  Form,
  Loader,
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

class Dictionary extends Component {

  state = { dictionaryWords: [], page: 1, total_pages: 0, searchTerms: '', wordView: false, wordData: {} }

  componentDidMount() {
    axios.get('/api/dictionaries')
      .then( res => { 
          this.setState({ dictionaryWords: res.data.dictionaries, total_pages: res.data.total_pages  })
      })
  }

  loadMore = () => {
    const page = this.state.page + 1
    axios.get(`/api/dictionaries?page=${page}`)
      .then( ({ data }) => {
        this.setState(state => {
          return{ dictionaryWords: [...state.dictionaryWords, ...data.dictionaries], page: state.page + 1 }
        })
      })
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

  handleChange = (e) => {
    this.setState({ searchTerms: e.target.value })
  }
  
  words = () => {
    const { dictionaryWords } = this.state
    return dictionaryWords.map( word => {
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

  searchWords = () => {
    const { searchTerms, dictionaryWords } = this.state
    if (searchTerms) {
      let filtered_words = dictionaryWords.filter( e => 
      e.english.includes(searchTerms) )
    return(
      filtered_words.map( (word)  =>
      <Grid.Row key={word.id}>
        <Grid.Column width={6} verticalAlign='middle'>
          <ContentStyle>
            {word.english}
          </ContentStyle>
        </Grid.Column>
        <Grid.Column width={6} verticalAlign='middle'>
          <ContentStyle>
            <i>{word.alutiiq_north}</i>
          </ContentStyle>
        </Grid.Column>
        
        <Grid.Column width={4} textAlign='center' verticalAlign='middle'>
          <Icon name='eye' size='large' color='grey' onClick= {() => this.setWord(word)} />
        </Grid.Column>
      </Grid.Row>
      )
    )
    }
  }

  render() {
    const { total_pages, searchTerms, page } = this.state
    return(
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
      
      {/* dictionary table  */}


      <SpecialDiv>
        <Form.Input
          placeholder="Search Words..."
          value={searchTerms}
          onChange={this.handleChange}
        />
      </SpecialDiv>
       {/* </Form.Input> */}
       
      <Grid columns={2}>
        <Grid.Column>
          <Div>
            <InfiniteScroll
              pageStart={page}
              loadMore={this.loadMore}
              hasMore={ page < total_pages }
              loader={<Loader />}
              useWindow={false}
            >

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
                  { (searchTerms.length > 0) ? 
                    this.searchWords()
                    :
                    this.words() 
                  }
              </Grid>
            </InfiniteScroll>
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
      </Grid>
    </Fragment>
    )
  }


}


export default connect()(Dictionary)
