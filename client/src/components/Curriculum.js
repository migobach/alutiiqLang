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
 import { 
  ColumnHead,
  SectionHead,
  ContentStyle,
  SpecialDiv,
} from './styles/CommonStyles'

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
      return <Workbook />
    } else if (preschoolComp === true) {
      return <Preschool />
    } else if (nestComp === true) {
      return <Nest />
    } else if (thematicComp === true) {
      return <Thematic />
    } else 
      return <SpecialDiv />
  }

  render() {
    return( 
    <div>

    {/* CONDITIONALLY RENDERED CURRICULUM COMPONENTS */}
      
    { this.renderingComponents() }

      <SpecialDiv>
        <Header textAlign="center">
          <SectionHead>
            Alutiiq Language K-5 Curriculum Resources
          </SectionHead>
        </Header>
        <ContentStyle>
          All published Alutiiq language materials on this webpage are for educational usage. You will find audio links for lesson vocabulary in both the Northern and Southern Kodiak Alutiiq styles to support the diverse ways of speaking Alutiiq across the region. We hope educators will take advantage of this opportunity to share insights and recommendations so we can continue to improve these resources.
        </ContentStyle>
      </SpecialDiv>
  
      <SpecialDiv>
      <Grid stackable>
        <Grid.Row>
          <Grid.Column width={5} textAlign='center'>
            <ColumnHead>
              <Button size='large' onClick={(e) => this.toggleNestComp(e)}>
                <i>Alutiit'stun Niuwawik</i> Language Nest Curriculum
              </Button>
            </ColumnHead>
          </Grid.Column>
          <Grid.Column width={11}>
            <ContentStyle>
              Lesson outlines for a complete academic year of language nest lesson and activity plans. 
            </ContentStyle>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={5} textAlign='center'>
            <ColumnHead>
              <Button size='large' onClick={(e) => this.togglePreschoolComp(e)}>
                Kodiak Alutiiq Language Preschool Curriculum
              </Button>
            </ColumnHead>
          </Grid.Column>
          <Grid.Column width={11}>
            <ContentStyle>
              140 Lessons focused on early childhood development and school preparedness.
            </ContentStyle>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={5} textAlign='center'>
            <ColumnHead>
              <Button size='large' onClick={(e) => this.toggleWorkbookComp(e)}>
                Kodiak Alutiiq Elementary Language Curriculum Workbook 
              </Button>
            </ColumnHead>
          </Grid.Column>
          <Grid.Column width={11}>
            <ContentStyle>
              Level I & II: 40 lessons, with Alutiiq audio files
            </ContentStyle>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={5} textAlign='center'>
            <ColumnHead>
              <Button size='large' onClick={(e) => this.toggleThematicComp(e)}>
                Kodiak Alutiiq Thematic Curriculum Units
              </Button>
            </ColumnHead>
          </Grid.Column>
          <Grid.Column width={11}>
            <ContentStyle>
              6 units targeted at Kindergarden through 5th grade
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