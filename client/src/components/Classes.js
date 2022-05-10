import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getEditablesData } from '../reducers/editables'
import { getItems } from '../reducers/items'
import {
  Header,
  Grid,
  Divider,
  Image,
  Container,
  Button
} from 'semantic-ui-react'
import { Parallax } from 'react-parallax'
import {
  SpecialDiv,
  SectionHead,
  ContentStyle,
  IconHover,
  CardHeader,
  GreenDiv,
  WhiteTitle,
  ContentStyleWhiteLeft,
  GreenHead,
  ColumnHead,
  Pointer,
  ContentStyleWhite,
} from './styles/CommonStyles'
import ContentEditable from 'react-contenteditable'
import Jenga from '../images/Jenga.jpg'
import Class from '../images/Class.jpg'
import ItemForm from './ItemForm'
import axios from 'axios';

let firstButton = new Audio('https://alutiiq-language-resources.s3-us-west-2.amazonaws.com/page_audio/Katurlita.mp3')

class Classes extends Component {
  state = {
    body: {},
    header: {},
    title: {},
    content: {},
    admin: false,
    showForm: false,
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(getEditablesData())
    dispatch(getItems())
  }

  constructor(props) {
    super(props)
    this.contentEditable = React.createRef()
  };

  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm })
  }

  handleChangeBody = evt => {
    const elementType = evt._dispatchInstances.type
    console.log('elementType:', elementType)

    if (elementType === "classesHeader") {
      if (this.props.editables.find(val => val.name === 'classesHeader') !== undefined) {
        const preStructuredHeader = this.props.editables.find(val => val.name === 'classesHeader')
        preStructuredHeader.textShort = evt.target.value
        this.setState({ header: preStructuredHeader })
      } else {
        this.setState({ header: { name: 'classesHeader', textShort: evt.target.value } })
      }
    } else if (elementType === 'classesBody') {
      if (this.props.editables.find(val => val.name === 'classesBody') !== undefined) {
        const preStructuredBody = this.props.editables.find(val => val.name === 'classesBody')
        preStructuredBody.textLong = evt.target.value
        this.setState({ body: preStructuredBody })
      } else {
        this.setState({ body: { name: 'classesBody', textLong: evt.target.value } })
      }
    } else if (elementType === 'classesSubTitle') {
      if (this.props.editables.find(val => val.name === 'classesSubTitle') !== undefined) {
        const preStructuredSubTitle = this.props.editables.find(val => val.name === 'classesSubTitle')
        preStructuredSubTitle.textShort = evt.target.value
        this.setState({ title: preStructuredSubTitle })
      } else {
        this.setState({ title: { name: 'classesSubTitle', textShort: evt.target.value } })
      }
    } else if (elementType === 'classesSubContent') {
      if (this.props.editables.find(val => val.name === 'classesSubContent')) {
        const preStructuredSubContent = this.props.editables.find(val => val.name === 'classesSubContent')
        preStructuredSubContent.textLong = evt.target.value
        this.setState({ content: preStructuredSubContent })
      } else {
        this.setState({ content: { name: 'classesSubContent', textLong: evt.target.value } })
      }
    }
  };

  handleBlurBody = () => {
    const updatedBody = this.state.body
    const updatedHeader = this.state.header
    const updatedSubTitle = this.state.title
    const updatedSubContent = this.state.content
    console.log('state:', '\n', updatedBody, '\n', updatedHeader, '\n', updatedSubTitle, '\n', updatedSubContent)

    if (updatedHeader.id && updatedHeader.name === "classesHeader") {
      axios.put(`api/editables/${updatedHeader.id}`, updatedHeader)
    }

    if (updatedHeader.id === undefined && updatedHeader.name === 'classesHeader') {
      axios.post('api/editables', updatedHeader)
    }

    if (updatedBody.id && updatedBody.name === 'classesBody') {
      axios.put(`api/editables/${updatedBody.id}`, updatedBody)
    }

    if (updatedBody.id === undefined && updatedBody.name === 'classesBody') {
      console.log('in body POST', updatedBody)
      axios.post('api/editables', updatedBody)
    }

    if (updatedSubTitle.id && updatedSubTitle.name === 'classesSubTitle') {
      axios.put(`api/editables/${updatedSubTitle.id}`, updatedSubTitle)
    }

    if (updatedSubTitle.id === undefined && updatedSubTitle.name === 'classesSubTitle') {
      axios.post('api/editables', updatedSubTitle)
    }

    if (updatedSubContent.id && updatedSubContent.name === 'classesSubContent') {
      axios.put(`api/editables/${updatedSubContent.id}`, updatedSubContent)
    }

    if (updatedSubContent.id === undefined && updatedSubContent.name === 'classesSubContent') {
      axios.post('api/editables', updatedSubContent)
    }

  }

  deleteContent = (id) => {
    console.log('id in delete content:', id)
    axios.delete(`api/items/${id}`)
    //DELETE /api/items/:id
  }

  handleGatheringsContent = () => {
    let classes = this.props.items.filter(val => val.page === 'classes') !== undefined ? this.props.items.filter(val => val.page === 'classes') : null

    console.log('classes:', classes)

    if (classes !== [] && classes.length >= 1) {
      return(
        classes.map( (gathering)  =>
        <div>
          <ColumnHead>
            {gathering.title}
          </ColumnHead>
          <ContentStyle>
            {gathering.location}
            <br />
            {gathering.contact}
            <br />
            <br />
            {gathering.body}
            <br />
            <br />
          </ContentStyle>
        { this.props.user.id ?
          <div>
          <Divider hidden/>
            <Container textAlign='right' verticalAlign='middle'>
                <Button onClick={() => this.deleteContent(gathering.id)} color='red'>
                  Delete Content
                </Button>
            </Container>
          </div> :
          null
        }
        </div>
        )
      )
    }
  }


  toggleFirstIcon = () => {
    console.log(firstButton)
    firstButton.play()
  }

  render() {
    const { showForm } = this.state
    const { user } = this.props

    return (
      <div>
        <Parallax
          bgImage={Class}
          blur={{ min: 5, max: 1 }}
          bgImageAlt="Illustration from Grouse Girl Book"
          strength={500}
        >
          <div style={{ height: 350 }}>
            <SpecialDiv>
              <Header textAlign="center">
                <SectionHead>
                  <ContentEditable
                    html={
                      (this.props.editables.length >= 1 && this.props.editables.find(val => val.name === 'classesHeader') !== undefined) ?
                        this.props.editables.find(val => val.name === 'classesHeader').textShort :
                        'Classes and Gatherings'
                    } // innerHTML of the editable div - this.state.html
                    disabled={this.props.user.id ? false : true} // use true to disable editing maybe use the user in props here to give permissions
                    onChange={this.handleChangeBody} // handle innerHTML change
                    tagName='classesHeader' // Use a custom HTML tag (uses a div by default)
                    onBlur={this.handleBlurBody}
                  />
                </SectionHead>
              </Header>
              <ContentStyleWhite>
                <ContentEditable
                  html={
                    (this.props.editables.length >= 1 && this.props.editables.find(val => val.name === 'classesBody') !== undefined) ?
                      this.props.editables.find(val => val.name === 'classesBody').textLong :
                      'There are opportunities to learn Alutiiq in the community, through classes, or engaging opportunities. Check out the list of available resources below.'
                  } // innerHTML of the editable div - this.state.html
                  disabled={this.props.user.id ? false : true}       // use true to disable editing maybe use the user in props here to give permissions
                  onChange={this.handleChangeBody} // handle innerHTML change
                  tagName='classesBody' // Use a custom HTML tag (uses a div by default)
                  onBlur={this.handleBlurBody}
                />
              </ContentStyleWhite>
            </SpecialDiv>
          </div>
        </Parallax>

        <Grid>
          <Grid.Row columns={1}>
            <Grid.Column textAlign='center'>
              <SpecialDiv>
                <Pointer>
                  <IconHover name='talk' size='large' color='grey' onClick={this.toggleFirstIcon} />
                </Pointer>
                <CardHeader>
                  <i>Katurlita!</i>
                </CardHeader>
                <ContentStyle>
                  Let's get together!
                </ContentStyle>
              </SpecialDiv>
            </Grid.Column>
          </Grid.Row>
        </Grid>


        {/* START OF WEEKLY GATHERINGS DYNAMIC CONTENT */}

        <SpecialDiv>
          <GreenHead>
            Language Gatherings and Opportunities:
            <Divider />
          </GreenHead>

          {
            this.props.items.length >= 1 && this.props.items.find(val => val.page === 'classes') ?
              this.handleGatheringsContent() :
              <div>
                <ColumnHead>
                  <i>Linganaa!</i>
                </ColumnHead>
                <ContentStyle>
                  Currently there are no opportunities available to gather with other speakers and learners.
                </ContentStyle>
              </div>
          }

{/* SPECIAL CONTENT TOGGLING AND EDITING */}

        <Container textAlign='center' verticalAlign='middle'>
          {
            showForm ?
            <div>
              <ItemForm user={this.props.user} item={this.props.items} toggleForm={this.toggleForm} originPage='classes'/>
            </div>
            :
            <div>
              {this.handleGatheringsContent}
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


        </SpecialDiv>



        <Divider hidden />

        <GreenDiv>
          {/* TODO: TEXT EDIT FIELDS */}
          {/* TODO: PHOTO EDIT FIELDS */}
          <Grid stackable columns={2} verticalAlign='middle'>
            <Grid.Column width={10}>
              <Image src={Jenga} size='massive' floated='left' verticalAlign='middle' />
            </Grid.Column>
            <Grid.Column width={5}>
              <SpecialDiv innerRef={this.contentEditable}>
                <WhiteTitle>
                  <i>
                    <ContentEditable
                      html={
                        (this.props.editables.length >= 1 && this.props.editables.find(val => val.name === 'classesSubTitle') !== undefined) ?
                          this.props.editables.find(val => val.name === 'classesSubTitle').textShort :
                          'Allrani wamlita allrilugmi.'
                      } // innerHTML of the editable div - this.state.html
                      disabled={this.props.user.id ? false : true}       // use true to disable editing maybe use the user in props here to give permissions
                      onChange={this.handleChangeBody} // handle innerHTML change
                      tagName='classesSubTitle' // Use a custom HTML tag (uses a div by default)
                      onBlur={this.handleBlurBody}
                    />
                  </i>
                </WhiteTitle>
                <ContentStyleWhiteLeft>
                  <ContentEditable
                    html={
                      (this.props.editables.length >= 1 && this.props.editables.find(val => val.name === 'classesSubContent') !== undefined) ?
                        this.props.editables.find(val => val.name === 'classesSubContent').textLong :
                        'Sometimes we all play games together. That way, we all have fun! Playing games makes learning Alutiiq fun, and engages all of us.'
                    } // innerHTML of the editable div - this.state.html
                    disabled={this.props.user.id ? false : true}       // use true to disable editing maybe use the user in props here to give permissions
                    onChange={this.handleChangeBody} // handle innerHTML change
                    tagName='classesSubContent' // Use a custom HTML tag (uses a div by default)
                    onBlur={this.handleBlurBody}
                  />
                </ContentStyleWhiteLeft>
              </SpecialDiv>
            </Grid.Column>
          </Grid>
        </GreenDiv>

      </div>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    editables: state.editables,
    user: state.user,
    items: state.items,
  }
}

export default connect(mapStateToProps)(Classes)


// for class content, can I make a new DB for dynamic editables
// columns: name, location, contact, description
// I ALREADY HAVE ITEMS DB.

// CURRENT COLUMNS:
// title, body, buttonUrl, buttonName, visible

// ADD COLUMNS IN MIGRATION
// location, contact, page