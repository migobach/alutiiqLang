import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getPosters } from '../reducers/posters'
import { getGames } from '../reducers/games'
import { getArticles } from '../reducers/articles'
import { getBooks } from '../reducers/books'
import { getCurriculum } from '../reducers/curriculum'
import { getMaterials } from '../reducers/materials'
import { getSongs } from '../reducers/songs'
import { getItems } from '../reducers/items'
import { getEditablesData } from '../reducers/editables'
import {
  Card,
  Button,
  Header,
  Divider,
  Container,
  Grid,
  Icon,
  Form,
} from 'semantic-ui-react'
import { Parallax } from 'react-parallax'
import ContentEditable from 'react-contenteditable'
import Banner from '../images/Afognak.jpg'
import {
  CardHeader,
  ContainerPad,
  SpecialDiv,
  MainHeader,
  MainHeaderContent,
  MainDiv,
  ContentStyle,
  GreenDiv,
  WhiteTitle,
  ContentStyleWhiteLeft,
  Div,
  SongStyleWhite,
  Pointer,
  IconLink,
  CreditWatermark,
  SubHeaderContent,
  SubHeader
} from './styles/CommonStyles'
import ItemForm from './ItemForm'
import axios from 'axios'


let liicugtukutAudio = new Audio('https://alutiiq-language-resources.s3-us-west-2.amazonaws.com/page_audio/liicugtukut.mp3')

class Home extends Component {
  state = {
    itemData: [],
    searchData: '',
    renderSearch: false,
    showForm: false,
    cardBody1: {},
    cardHeader1: {},
    cardURL1: {},
    cardHeader2: {},
    cardBody2: {},
    cardURL2: {},
    cardHeader3: {},
    cardBody3: {},
    cardURL3: {},
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(getGames())
    dispatch(getPosters())
    dispatch(getArticles())
    dispatch(getBooks())
    dispatch(getCurriculum())
    dispatch(getMaterials())
    dispatch(getSongs())
    dispatch(getItems())
    dispatch(getEditablesData())
  }

