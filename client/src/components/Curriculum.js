import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCurriculum } from '../reducers/curriculum'
import Workbook from './curriculum/Workbook'
import Thematic from './curriculum/Thematic'
import Preschool from './curriculum/Preschool'
import Nest from './curriculum/Nest'
import HighSchool from './curriculum/HighSchool'
import {
  Header,
  Grid,
  Button,
 } from 'semantic-ui-react'
 import { Parallax } from 'react-parallax'
 import {
  ColumnHead,
  SectionHead,
  ContentStyle,
  SpecialDiv,
  ContentStyleWhite,
} from './styles/CommonStyles'
import Teaching from '../images/teaching.jpg'
import ContentEditable from 'react-contenteditable'
import axios from 'axios'
import { getEditablesData } from '../reducers/editables'

class Curriculum extends Component {
  state = {
    workbookComp: false,
    highSchoolComp: false,
    preschoolComp: false,
    nestComp: false,
    thematicComp: false,
    curriculumHeader: {},
    curriculumBody: {}
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(getCurriculum())
    dispatch(getEditablesData())
  }

  toggleWorkbookComp = () => {
    this.setState({workbookComp: !this.state.workbookComp, preschoolComp: false, nestComp: false, thematicComp: false, highSchoolComp: false})
  }

  toggleHighSchoolComp = () => {
    this.setState({highSchoolComp: !this.state.highSchoolComp, preschoolComp: false, nestComp: false, thematicComp: false, workbookComp: false})
  }

  toggleNestComp = () => {
    this.setState({nestComp: !this.state.nestComp, workbookComp: false, preschoolComp: false, thematicComp: false, highSchoolComp: false})
  }

  togglePreschoolComp = () => {
    this.setState({preschoolComp: !this.state.preschoolComp, workbookComp: false, nestComp: false, thematicComp: false, highSchoolComp: false})
  }

  toggleThematicComp = () => {
    this.setState({thematicComp: !this.state.thematicComp, nestComp: false, preschoolComp: false, workbookComp: false, highSchoolComp: false})
  }

  renderingComponents = () => {
    const { workbookComp, preschoolComp, nestComp, thematicComp, highSchoolComp } = this.state
    if (workbookComp === true) {
      return <Workbook view={this.toggleWorkbookComp}/>
    } else if (preschoolComp === true) {
      return <Preschool view={this.togglePreschoolComp}/>
    } else if (nestComp === true) {
      return <Nest view={this.toggleNestComp}/>
    } else if (thematicComp === true) {
      return <Thematic view={this.toggleThematicComp} />
    } else if (highSchoolComp === true){
      return  <HighSchool view={this.toggleHighSchoolComp} />
    } else
      return null
  }

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value })
 }

 handleChangeEditable = evt => {
  const elementType = evt._dispatchInstances.type

  if (elementType == 'curriculumHeader') {
    if (this.props.editables.find(val => val.name === 'curriculumHeader') != undefined) {
      const preStructuredHeader = this.props.editables.find(val => val.name === 'curriculumHeader')
       preStructuredHeader.textShort = evt.target.value
       this.state.curriculumHeader = preStructuredHeader
    } else {
      this.state.curriculumHeader = { name: 'curriculumHeader', textShort: evt.target.value }
    }

    if (elementType == 'curriculumBody') {
      if (this.props.editables.find(val => val.name === 'curriculumBody') != undefined) {
        const presturcturedBody = this.props.editables.find(val => val.name === 'curriculumBody')
         presturcturedBody.textLong = evt.target.value
         this.state.curriculumBody = presturcturedBody
      } else {
        this.state.curriculumBody = { name: 'curriculumBody', textLong: evt.target.value}
      }
    }
  }
}

