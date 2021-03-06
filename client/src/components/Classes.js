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
    console.log('evt:', evt)
    const elementType = evt._dispatchInstances.type
  
   if (elementType == 'ClassesHeader') {
      const preStructuredHeader = { ...this.props.editables.find(val => val.name === 'classHeader') }
        preStructuredHeader.textShort = evt.target.value
        this.state.header = preStructuredHeader
    } else if (elementType == 'ClassesBody') {
      const preStructuredBody = this.props.editables.find(val => val.name === 'classBody')
        preStructuredBody.textLong = evt.target.value
        this.state.body = preStructuredBody
    } else if (elementType == 'ClassesSubTitle') {
      const preStructuredSubTitle = this.props.editables.find(val => val.name === 'classSubTitle')
        preStructuredSubTitle.textShort = evt.target.value
        this.state.title = preStructuredSubTitle
    } else if ( elementType == 'ClassesSubContent') {
      const preStructuredSubContent = this.props.editables.find(val => val.name === 'classSubContent')
        preStructuredSubContent.textLong = evt.target.value
        this.state.content = preStructuredSubContent
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
    console.log('state:', updatedBody, updatedHeader, updatedSubTitle)
    
    if (updatedHeader.id ) {
      console.log('in header PUT', updatedHeader)
      axios.put(`api/editables/${updatedHeader.id}`, updatedHeader)
    }

    if (updatedBody.id) {
      console.log('in body PUT', updatedBody)
      axios.put(`api/editables/${updatedBody.id}`, updatedBody )
    }

    if (updatedSubTitle.id) {
      console.log('in subTitle PUT', updatedSubTitle, 'ID!!!!!:', updatedSubTitle.id)
      axios.put(`api/editables/${updatedSubTitle.id}`, updatedSubTitle)
    }

    if (updatedSubContent.id) {
      console.log('in subContent PUT', updatedSubContent)
      axios.put(`api/editables/${updatedSubContent.id}`, updatedSubContent)
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
        <div style={{height: 450}}>
          <SpecialDiv innerRef={this.contentEditable}>
            <Header textAlign="center">
              <SectionHead>
                <ContentEditable
                  html={this.props.editables.length >= 1 ? this.props.editables.find(val => val.name === 'classHeader').textShort : 'Classes and Gatherings'} // innerHTML of the editable div - this.state.html
                  disabled={this.props.user.id  ? false : true} // use true to disable editing maybe use the user in props here to give permissions
                  onChange={this.handleChangeBody} // handle innerHTML change
                  tagName='ClassesHeader' // Use a custom HTML tag (uses a div by default)
                  onBlur={this.handleBlurBody}
                />
              </SectionHead>
            </Header>
              <ContentStyleWhite>
                <ContentEditable
                  html={this.props.editables.length >= 1 ? this.props.editables.find(val => val.name === 'classBody').textLong : 'Default'} // innerHTML of the editable div - this.state.html
                  disabled={this.props.user.id ? false : true}       // use true to disable editing maybe use the user in props here to give permissions
                  onChange={this.handleChangeBody} // handle innerHTML change
                  tagName='ClassesBody' // Use a custom HTML tag (uses a div by default)
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
                      html={this.props.editables.length >= 1 ? this.props.editables.find(val => val.name === 'classSubTitle').textShort : 'Allrani wamlita allrilugmi!!!!!!!!.'} // innerHTML of the editable div - this.state.html
                      disabled={this.props.user.id ? false : true}       // use true to disable editing maybe use the user in props here to give permissions
                      onChange={this.handleChangeBody} // handle innerHTML change
                      tagName='ClassesSubTitle' // Use a custom HTML tag (uses a div by default)
                      onBlur={this.handleBlurBody}
                  />
                </i>
              </WhiteTitle>
              <ContentStyleWhiteLeft>
                <ContentEditable
                      html={this.props.editables.length >= 1 ? this.props.editables.find(val => val.name === 'classSubContent').textLong : 'Sometimes we all play games together. That way, we all have fun! Playing games makes learning Alutiiq fun, and engages all of us.'} // innerHTML of the editable div - this.state.html
                      disabled={this.props.user.id ? false : true}       // use true to disable editing maybe use the user in props here to give permissions
                      onChange={this.handleChangeBody} // handle innerHTML change
                      tagName='ClassesSubContent' // Use a custom HTML tag (uses a div by default)
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
