import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getEditablesData } from '../reducers/editables'
import {
  Header,
  Grid,
  Divider,
  Image,
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
  BodyLink,
  Pointer,
  ContentStyleWhite,
} from './styles/CommonStyles'
import ContentEditable from 'react-contenteditable'
import Jenga from '../images/Jenga.jpg'
import Class from '../images/Class.jpg'
import axios from 'axios';

let firstButton = new Audio('https://alutiiq-language-resources.s3-us-west-2.amazonaws.com/page_audio/Katurlita.mp3')

class Classes extends Component {
  state = {
    body: {},
    header: {},
    title: {},
    content: {},
    admin: false,
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(getEditablesData())
  }

  constructor(props) {
    super(props)
    this.contentEditable = React.createRef()
  };

  handleChangeBody = evt => {
    const elementType = evt._dispatchInstances.type
    console.log('elementType:', elementType)

   if (elementType === "classesHeader") {
     if (this.props.editables.find(val => val.name === 'classesHeader') !== undefined) {
       const preStructuredHeader = this.props.editables.find(val => val.name === 'classesHeader')
         preStructuredHeader.textShort = evt.target.value
         this.setState({ header: preStructuredHeader })
     } else {
       this.setState({ header: { name: 'classesHeader', textShort: evt.target.value }})
     }
    } else if (elementType === 'classesBody') {
      if (this.props.editables.find(val => val.name === 'classesBody') !== undefined) {
        const preStructuredBody = this.props.editables.find(val => val.name === 'classesBody')
          preStructuredBody.textLong = evt.target.value
          this.setState({ body: preStructuredBody })
      } else {
        this.setState({ body: { name: 'classesBody', textLong: evt.target.value }})
      }
    } else if (elementType === 'classesSubTitle') {
      if (this.props.editables.find(val => val.name === 'classesSubTitle') !== undefined) {
        const preStructuredSubTitle = this.props.editables.find(val => val.name === 'classesSubTitle')
          preStructuredSubTitle.textShort = evt.target.value
          this.setState({ title: preStructuredSubTitle })
      } else {
        this.setState({ title: { name: 'classesSubTitle', textShort: evt.target.value }})
      }
    } else if ( elementType === 'classesSubContent') {
      if (this.props.editables.find(val => val.name === 'classesSubContent')) {
        const preStructuredSubContent = this.props.editables.find(val => val.name === 'classesSubContent')
          preStructuredSubContent.textLong = evt.target.value
          this.setState({ content: preStructuredSubContent })
      } else {
        this.setState({ content: { name: 'classesSubContent', textLong: evt.target.value }})
      }
    }
  };

  // handleChange = evt => {
  //   console.log('event val', evt.target.value)
  // }

