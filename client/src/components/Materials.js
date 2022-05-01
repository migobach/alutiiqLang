import { connect } from 'react-redux'
import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { getMaterials } from '../reducers/materials'
import { getEditablesData } from '../reducers/editables'
import {
  Header,
  Image,
  Grid,
  Card,
  Button,
  Icon,
  Form,
  Dimmer,
  Loader,
 } from 'semantic-ui-react'
import {
  SpecialDiv,
  SectionHead,
  ContentStyle,
  ContentStyleCenter,
  QuotePerson,
  GreenDiv,
  ContentStyleQuote,
  ContainerPad,
  CardHeader,
  ColumnHead,
  Div,
  Pointer,
  ContentStyleWhiteLeft,
} from './styles/CommonStyles'
import Alisha from '../images/alisha.jpg'
import ContentEditable from 'react-contenteditable'
import MaterialsView from './materials/MaterialsView'
import axios from 'axios'

class Materials extends Component {
  state = {
    searchResources: '',
    searchView: false,
    loading: true,
    materialView: false,
    materialHeader: {},
    materialBody: {}
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(getMaterials())
    dispatch(getEditablesData())
  }

  componentDidUpdate(prevProps) {
    if(prevProps !== this.props)
      this.setState({ loading: false })
  }

  nowLoading = () => {
    return (
      <Dimmer active inverted>
         <Loader size="huge" inverted> Utaqaligiu... </Loader>
       </Dimmer>
     )
   }

  toggleView = () => {
    this.setState({ materialView: !this.state.materialView })
  }

  clearSearch = () => {
    this.setState({ searchView: false, searchResources: '' })
  }

  handleChange = (e, { name, value}) => {
    this.setState({ [name]: value })
  }

  handleChangeEditable = evt => {
    const elementType = evt._dispatchInstances.type

    if (elementType === 'MaterialHeader') {;
      if (this.props.editables.find(val => val.name === 'materialHeader')!== undefined ) {
        const preStructuredHeader = this.props.editables.find(val => val.name === 'materialHeader')
          preStructuredHeader.textShort = evt.target.value
          this.setState({ materialHeader: preStructuredHeader })
      } else {
        this.setState({ materialHeader: { name: "materialHeader", textShort: evt.target.value }})
      }
    }

    if (elementType === 'MaterialBody') {
      if(this.props.editables.find(val => val.name === 'materialBody')!== undefined ) {
        const presturcturedBody = this.props.editables.find(val => val.name === 'materialBody')
          presturcturedBody.textLong = evt.target.value
          this.setState({ materialBody: presturcturedBody })
      } else {
        this.setState({ materialBody: { name: "materialBody", textLong: evt.target.value }})
      }
    }
  }

  handleBlurEditable = () => {
    const updatedHeader = this.state.materialHeader
    const updatedBody = this.state.materialBody

    if (updatedHeader.id === undefined) {
      console.log('in header CREATE', updatedHeader)
      axios.post('api/editables', updatedHeader)
    }

    if (updatedBody.id === undefined) {
      axios.post('api/editables', updatedBody)
    }

    if (updatedHeader.id) {
      console.log('in header PUT', updatedHeader)
      axios.put(`api/editables/${updatedHeader.id}`, updatedHeader)
    }

    if(updatedBody.id) {
      console.log('in body PUT', updatedBody)
      axios.put(`api/editables/${updatedBody.id}`, updatedBody)
    }
  }

  setMaterial = (material) => {
    this.setState( { materialData: {...material}, materialView: true})
  }

  renderMaterialView = () => {
    if (this.state.materialView === true) {
      return <MaterialsView material={this.state.materialData} view={this.toggleView} />
    } else
    return
  }

