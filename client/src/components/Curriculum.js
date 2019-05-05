import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCurriculum } from '../reducers/curriculum'
import Workbook from './curriculum/Workbook'
import Thematic from './curriculum/Thematic'
import Preschool from './curriculum/Preschool'
import Nest from './curriculum/Nest'
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

class Curriculum extends Component {
  state = { workbookComp: false, preschoolComp: false, nestComp: false, thematicComp: false }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(getCurriculum())
  }

  toggleWorkbookComp = () => {
    this.setState({workbookComp: !this.state.workbookComp, preschoolComp: false, nestComp: false, thematicComp: false})
  }

  toggleNestComp = () => {
    this.setState({nestComp: !this.state.nestComp, workbookComp: false, preschoolComp: false, thematicComp: false})
  }

  togglePreschoolComp = () => {
    this.setState({preschoolComp: !this.state.preschoolComp, workbookComp: false, nestComp: false, thematicComp: false})
  }

  toggleThematicComp = () => {
    this.setState({thematicComp: !this.state.thematicComp, nestComp: false, preschoolComp: false, workbookComp: false})
  }

  renderingComponents = () => {
    const { workbookComp, preschoolComp, nestComp, thematicComp } = this.state
    if (workbookComp === true) {
      return <Workbook view={this.toggleWorkbookComp}/>
    } else if (preschoolComp === true) {
      return <Preschool view={this.togglePreschoolComp}/>
    } else if (nestComp === true) {
      return <Nest view={this.toggleNestComp}/>
    } else if (thematicComp === true) {
      return <Thematic view={this.toggleThematicComp} />
    } else 
      return null
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
          <SpecialDiv>
            <Header textAlign="center">
              <SectionHead>
                Alutiiq Language K-5 Curriculum Resources
              </SectionHead>
            </Header>
            <ContentStyleWhite>
              All published Alutiiq language materials on this webpage are for educational usage. You will find audio links for lesson vocabulary in both the Northern and Southern Kodiak Alutiiq styles to support the diverse ways of speaking Alutiiq across the region. We hope educators will take advantage of this opportunity to share insights and recommendations so we can continue to improve these resources.
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
      </Grid>
      </SpecialDiv>

    </div>
    )
  }
}

export default connect()(Curriculum)