  toggleHomeButton = () => {
    console.log(liicugtukutAudio)
    liicugtukutAudio.play()
  }

  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm })
  }

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value })
  }

  handleBlurEditable = () => {
    const updatedCardHeader1 = this.state.cardHeader1
    const updatedCardBody1 = this.state.cardBody1
    const updatedCardURL1 = this.state.cardURL1
    const updatedCardHeader2 = this.state.cardHeader2
    const updatedCardBody2 = this.state.cardBody2
    const updatedCardURL2 = this.state.cardURL2
    const updatedCardHeader3 = this.state.cardHeader3
    const updatedCardBody3 = this.state.cardBody3
    const updatedCardURL3 = this.state.cardURL3

    if (updatedCardHeader1.id) {
      axios.put(`api/editables/${updatedCardHeader1.id}`, updatedCardHeader1)
    }
    if (updatedCardHeader1.id === undefined) {
      axios.post('api/editables', updatedCardHeader1)
    }

    if (updatedCardBody1.id) {
      axios.put(`api/editables/${updatedCardBody1.id}`, updatedCardBody1)
    }
    if (updatedCardBody1.id === undefined) {
      axios.post('api/editables', updatedCardBody1)
    }

    if (updatedCardURL1.id) {
      axios.put(`api/editables/${updatedCardURL1.id}`, updatedCardURL1)
    }
    if (updatedCardURL1.id === undefined) {
      axios.post('api/editables', updatedCardURL1)
    }

    if (updatedCardHeader2.id ) {
      axios.put(`api/editables/${updatedCardHeader2.id}`, updatedCardHeader2)
    }
    if (updatedCardHeader2.id === undefined) {
      axios.post('api/editables', updatedCardHeader2)
    }

    if (updatedCardBody2.id) {
      axios.put(`api/editables/${updatedCardBody2.id}`, updatedCardBody2)
    }
    if (updatedCardBody2.id === undefined) {
      axios.post('api/editables', updatedCardBody2)
    }

    if (updatedCardURL2.id ) {
      axios.put(`api/editables/${updatedCardURL2.id}`, updatedCardURL2)
    }
    if (updatedCardURL2.id === undefined) {
      axios.post('api/editables', updatedCardURL2)
    }

    if (updatedCardHeader3.id ) {
      axios.put(`api/editables/${updatedCardHeader3.id}`, updatedCardHeader3)
    }
    if (updatedCardHeader3.id === undefined) {
      axios.post('api/editables', updatedCardHeader3)
    }

    if (updatedCardBody3.id) {
      axios.put(`api/editables/${updatedCardBody3.id}`, updatedCardBody3)
    }
    if (updatedCardBody3.id === undefined) {
      axios.post('api/editables', updatedCardBody3)
    }

    if (updatedCardURL3.id ) {
      axios.put(`api/editables/${updatedCardURL3.id}`, updatedCardURL3)
    }
    if (updatedCardURL3.id === undefined) {
      axios.post('api/editables', updatedCardURL3)
    }
  }

  handleChangeEditable = evt => {
    const elementType = evt._dispatchInstances.type

    if (elementType === 'cardHeader1') {
      if (this.props.editables.find(val => val.name === 'cardHeader1') !== undefined) {
        const prestructuredCardHeader1 = this.props.editables.find(val => val.name === 'cardHeader1')
        prestructuredCardHeader1.textShort = evt.target.value
        this.setState({ cardHeader1: prestructuredCardHeader1})
      } else {
        this.setState({ cardHeader1: { name: 'cardHeader1', textShort: evt.target.value }})
      }
    }

    if (elementType === 'cardBody1') {
      if (this.props.editables.find(val => val.name === 'cardBody1') !== undefined) {
        const prestructedCardBody1 = this.props.editables.find(val => val.name === 'cardBody1')
        prestructedCardBody1.textLong = evt.target.value
        this.setState({ cardBody1: prestructedCardBody1 })
      } else {
        this.setState({ cardBody1: { name: 'cardBody1', textLong: evt.target.value }})
      }
    }

    if (elementType === 'cardURL1') {
      if (this.props.editables.find(val => val.name === 'cardURL1') !== undefined) {
        const prestructuredCardURL1 = this.props.editables.find(val => val.name === 'cardURL1')
        prestructuredCardURL1.textShort = evt.target.value
        this.setState({ cardURL1: prestructuredCardURL1 })
      } else {
        this.setState({ cardURL1: { name: 'cardURL1', textShort: evt.target.value }})
      }
    }

    if (elementType === 'cardHeader2') {
      if (this.props.editables.find(val => val.name === 'cardHeader2') !== undefined) {
        const prestructuredCardHeader2 = this.props.editables.find(val => val.name === 'cardHeader2')
        prestructuredCardHeader2.textShort = evt.target.value
        this.setState({ cardHeader2: prestructuredCardHeader2 })
      } else {
        this.setState({ cardHeader2: { name: 'cardHeader2', textShort: evt.target.value }})
      }
    }

    if (elementType === 'cardBody2') {
      if (this.props.editables.find(val => val.name === 'cardBody2') !== undefined) {
        const prestructuredCardBody2 = this.props.editables.find(val => val.name === 'cardBody2')
        prestructuredCardBody2.textLong = evt.target.value
        this.setState({ cardBody2: prestructuredCardBody2 })
      } else {
        this.setState({ cardBody2: { name: 'cardBody2', textLong: evt.target.value }})
      }
    }

    if (elementType === 'cardURL2') {
      if (this.props.editables.find(val => val.name === 'cardURL2') !== undefined) {
        const prestructuredCardURL2 = this.props.editables.find(val => val.name === 'cardURL2')
        prestructuredCardURL2.textShort = evt.target.value
        this.setState({ cardURL2: prestructuredCardURL2 })
      } else {
        this.setState({ cardURL2: { name: 'cardURL2', textShort: evt.target.value }})
      }
    }

    if (elementType === 'cardHeader3') {
      if (this.props.editables.find(val => val.name === 'cardHeader3') !== undefined) {
        const prestructuredCardHeader3 = this.props.editables.find(val => val.name === 'cardHeader3')
        prestructuredCardHeader3.textShort = evt.target.value
        this.setState({ cardHeader3: prestructuredCardHeader3 })
      } else {
        this.setState({ cardHeader3: { name: 'cardHeader3', textShort: evt.target.value }})
      }
    }

    if (elementType === 'cardBody3') {
      if (this.props.editables.find(val => val.name === 'cardBody3') !== undefined) {
        const prestructuredCardBody3 = this.props.editables.find(val => val.name === 'cardBody3')
        prestructuredCardBody3.textLong = evt.target.value
        this.setState({ cardBody3: prestructuredCardBody3 })
      } else {
        this.setState({ cardBody3: { name: 'cardBody3', textLong: evt.target.value }})
      }
    }

    if (elementType === 'cardURL3') {
      if (this.props.editables.find(val => val.name === 'cardURL3') !== undefined) {
        const prestructuredCardURL3 = this.props.editables.find(val => val.name === 'cardURL3')
        prestructuredCardURL3.textShort = evt.target.value
        this.setState({ cardURL3: prestructuredCardURL3 })
      } else {
        this.setState({ cardURL3: { name: 'cardURL3', textShort: evt.target.value }})
      }
    }
  }

  handleBoolean = (e, { name, value }) => {
    this.setState({ [name]: !value })
  }

  handleRenderingSearchData = () => {
    this.setState({ renderSearch: true })
  }

  renderSearchArticles = () => {
    const searchData = this.state.searchData
    const articles = this.props.articles // topic, author, article_pdf
    const lowerCaseSearch = searchData.toLowerCase()

    let filtered_articles = articles.filter(a =>
      a.topic.toLowerCase().includes(lowerCaseSearch)
      ||
      a.author.toLowerCase().includes(lowerCaseSearch)
    )

    if (filtered_articles <= []) {
      return(
        <Grid.Row>
          <SongStyleWhite>
            <i>No articles with those keywords.</i>
          </SongStyleWhite>
        </Grid.Row>
      )
    } else
      return(
        filtered_articles.map( (article) =>
        <Grid.Row key={article.id}>
            <Grid.Column computer={6} tablet={10} mobile={10}>
              <SongStyleWhite>
                {article.topic}
              </SongStyleWhite>
            </Grid.Column>
            <Grid.Column width={6} only='computer'>
              <SongStyleWhite>
                {article.author}
              </SongStyleWhite>
            </Grid.Column>
            <Grid.Column computer={4} tablet={4} mobile={4} textAlign='center'>
              <Pointer>
                <IconLink href={article.article_pdf} target='_blank'>
                  <Icon name='eye' size='large' />
                </IconLink>
              </Pointer>
            </Grid.Column>
          </Grid.Row>
        )
      )
  }

  renderSearchBooks = () => {
    const searchData = this.state.searchData
    const books = this.props.books // book_title_alutiiq, book_title_alutiiq, creator, file
    const lowerCaseSearch = searchData.toLowerCase()

    let filtered_books = books.filter(b =>
      b.book_title_alutiiq.toLowerCase().includes(lowerCaseSearch)
      ||
      b.book_title_english.toLowerCase().includes(lowerCaseSearch)
      ||
      b.creator.toLowerCase().includes(lowerCaseSearch)
    )

    if (filtered_books <= [] ) {
      return(
        <Grid.Row>
          <SongStyleWhite>
            <i>No books with those keywords.</i>
          </SongStyleWhite>
        </Grid.Row>
      )
    } else
    return(
      filtered_books.map( (book) =>
      <Grid.Row key={book.id}>
          <Grid.Column computer={6} tablet={10} mobile={10}>
            <SongStyleWhite>
              {book.book_title_english}
            </SongStyleWhite>
          </Grid.Column>
          <Grid.Column width={6} only='computer'>
            <SongStyleWhite>
              {book.creator}
            </SongStyleWhite>
          </Grid.Column>
          <Grid.Column computer={4} tablet={4} mobile={4} textAlign='center'>
            <Pointer>
              <IconLink href={book.file} target='_blank'>
                <Icon name='eye' size='large' />
              </IconLink>
            </Pointer>
          </Grid.Column>
        </Grid.Row>
      )
    )
  }

  renderSearchCurriculum = () => {
    const searchData = this.state.searchData
    const curriculum = this.props.curriculum // curricular_name, group_name, link_to_item
    const lowerCaseSearch = searchData.toLowerCase()

    let filtered_curriculum = curriculum.filter(c =>
      c.curricular_name.toLowerCase().includes(lowerCaseSearch)
      ||
      c.group_name.toLowerCase().includes(lowerCaseSearch)
      ||
      c.level.toLowerCase().includes(lowerCaseSearch)
    )

    if (filtered_curriculum <= [] ) {
      return(
        <Grid.Row>
          <SongStyleWhite>
            <i>No curricular items with those keywords.</i>
          </SongStyleWhite>
        </Grid.Row>
      )
    } else
    return(
      filtered_curriculum.map( (curriculum) =>
      <Grid.Row key={curriculum.id}>
          <Grid.Column computer={6} tablet={10} mobile={10}>
            <SongStyleWhite>
              {curriculum.curricular_name}
            </SongStyleWhite>
          </Grid.Column>
          <Grid.Column width={6} only='computer'>
            <SongStyleWhite>
              {curriculum.group_name}
            </SongStyleWhite>
          </Grid.Column>
          <Grid.Column computer={4} tablet={4} mobile={4} textAlign='center'>
            <Pointer>
              <IconLink href={curriculum.link_to_item} target='_blank'>
                <Icon name='eye' size='large' />
              </IconLink>
            </Pointer>
          </Grid.Column>
        </Grid.Row>
      )
    )
  }

  renderSearchPoster = () => {
    const searchData = this.state.searchData
    const poster = this.props.posters // author, title, poster_link, NEED TO OPEN THE POSTER COMP
    const lowerCaseSearch = searchData.toLowerCase()

    let filtered_posters = poster.filter(p =>
      p.title.toLowerCase().includes(lowerCaseSearch)
      ||
      p.author.toLowerCase().includes(lowerCaseSearch)
    )

    if (filtered_posters <= [] ) {
      return(
        <Grid.Row>
          <SongStyleWhite>
            <i>No posters with those keywords.</i>
          </SongStyleWhite>
        </Grid.Row>
      )
    } else
    return(
      filtered_posters.map( (poster) =>
      <Grid.Row key={poster.id}>
          <Grid.Column computer={6} tablet={10} mobile={10}>
            <SongStyleWhite>
              {poster.title}
            </SongStyleWhite>
          </Grid.Column>
          <Grid.Column width={6} only='computer'>
            <SongStyleWhite>
              {poster.author}
            </SongStyleWhite>
          </Grid.Column>
          <Grid.Column computer={4} tablet={4} mobile={4} textAlign='center'>
            <Pointer>
              <IconLink href={poster.poster_link} target='_blank'>
                <Icon name='eye' size='large' />
              </IconLink>
            </Pointer>
          </Grid.Column>
        </Grid.Row>
      )
    )
  }

  renderSearchGames = () => {
    const searchData = this.state.searchData
    const games = this.props.games   // GAMES: game_group, creator, link_to_item, game_name_english
    const lowerCaseSearch = searchData.toLowerCase()

    let filtered_games = games.filter(g =>
      g.game_group.toLowerCase().includes(lowerCaseSearch)
      ||
      g.creator.toLowerCase().includes(lowerCaseSearch)
      ||
      g.game_name_english.toLowerCase().includes(lowerCaseSearch)
    )

    if (filtered_games <= [] ) {
      return(
        <Grid.Row>
          <SongStyleWhite>
            <i>No games with those keywords.</i>
          </SongStyleWhite>
        </Grid.Row>
      )
    } else
    return(
      filtered_games.map( (game) =>
      <Grid.Row key={game.id}>
          <Grid.Column computer={6} tablet={10} mobile={10}>
            <SongStyleWhite>
              {game.game_name_english}
            </SongStyleWhite>
          </Grid.Column>
          <Grid.Column width={6} only='computer'>
            <SongStyleWhite>
              {game.creator}
            </SongStyleWhite>
          </Grid.Column>
          <Grid.Column computer={4} tablet={4} mobile={4} textAlign='center'>
            <Pointer>
              <IconLink href={game.link_to_item} target='_blank'>
                <Icon name='eye' size='large' />
              </IconLink>
            </Pointer>
          </Grid.Column>
        </Grid.Row>
      )
    )
  }

  renderSearchSongs = () => {
    const searchData = this.state.searchData
    const song = this.props.songs   // SONGS: credit, title_alutiiq, title_english, NEED TO GO TO THE SONG VIEW (CARRY STATE)
    const lowerCaseSearch = searchData.toLowerCase()

   let filtered_songs = song.filter(s =>
      ((s.title_english !== null) ? s.title_english.toLowerCase().includes(lowerCaseSearch) : null)
      ||
      ((s.credit !== null) ? s.credit.toLowerCase().includes(lowerCaseSearch) : null)
      ||
      s.title_alutiiq.toLowerCase().includes(lowerCaseSearch)
      ||
      ((s.notes !== null) ? s.notes.toLowerCase().includes(lowerCaseSearch) : null)
    )

    if (filtered_songs <= [] ) {
      return(
        <Grid.Row>
          <SongStyleWhite>
            <i>No songs with those keywords.</i>
          </SongStyleWhite>
        </Grid.Row>
      )
    } else
    return(
      filtered_songs.map( (song) =>
      <Grid.Row key={song.id}>
          <Grid.Column computer={6} tablet={10} mobile={10}>
            <SongStyleWhite>
              {song.title_english}
            </SongStyleWhite>
          </Grid.Column>
          <Grid.Column width={6} only='computer'>
            <SongStyleWhite>
              {song.credit}
            </SongStyleWhite>
          </Grid.Column>
          <Grid.Column computer={4} tablet={4} mobile={4} textAlign='center'>
              <Link to={{ pathname: '/songs', state: {songView: true, songData: (song) } }}>
            <Pointer>
              <IconLink target='_blank'>
                <Icon name='eye' size='large' />
              </IconLink>
            </Pointer>
              </Link>
          </Grid.Column>
        </Grid.Row>
      )
    )
  }

  renderAnnouncement = () => {
    let announcments = this.props.items

    return(
      announcments.map( (item, i, arr) => {
        if ( arr.length - 1 === i ) {
          return(
            <div>
              <SpecialDiv>
              <SpecialDiv>
                <Header textAlign='center'>
                  <SubHeader>
                    {item.title}
                  </SubHeader>
                    <Divider />
                </Header>
              </SpecialDiv>

                <SubHeaderContent>
                  {item.body}
                  <br />
                  <br />
                </SubHeaderContent>
              </SpecialDiv>
                <Button size='big' href={item.buttonUrl} target='_blank'>
                  {item.buttonName}
                </Button>
            </div>
          )
        }
      }
      )
    )
  }