  renderSearchMaterials = () => {
    const { searchResources } = this.state
    const resources = this.props.materials
    const lowerCaseSearch = searchResources.toLowerCase()

    let filtered_materials = resources.filter( i =>
        i.resource_title.toLowerCase().includes(lowerCaseSearch)
        ||
        ((i.author!== null) ?
        i.author.toLowerCase().includes(lowerCaseSearch)
        :
        null)
        ||
        ((i.keywords!== null) ?
        i.keywords.toLowerCase().includes(lowerCaseSearch)
        :
        null)
        ||
        ((i.subjects!== null) ?
        i.subjects.toLowerCase().includes(lowerCaseSearch)
        :
        null)
        ||
        ((i.standards!== null) ?
        i.standards.includes(lowerCaseSearch)
        :
        null)
        ||
        ((i.resource_title!== null) ?
        i.resource_title.toLowerCase().includes(lowerCaseSearch)
        :
        null)
      )

    return(
      filtered_materials.map( (material) =>
        <Grid.Row key={material.id}>
          <Grid.Column computer={6} tablet={6} mobile={10} verticalAlign='middle'>
            <ContentStyle>
              <i>{material.resource_title}</i>
            </ContentStyle>
          </Grid.Column>
          <Grid.Column width={6} verticalAlign='middle' only='computer tablet'>
            <ContentStyle>
              {material.subjects}
            </ContentStyle>
          </Grid.Column>
          <Grid.Column computer={4} tablet={4} mobile={6} textAlign='center' verticalAlign='middle'>
            <Pointer>
              <Icon name='info' size='large' color='grey' onClick= {() => this.setMaterial(material)}/>
            </Pointer>
          </Grid.Column>
        </Grid.Row>
      )
    )
  }