handleBlurEditable = () => {
  const updatedHeader = this.state.curriculumHeader
  const updatedBody = this.state.curriculumBody

  if (updatedHeader.id) {
    axios.put(`api/editables/${updatedHeader.id}`, updatedHeader)
  }

  if (updatedHeader.id === undefined) {
    axios.post('api/editables', updatedHeader)
  }

  if (updatedBody.id) {
    axios.put(`api/editables/${updatedBody.id}`, updatedBody)
  }

  if (updatedBody.id === undefined) {
    axios.post('api/editables', updatedBody)
  }
}

  render() {
    return(
    <div>

    {/* CONDITIONALLY RENDERED CURRICULUM COMPONENTS */}

    { this.renderingComponents() }

    <Parallax
          bgImage={Teaching}
          blur={{min: 5, max:3}}
          bgImageAlt="Teaching Alutiiq, Afognak Island, Alaska"
          strength={500}
        >
        <div style={{height: 300}}>
          <SpecialDiv innerRef={this.contentEditable}>
            <Header textAlign="center">
              <SectionHead>
                {/* Alutiiq Language K-5 Curriculum Resources */}
                <ContentEditable
                  html={(this.props.editables.length >= 1 && this.props.editables.find(val => val.name === 'curriculumHeader') != undefined) ? this.props.editables.find(val => val.name === 'curriculumHeader').textShort : 'Alutiiq Language K-5 Curriculum Resources'}
                  disabled={this.props.user.id ? false : true}
                  onChange={this.handleChangeEditable}
                  tagName='curriculumHeader'
                  onBlur={this.handleBlurEditable}
                />
              </SectionHead>
            </Header>
            <ContentStyleWhite>
              <ContentEditable
                html={(this.props.editables.length >= 1 && this.props.editables.find(val => val.name === 'curriculumBody') != undefined) ? this.props.editables.find(val => val.name === 'curriculumBody').textLong : 'All published Alutiiq language materials on this webpage are for educational usage. You will find audio links for lesson vocabulary in both the Northern and Southern Kodiak Alutiiq styles to support the diverse ways of speaking Alutiiq across the region. We hope educators will take advantage of this opportunity to share insights and recommendations so we can continue to improve these resources.'}
                disabled={this.props.user.id ? false : true}
                onChange={this.handleChangeEditable}
                tagName='curriculumBody'
                onBlur={this.handleBlurEditable}
              />
            </ContentStyleWhite>
          </SpecialDiv>
        </div>
    </Parallax>

      <SpecialDiv>
      <Grid stackable>
        <Grid.Row>
          <Grid.Column width={5} textAlign='center'>
            <ColumnHead>
              <Button size='large' onClick={(e) => this.toggleNestComp(e)} fluid>
                <i>Alutiit'stun Niuwawik</i> Language Nest Curriculum
              </Button>
            </ColumnHead>
          </Grid.Column>
          <Grid.Column width={11} verticalAlign='middle'>
            <ContentStyle>
              Lesson outlines for a complete academic year of language nest lesson and activity plans.
            </ContentStyle>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={5} textAlign='center'>
            <ColumnHead>
              <Button size='large' onClick={(e) => this.togglePreschoolComp(e)} fluid>
                Kodiak Alutiiq Language Preschool Curriculum
              </Button>
            </ColumnHead>
          </Grid.Column>
          <Grid.Column width={11} verticalAlign='middle'>
            <ContentStyle>
              140 Lessons focused on early childhood development and school preparedness.
            </ContentStyle>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={5} textAlign='center'>
            <ColumnHead>
              <Button size='large' onClick={(e) => this.toggleWorkbookComp(e)} fluid>
                Kodiak Alutiiq Elementary Language Curriculum Workbook
              </Button>
            </ColumnHead>
          </Grid.Column>
          <Grid.Column width={11} verticalAlign='middle'>
            <ContentStyle>
              Level I & II: 40 lessons, with Alutiiq audio files
            </ContentStyle>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={5} textAlign='center'>
            <ColumnHead>
              <Button size='large' onClick={(e) => this.toggleThematicComp(e)} fluid>
                Kodiak Alutiiq Thematic Curriculum Units
              </Button>
            </ColumnHead>
          </Grid.Column>
          <Grid.Column width={11} verticalAlign='middle'>
            <ContentStyle>
              6 units targeted at Kindergarten through 5th grade
            </ContentStyle>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={5} textAlign='center'>
            <ColumnHead>
              <Button size='large' onClick={(e) => this.toggleHighSchoolComp(e)} fluid>
                High School Alutiiq Language Resources
              </Button>
            </ColumnHead>
          </Grid.Column>
          <Grid.Column width={11} verticalAlign='middle'>
            <ContentStyle>
              Standardized units covering a variety of topics, resources for Alutiiq I and Alutiiq II students
            </ContentStyle>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      </SpecialDiv>

    </div>
    )
  }
 }

const mapStateToProps = (state) => {
  return {
    editables: state.editables,
    user: state.user
  }
}

export default connect(mapStateToProps)(Curriculum)