  handleBlurBody = () => {
    const updatedBody = this.state.body
    const updatedHeader = this.state.header
    const updatedSubTitle = this.state.title
    const updatedSubContent = this.state.content
    console.log('state:', '\n', updatedBody, '\n', updatedHeader, '\n',updatedSubTitle, '\n',updatedSubContent)

    if (updatedHeader.id && updatedHeader.name === "classesHeader") {
      axios.put(`api/editables/${updatedHeader.id}`, updatedHeader)
    }

    if (updatedHeader.id === undefined && updatedHeader.name === 'classesHeader') {
      axios.post('api/editables', updatedHeader)
    }

    if (updatedBody.id && updatedBody.name === 'classesBody') {
      axios.put(`api/editables/${updatedBody.id}`, updatedBody )
    }

    if (updatedBody.id === undefined && updatedBody.name === 'classesBody') {
      console.log('in body POST', updatedBody)
      axios.post('api/editables', updatedBody )
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

  toggleFirstIcon = () => {
    console.log(firstButton)
    firstButton.play()
  }

  render() {
    return(
    <div>
      <Parallax
        bgImage={Class}
        blur={{min: 5, max:1}}
        bgImageAlt="Illustration from Grouse Girl Book"
        strength={500}
      >
        <div style={{height: 350}}>
          <SpecialDiv>
            <Header textAlign="center">
              <SectionHead>
                <ContentEditable
                  html={
                    (this.props.editables.length >= 1 && this.props.editables.find(val => val.name === 'classesHeader') !== undefined) ?
                    this.props.editables.find(val => val.name === 'classesHeader').textShort :
                    'Classes and Gatherings'
                  } // innerHTML of the editable div - this.state.html
                  disabled={this.props.user.id  ? false : true} // use true to disable editing maybe use the user in props here to give permissions
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

      <SpecialDiv>
        <GreenHead>
          Weekly Gatherings:
          <Divider />
        </GreenHead>

          {/* TODO: TEXT EDIT FIELDS */}
          <ColumnHead>
            Elders Session
          </ColumnHead>
            <ContentStyle>
              Monday | 1:00 pm - 2:15 pm
              <br />
              Alutiiq Museum and Archaeological Repository
              <br />
              215 Mission Road, Kodiak Alaska
              <br />
              <br />
              Alutiiq Elders meet each week to review teaching resources, practice lesson content, and edit songs, stories and other instructional resources. All learners and speakers are welcome to sit in on the discussions. Please call the <BodyLink href={"https://alutiiqmuseum.org/"} target="_blank">Alutiiq Museum</BodyLink> for up to date information at (844) 425-8844.
            </ContentStyle>
      </SpecialDiv>

      <SpecialDiv>
        <GreenHead>
          Other Opportunities:
          <Divider />
        </GreenHead>
          <ColumnHead>
            <i>Alutiit'stun Niuwawik</i>- A Place to Speak Alutiiq
          </ColumnHead>
            <ContentStyle>
              215 Mission Road, Suite 213, Kodiak Alaska
              <br />
              <br />
              The Alutiiq Language Nest is operated by the Sun'aq Tribe of Kodiak and sponsored by a grant from the Administration for Native Americans. The Language Nest operates Tuesday, through Friday 8am-12pm for kids age 3-5, and is also open to younger kids who are accompanied by a caregiver. Registration is required. Guests are welcome with prior notice to the teachers. <BodyLink href={"http://sunaq.org/languageprograms/language-nest/"} target="_blank">Click here</BodyLink> to learn how to register, or for more information, contact the teachers at 907-512-5995.
            </ContentStyle>
          <br />
          <ColumnHead>
            Kodiak College Alutiiq Language Courses
          </ColumnHead>
            <ContentStyle>
              <i>Registration Required</i>
              <br />
              <br />
              UAA-Kodiak College is now offering introductory courses in the Alutiiq Language that will lead to a Certificate or AA Degree in Alutiiq Studies. Visit <BodyLink href={"https://koc.alaska.edu/students/academics/departments/alutiiq_studies.cshtml"} target="_blank">Kodiak College's Alutiiq Studies</BodyLink> website to verify schedules and to register for Alutiiq 101, Alutiiq 102, and an Alutiiq Orthography class. You can also call the Alutiiq Studies program at (907) 486-1276 for more information.
            </ContentStyle>
          <br />
          <ColumnHead>
            Dig Afognak Cultural Summer Camp
          </ColumnHead>
            <ContentStyle>
            Native Village of Afognak
              <br />
              (907) 486-6357
              <br />
              115 Mill Bay Road, Kodiak Alaska
              <br />
              <br />
              Dig Afognak camp is a cultural education program that is geared toward youth. A central focus of camp is Alutiiq culture, values, and language. Dig Afognak is a place where young people bond through cultural activities and engagement. For more information, contact Nancy Nelson or Nina Gronn at Native Village of Afognak. If you would like to register, <BodyLink href={"https://www.afognak.org/dig-afognak/"} target="_blank"> click here </BodyLink>.
            </ContentStyle>
          <br />
          <ColumnHead>
            Native Village of Afognak <i>Uswillraraat Qipayaat-</i> After School Program
          </ColumnHead>
            <ContentStyle>
              Native Village of Afognak
              <br />
              (907) 486-6357
              <br />
              115 Mill Bay Road, Kodiak Alaska
              <br />
              <br />
              Once a year Native Village of Afognak will host an after-school program. The focus of this program is to teach the younger generation the language, games, and art projects centered around the Alutiiq culture. If you would like to know more about this program, contact Denise Malutin at Native Village of Afognak. You can also visit our <BodyLink href={"https://www.afognak.org/"} target="_blank">website</BodyLink>.
            </ContentStyle>
          <br />
          <ColumnHead>
            Kodiak High School Language Class
          </ColumnHead>
            <ContentStyle>
              <i>Registration Required</i>
              <br />
              <br />
              KHS Alutiiq Language classes are a full-year World Language class, also offered for dual credit through the Kodiak College. We offer year-long instruction in Alutiiq I and Alutiiq II for high school students. The classes are taught by Alutiiq Language Instructor, Candace Branson with support from a group of fluent Alutiiq Elders and team of other adult learners. Questions about the Kodiak High School Class or resources shared from the class can be addressed to <BodyLink href={`mailto:cmbranson@sunaq.org`}>Candace Branson</BodyLink>.
            </ContentStyle>
      </SpecialDiv>

       <SpecialDiv>

         {/* TODO: TEXT EDIT FIELDS */}
        <GreenHead>
          Alutiiq Language Meetings:
          <Divider />
        </GreenHead>
          <ColumnHead>
            <i>Qik'rtarmiut Alutiit</i> Regional Language Advisory Committee
          </ColumnHead>
            <ContentStyle>
              The <i>Qik’rtarmiut Alutiit</i> (Alutiiq People of the Island) Regional Language Advisory Committee (known as the “Qik Committee”) started in 2003, and is a grassroots committee made up of representatives from island-wide tribes and organizations, as well as interested Elders and other individuals. The committee meets every few months to guide projects in the language revitalization movement and inform members of project updates and events. To get on the agenda for the next Qik Committee meeting, or to be signed up to the mailing list for meeting announcements, call the Alutiiq Museum at (844) 425-8844 or email <BodyLink href={`mailto:molly@alutiiqmuseum.org`}>Molly Odell</BodyLink>.
            </ContentStyle>
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
  return{
    editables: state.editables,
    user: state.user
  }
}

export default connect(mapStateToProps)(Classes)


// for class content, can I make a new DB for dynamic editables
// columns: name, location, contact, description
// I ALREADY HAVE ITEMS DB.

// CURRENT COLUMNS:
// title, body, buttonUrl, buttonName, visible

// ADD COLUMNS IN MIGRATION
// location, contact