// COMPONENET RENDER STARTS HERE

  render() {
    const { searchData, renderSearch, showForm } = this.state
    const { user } = this.props

    return (
      <div>
{/* HEAD BANNER WITH AFOGNAK BEACH IN THE BACKGROUND */}

        <Parallax
          bgImage={Banner}
          bgImageAlt="Afognak village beach, Afognak Island, Alaska"
          strength={500}
        >
          <div style={{height: 500}}>
            <MainDiv>
              <Pointer onClick={this.toggleHomeButton}>
                <MainHeader>
                  <i>Liicugtukut Alutiit'stun</i>
                  <MainHeaderContent>
                    We want to learn Alutiiq
                  </MainHeaderContent>
                </MainHeader>
              </Pointer>
            </MainDiv>
          </div>
              <CreditWatermark>
                Photo courtesy of Patrick Saltonstall
              </CreditWatermark>
        </Parallax>

{/* CARD OPTIONS THAT LEAD TO FEATURED CONTENT */}

        <ContainerPad>
          <Card.Group itemsPerRow={3} stackable={true}>
            {this.props.user.id ?
            <Card>
              <Card.Content header textAlign='center'>
                <CardHeader>
                  <ContentEditable
                    html={
                      (this.props.editables.length >= 1 && this.props.editables.find(val => val.name === 'cardHeader1') !== undefined) ?
                      this.props.editables.find(val => val.name === 'cardHeader1').textShort :
                      'Happenings'
                    }
                    disabled={this.props.user.id ? false : true}
                    onChange={this.handleChangeEditable}
                    tagName='cardHeader1'
                    onBlur={this.handleBlurEditable}
                  />
                </CardHeader>
              </Card.Content>
              <Card.Content>
                <SpecialDiv>
                  <ContentStyle>
                      <ContentEditable
                        html={
                          (this.props.editables.length >= 1 && this.props.editables.find(val => val.name === 'cardBody1') !== undefined) ?
                          this.props.editables.find(val => val.name === 'cardBody1').textLong :
                          'What is happeing, and how do you get involved? Click below to learn more about the history of language revitalization on the Kodiak Archipelago and learn about Alutiiq worldviews.'
                        }
                        disabled={this.props.user.id ? false : true}
                        onChange={this.handleChangeEditable}
                        tagName='cardBody1'
                        onBlur={this.handleBlurEditable}
                      />
                  </ContentStyle>
                </SpecialDiv>
              </Card.Content>
                  <Button color='grey' size='small' disabled>
                    <ContentEditable
                      html={
                        (this.props.editables.length >= 1 && this.props.editables.find(val => val.name === 'cardURL1') !== undefined) ?
                        this.props.editables.find(val => val.name === 'cardURL1').textShort :
                        'https://www.example.com'}
                      disabled={this.props.user.id ? false : true}
                      onChange={this.handleChangeEditable}
                      tagName='cardURL1'
                      onBlur={this.handleBlurEditable}
                    />
                  </Button>
            </Card>
            :
            <Card>
              <Card.Content header textAlign='center'>
                <CardHeader>
                  <div dangerouslySetInnerHTML= {{__html:
                    (this.props.editables.length >= 1 && this.props.editables.find(val => val.name === 'cardHeader1') !== undefined) ?
                    this.props.editables.find(val => val.name === 'cardHeader1').textShort :
                    'Happenings'
                  }}/>
                </CardHeader>
              </Card.Content>
              <Card.Content>
                <SpecialDiv>
                  <ContentStyle>
                    <div dangerouslySetInnerHTML= {{__html:
                      (this.props.editables.length >= 1 && this.props.editables.find(val => val.name === 'cardBody1') !== undefined) ?
                      this.props.editables.find(val => val.name === 'cardBody1').textLong :
                      'What is happeing, and how do you get involved? Click below to learn more about the history of language revitalization on the Kodiak Archipelago and learn about Alutiiq worldviews.'
                    }} />
                  </ContentStyle>
                </SpecialDiv>
              </Card.Content>
                  <Button as='a' href={
                    (this.props.editables.length > 1 && this.props.editables.find(val => val.name === 'cardURL1') !== undefined) ?
                    this.props.editables.find(val => val.name === 'cardURL1').textShort :
                    '/happenings'
                  } color='yellow' size='small' fluid>
                   Go
                  </Button>
            </Card>
            }

            {this.props.user.id ?
            <Card>
              <Card.Content header textAlign='center'>
                <CardHeader>
                  <ContentEditable
                      html={
                        (this.props.editables.length >= 1 && this.props.editables.find(val => val.name === 'cardHeader2') !== undefined) ?
                        this.props.editables.find(val => val.name === 'cardHeader2').textShort :
                        'Dictionary'
                      }
                      disabled={this.props.user.id ? false : true}
                      onChange={this.handleChangeEditable}
                      tagName='cardHeader2'
                      onBlur={this.handleBlurEditable}
                  />
                </CardHeader>
              </Card.Content>
              <Card.Content>
                <SpecialDiv>
                  <ContentStyle>

                    <ContentEditable
                      html={
                        (this.props.editables.length >= 1 && this.props.editables.find(val => val.name === 'cardBody2') !== undefined) ?
                        this.props.editables.find(val => val.name === 'cardBody2').textLong :
                        "Discover new words in the Alutiiq language. Hear words being said by an Alutiiq speaker, and explore how to use words in full sentences."
                      }
                      disabled={this.props.user.id ? false : true}
                      onChange={this.handleChangeEditable}
                      tagName='cardBody2'
                      onBlur={this.handleBlurEditable}
                    />
                  </ContentStyle>
                </SpecialDiv>
              </Card.Content>
                  <Button color='grey' size='small' disabled>
                    <ContentEditable
                      html={
                        (this.props.editables.length >= 1 && this.props.editables.find(val => val.name === 'cardURL2') !== undefined) ?
                        this.props.editables.find(val => val.name === 'cardURL2').textShort :
                        'https://www.example.com'
                      }
                      disabled={this.props.user.id ? false : true}
                      onChange={this.handleChangeEditable}
                      tagName='cardURL2'
                      onBlur={this.handleBlurEditable}
                    />
                  </Button>
            </Card>
            :
            <Card>
              <Card.Content header textAlign='center'>
                <CardHeader>
                  <div dangerouslySetInnerHTML= {{__html: this.props.editables.length >= 1 ? this.props.editables.find(val => val.name === 'cardHeader2').textShort : 'Dictionary'}} />
                </CardHeader>
              </Card.Content>
              <Card.Content>
                <SpecialDiv>
                  <ContentStyle>
                    <div dangerouslySetInnerHTML= {{__html: this.props.editables.length >= 1 ? this.props.editables.find(val => val.name === 'cardBody2').textLong : "Discover new words in the Alutiiq language. Hear words being said by an Alutiiq speaker, and explore how to use words in full sentences."}} />
                  </ContentStyle>
                </SpecialDiv>
              </Card.Content>
                <Button as='a' href={this.props.editables.length > 1 ? this.props.editables.find(val => val.name === 'cardURL2').textShort : '/dictionary'} color='yellow' size='small' fluid>
                   Go
                </Button>
            </Card>
            }

            {this.props.user.id ?
            <Card>
              <Card.Content header textAlign='center'>
                <CardHeader>
                  <ContentEditable
                      html={
                        (this.props.editables.length >= 1 && this.props.editables.find(val => val.name === 'cardHeader3') !== undefined) ?
                        this.props.editables.find(val => val.name === 'cardHeader3').textShort :
                        'Classes'
                      }
                      disabled={this.props.user.id ? false : true}
                      onChange={this.handleChangeEditable}
                      tagName='cardHeader3'
                      onBlur={this.handleBlurEditable}
                  />
                </CardHeader>
              </Card.Content>
              <Card.Content>
                <SpecialDiv>
                  <ContentStyle>
                    <ContentEditable
                      html={
                        (this.props.editables.length >= 1 && this.props.editables.find(val => val.name === 'cardBody3') !== undefined) ?
                        this.props.editables.find(val => val.name === 'cardBody3').textLong :
                        "Are you interested in learning Alutiiq, and meeting other speakers and learners? Check out opportunities to learn in formal and informal settings by clicking the button."
                      }
                      disabled={this.props.user.id ? false : true}
                      onChange={this.handleChangeEditable}
                      tagName='cardBody3'
                      onBlur={this.handleBlurEditable}
                    />
                  </ContentStyle>
                </SpecialDiv>
              </Card.Content>
                  <Button color='grey' size='small' disabled>
                    <ContentEditable
                      html={
                        (this.props.editables.length >= 1 && this.props.editables.find(val => val.name === 'cardURL3') !== undefined) ?
                        this.props.editables.find(val => val.name === 'cardURL3').textShort :
                        'https://www.example.com'
                      }
                      disabled={this.props.user.id ? false : true}
                      onChange={this.handleChangeEditable}
                      tagName='cardURL3'
                      onBlur={this.handleBlurEditable}
                    />
                  </Button>
            </Card>
            :
            <Card>
              <Card.Content header textAlign='center'>
                <CardHeader>
                  <div dangerouslySetInnerHTML= {{__html:
                    (this.props.editables.length >= 1 && this.props.editables.find(val => val.name === 'cardHeader3') !== undefined) ?
                    this.props.editables.find(val => val.name === 'cardHeader3').textShort :
                    'Classes'
                  }} />
                </CardHeader>
              </Card.Content>
              <Card.Content>
                <SpecialDiv>
                  <ContentStyle>
                    <div dangerouslySetInnerHTML= {{__html:
                      (this.props.editables.length >= 1 && this.props.editables.find(val => val.name === 'cardBody3') !== undefined) ?
                      this.props.editables.find(val => val.name === 'cardBody3').textLong :
                      "Are you interested in learning Alutiiq, and meeting other speakers and learners? Check out opportunities to learn in formal and informal settings by clicking the button."
                    }} />
                  </ContentStyle>
                </SpecialDiv>
              </Card.Content>
                <Button as='a' href={
                  (this.props.editables.length > 1 && this.props.editables.find(val => val.name === 'cardURL3') !== undefined) ?
                  this.props.editables.find(val => val.name === 'cardURL3').textShort :
                  '/classes'
                  } color='yellow' size='small' fluid>
                   Go
                </Button>
            </Card>
            }
          </Card.Group>
        </ContainerPad>

{/* GREEN DIV WITH ALL COMPONENET SEARCH FEATURE: MINUS DICTIOANRY */}

        <GreenDiv>
          <Grid stackable columns={2} verticalAlign='middle'>
            <Grid.Column width={4}>
            <Icon name='search' size='big' />
              <WhiteTitle>
                Search
              </WhiteTitle>
            <Divider />
              <ContentStyleWhiteLeft>
                Where to start? Search the site for songs, books, curriculuar materials, games, articles, or posters. <i>Kita! Iwai'luten caqiq qainarmek!</i>
              </ContentStyleWhiteLeft>
            </Grid.Column>

            <Grid.Column width={12}>
              <ContentStyleWhiteLeft>
                <Form>
                  <Form.Input
                    placeholder='Search...'
                    name='searchData'
                    value={searchData}
                    onChange={this.handleChange}
                    fluid
                  />
                  <Button onClick={() => this.handleRenderingSearchData() }>
                    Search
                  </Button>
                </Form>
              </ContentStyleWhiteLeft>
              {
                renderSearch ?
                  <Div>
                    <Grid>
                    <Grid.Row>
                        <Link to={'/songs'}>
                          <WhiteTitle>
                            <Icon name='external alternate' size='small' /> Songs:
                          </WhiteTitle>
                        </Link>
                      </Grid.Row>
                      { searchData ? this.renderSearchSongs() : null }
                      <Grid.Row>
                        <Link to={{ pathname: "/happenings", state: {newsComp: true} }}>
                          <WhiteTitle>
                            <Icon name='external alternate' size='small' /> Articles:
                          </WhiteTitle>
                        </Link>
                      </Grid.Row>
                      { this.renderSearchArticles() }
                      <Grid.Row>
                        <Link to={'/books'}>
                          <WhiteTitle>
                            <Icon name='external alternate' size='small' /> Books:
                          </WhiteTitle>
                        </Link>
                      </Grid.Row>
                      { this.renderSearchBooks() }
                      <Grid.Row>
                        <Link to={'/curriculum'}>
                          <WhiteTitle>
                            <Icon name='external alternate' size='small' /> Curriculum:
                          </WhiteTitle>
                        </Link>
                      </Grid.Row>
                      { this.renderSearchCurriculum() }
                      <Grid.Row>
                        <Link to={'/postersandgames'}>
                          <WhiteTitle>
                            <Icon name='external alternate' size='small' /> Posters and Games:
                          </WhiteTitle>
                        </Link>
                      </Grid.Row>
                      { this.renderSearchPoster() }
                      { this.renderSearchGames() }
                    </Grid>
                  </Div>
                :
                null
              }
            </Grid.Column>
          </Grid>
        </GreenDiv>

{/* SPECIAL CONTENT TOGGLING AND EDITING */}

          <Container textAlign='center' verticalAlign='middle'>
          {
            showForm ?
            <div>
              <ItemForm user={this.props.user} item={this.props.items} toggleForm={this.toggleForm}/>
            </div>
            :
            <div>
              {this.renderAnnouncement()}
            </div>

          }
          </Container>
        <Divider hidden />
          {
            (user.id && showForm === false) ?

            <div>
            <Divider hidden/>
              <Container textAlign='center' verticalAlign='middle'>
                  <Button onClick={this.toggleForm} color='red'>
                    Edit Content
                  </Button>
              </Container>
            </div>
          :
            null
          }
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    posters: state.posters,
    games: state.games,
    articles: state.articles,
    books: state.books,
    curriculum: state.curriculum,
    materials: state.material,
    songs: state.songs,
    items: state.items,
    user: state.user,
    editables: state.editables
  }
 }
export default connect(mapStateToProps)(Home)
