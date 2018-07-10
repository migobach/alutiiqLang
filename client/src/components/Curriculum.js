import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Segment, 
  Header,
  Grid,
 } from 'semantic-ui-react'
 import { 
  ColumnHead,
  SectionHead,
  SubSectionHead,
  ContentStyle,
  SpecialDiv,
} from './styles/CommonStyles'

const Curriculum = () => (
  <Segment padded='very'>
    <SpecialDiv>
      <Header textAlign="center">
        <SectionHead>
          Alutiiq Language K-5 Curriculum Resources
        </SectionHead>
      </Header>
      <p>All published Alutiiq language materials on this webpage are for educational usage. You will find audio links for lesson vocabulary in both the Northern and Southern Kodiak Alutiiq styles to support the diverse ways of speaking Alutiiq across the region. We hope educators will take advantage of this opportunity to share insights and recommendations so we can continue to improve these resources.</p>
    </SpecialDiv>

    <Segment padded='very'>
    <Grid celled='internally'>
      <Grid.Row>
        <Grid.Column width={5} textAligh='center'>
          <ColumnHead>
            <i>Alutiit'stun Niuwawik</i> Language Nest Curriculum
          </ColumnHead>
        </Grid.Column>
        <Grid.Column width={11}>
          Lesson outlines for a complete academic year of language nest lesson and activity plans. 
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={5}>
          <ColumnHead>
            Kodiak Alutiiq Language Preschool Curriculum
          </ColumnHead>
        </Grid.Column>
        <Grid.Column width={11}>
          140 Lessons focused on early childhood development and school preparedness.
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={5}>
          <ColumnHead>
            Kodiak Alutiiq Elementary Language Curriculum Workbook 
          </ColumnHead>
        </Grid.Column>
        <Grid.Column width={11}>
          Level I & II: 40 lessons, with Alutiiq audio files
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={5}>
          <ColumnHead>
            Kodiak Alutiiq Thematic Curriculum Units
          </ColumnHead>
        </Grid.Column>
        <Grid.Column width={11}>
          6 units targeted at Kindergarden through 5th grade
        </Grid.Column>
      </Grid.Row>
    </Grid>
    </Segment>

    <SpecialDiv>
      <Header textAlign='center'>
        <SubSectionHead>
          Project Summary
        </SubSectionHead>
      </Header>
      <ContentStyle>
        In 2008, NVA received a grant from the Administration for Native Americans (ANA) to publish a Kodiak Alutiiq Language Curriculum for students in preschool through 5th grade, translating materials originally developed by neighboring Chugach Sugpiaq/Alutiiq into Koniag Alutiiq. Through this one-year Native Language Preservation & Maintenance Planning Grant, NVA implemented our Kodiak Alutiiq Curriculum Project in partnership with Chugachmiut, Alutiiq Museum, Kodiak Island Borough School District, Native Educators of the Alutiiq Region, KMXT Radio Station, with support from other Kodiak Native organizations.
      </ContentStyle>
      <ContentStyle>
        Through this project, we developed an early childhood Alutiiq language curriculum that reflects the Kodiak Alutiiq community values and traditions and provides a framework for sharing our values and traditions within schools and tribal education programs in the Kodiak Archipelago. The central goal to these efforts is to increase access to Alutiiq language through curriculum and instructional resources. 
      </ContentStyle>
    </SpecialDiv>
    
  </Segment>
)

export default Curriculum