  render() {
    const { searchResources, loading, materialView } = this.state


    return(
    <Fragment>
      <div>
      <SpecialDiv innerRef={this.contentEditable}>
        <Header textAlign='center'>
          <SectionHead>
            <ContentEditable
              html={(this.props.editables.length && this.props.editables.find(val => val.name === 'materialHeader')!== undefined) >= 1 ? this.props.editables.find(val => val.name === 'materialHeader').textShort : 'Learning Materials'}
              disabled={this.props.user.id  ? false : true} // use true to disable editing maybe use the user in props here to give permissions
              onChange={this.handleChangeEditable} // handle innerHTML change
              tagName='MaterialHeader' // Use a custom HTML tag (uses a div by default)
              onBlur={this.handleBlurEditable}
            />
          </SectionHead>
        </Header>
        <ContentStyleCenter>
          <ContentEditable
            html={(this.props.editables.length >= 1 && this.props.editables.find(val => val.name === 'materialBody')!== undefined) ? this.props.editables.find(val => val.name === 'materialBody').textLong
                : ` There are many ways to learn the Alutiiq language: learning from a friend or family member, studying resources, or playing games. Most importantly, there are many ways to integrate Alutiiq into your daily life. Everyone who knows a word or phrase has something to share.
                <br />
                <br />
                There are many resources housed on this page to help get you going with your learning journey. Check out some of the book designed for learners who are just starting out. Hang some of the posters hosted here around your home or office. Share time with family or friends and play one of the simple games available through the links below. Or, listen to stories in Alutiiq in an effort to increase your fluency by modeling someone more proficient than yourself.
                <br />
                <br />
              Most importantly, use the language that you have. Even if that is just saying <i>Cama'i</i> to your neighbors. `
            } // innerHTML of the editable div - this.state.html
            disabled={this.props.user.id  ? false : true} // use true to disable editing maybe use the user in props here to give permissions
            onChange={this.handleChangeEditable} // handle innerHTML change
            tagName='MaterialBody' // Use a custom HTML tag (uses a div by default)
            onBlur={this.handleBlurEditable}
          />

          {/* ` There are many ways to learn the Alutiiq language: learning from a friend or family member, studying resources, or playing games. Most importantly, there are many ways to integrate Alutiiq into your daily life. Everyone who knows a word or phrase has something to share.
            <br />
            <br />
            There are many resources housed on this page to help get you going with your learning journey. Check out some of the book designed for learners who are just starting out. Hang some of the posters hosted here around your home or office. Share time with family or friends and play one of the simple games available through the links below. Or, listen to stories in Alutiiq in an effort to increase your fluency by modeling someone more proficient than yourself.
            <br />
            <br />
          Most importantly, use the language that you have. Even if that is just saying <i>Cama'i</i> to your neighbors. ` */}
        </ContentStyleCenter>
      </SpecialDiv>
      </div>

  {/* CARD SECTION  */}

      <ContainerPad>
          <Card.Group itemsPerRow={3} stackable centered doubling>
            <Card>
              <Card.Content header textAlign='center'>
                <CardHeader>
                  Books
                </CardHeader>
              </Card.Content>
              <Card.Content>
                <SpecialDiv>
                  <ContentStyle>
                    Once a learner has heard and practiced new vocabulary, learning to read and do an activity in Alutiiq is a good way to reinforce their language learning. Click on the 'Go' button below to begin expanding your Alutiiq library.
                  </ContentStyle>
                </SpecialDiv>
              </Card.Content>
              <Link to={`/books`}>
                <Button color='yellow' size='small' fluid>
                  Go
                </Button>
              </Link>

            </Card>

            <Card>
              <Card.Content header textAlign='center'>
                <CardHeader>
                  Posters & Games
                </CardHeader>
              </Card.Content>
              <Card.Content>
                <SpecialDiv>
                  <ContentStyle>
                    Posters have been created to visually cue learners into speaking Alutiiq. Games are a fun way to expand language usage. Posters may be displayed around the house, office, or classroom to bring Alutiiq language into your daily routines. Games can be played with family and friends to focus language use around a specific, engaging activity.
                  </ContentStyle>
                </SpecialDiv>
              </Card.Content>
              <Link to={`/postersandgames`}>
                <Button color='yellow' size='small' fluid>
                  Go
                </Button>
              </Link>
            </Card>

            <Card>
              <Card.Content header textAlign='center'>
                <CardHeader>
                  Videos
                </CardHeader>
              </Card.Content>
              <Card.Content>
                <SpecialDiv>
                  <ContentStyle>
                    Being able to hear the Alutiiq language, while seeing it contextualized through activity, dance, or other setting helps learners access language in ways otherwise unavailable to them. Subscribe to the channel to stay updated!
                  </ContentStyle>
                </SpecialDiv>
              </Card.Content>
              <a href='https://www.youtube.com/channel/UCLDNH9GmHDEz2WUk0MtBrLQ/playlists' target='_blank' rel='noopener noreferrer'>
                <Button color='yellow' size='small' fluid>
                  Go
                </Button>
              </a>
            </Card>

              <Card>
              <Card.Content header textAlign='center'>
                <CardHeader>
                  Links
                </CardHeader>
              </Card.Content>
              <Card.Content>
                <SpecialDiv>
                  <ContentStyle>
                    Other individuals and organizations support language revitalization efforts online. Click on the link to see a list of websites related to Alutiiq language and culture.
                  </ContentStyle>
                </SpecialDiv>
              </Card.Content>
              <Link to={'/links'}>
                <Button color='yellow' size='small' fluid>
                  Go
                </Button>
              </Link>
            </Card>

            <Card>
              <Card.Content header textAlign='center'>
                <CardHeader>
                  Stories
                </CardHeader>
              </Card.Content>
              <Card.Content>
                <SpecialDiv>
                  <ContentStyle>
                    Accessing traditional stories in the Alutiiq language can be difficult. Thanks to archives, a few traditional stories can be accessed here. Click on the 'Go' button below to access recordings and transcripts of traditional stories.
                  </ContentStyle>
                </SpecialDiv>
              </Card.Content>
              <Link to={`/stories`}>
                <Button color='yellow' size='small' fluid>
                  Go
                </Button>
              </Link>
            </Card>

            <Card>
              <Card.Content header textAlign='center'>
                <CardHeader>
                  Flashcards
                </CardHeader>
              </Card.Content>
              <Card.Content>
                <SpecialDiv>
                  <ContentStyle>
                    Download the Quizlet app for your iPhone or Android device, and study vocabulary words whenever you have a chance! Click on the link below to see some of the flashcards used in the Kodiak High School Alutiiq Lanugage class to get started.
                  </ContentStyle>
                </SpecialDiv>
              </Card.Content>
              <a href='https://quizlet.com/class/3047759/' target='_blank' rel='noopener noreferrer'>
                <Button color='yellow' size='small' fluid>
                  Go
                </Button>
              </a>
            </Card>
          </Card.Group>
        </ContainerPad>

  {/* FEATURED QUOTE */}

        <GreenDiv>
          <Grid stackable columns={2} verticalAlign='middle'>

  {/* ONLY VISIBLE ON COMPUTER AND TABLET */}

            <Grid.Row only='computer tablet'>
              <Grid.Column width={4}>
                <Image src={Alisha} size='medium' floated='left' verticalAlign='middle' />
              </Grid.Column>
              <Grid.Column width={12}>
                <ContentStyleQuote>
                  <i>"When I visit the grocery store and hear another language being spoken, I try to exchange a word or phrase of what I have learned from their language so that I can show respect for their efforts to maintain their cultural and linguistic identities in shared public spaces so often dominated by English. Likewise when I see former students, or fellow Alutiiq speakers, I offer greetings in Alutiiq so that we too can practice and help keep Alutiiq a living language. Several Elders who have taught me say how much it means to hear learners speaking in public, when as children our Elders were punished physically for speaking Alutiiq."</i>
                </ContentStyleQuote>
                <QuotePerson>
                  <br />-Alisha Drabek PhD, Alutiiq Language Speaker, Learner, Teacher, and Scholar
                </QuotePerson>
              </Grid.Column>
            </Grid.Row>

  {/* ONLY VISIBLE ON MOBILE */}

            <Grid.Row textAlign='center' only='mobile'>
              <Grid.Column width = {4}>
                <Icon name='search' size='big' />
              </Grid.Column>
              <Grid.Column width={12}>
                <ContentStyleWhiteLeft>
                  Search the materials database by keyword to find all sorts of great resources!
                </ContentStyleWhiteLeft>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </GreenDiv>

  {/* MATERIALS SEARCH FIELD AND BUTTONS */}

        <SpecialDiv>
          <SpecialDiv>
            <CardHeader>
              Search Materials
            </CardHeader>
          </SpecialDiv>
          <Form>
            <Form.Input
              placeholder='Search Resources...'
              name='searchResources'
              value={searchResources}
              onChange={this.handleChange}
              fluid
            />
          </Form>
        </SpecialDiv>

    {/* CONDITIONALLY RENDER THE MATERIALS VIEW COMPONENT HERE */}

    {
      materialView === true ?
      this.renderMaterialView()
      :
      null
    }

    {/* ALUTIIQ EDUCATION.ORG DATABASE TABLE */}

      <SpecialDiv>
        <Div>
          <Grid celled='internally'>
            <Grid.Row>
              <Grid.Column computer={6} tablet={6} mobile={10} verticalAlign='middle'>
                <ColumnHead>
                  Title
                </ColumnHead>
              </Grid.Column>
              <Grid.Column width={6} verticalAlign='middle' only='computer tablet'>
                <ColumnHead>
                  Subject
                </ColumnHead>
              </Grid.Column>
              <Grid.Column computer={4} tablet={4} mobile={6} textAlign='center' verticalAlign='middle'>
                <ColumnHead>
                  Information
                </ColumnHead>
              </Grid.Column>
            </Grid.Row>
              { loading ?
              this.nowLoading()
              :
              this.renderSearchMaterials()
              }
          </Grid>
        </Div>
      </SpecialDiv>
    </Fragment>
    )
  }
}

 const mapStateToProps = (state) => {
  return {
    materials: state.materials,
    user: state.user,
    editables: state.editables

  }
}


export default connect(mapStateToProps)(Materials)
