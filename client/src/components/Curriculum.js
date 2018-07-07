import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Segment, 
  Header,
  Grid,
 } from 'semantic-ui-react'

const Curriculum = () => (
  <Segment>
    <Segment padded='very'>
      <Header
        textAlign="center"
        as="h2"
        >
        Alutiiq Language K-5 Curriculum Resources
      </Header>
      <p>All published Alutiiq language materials on this webpage are for educational usage. You will find audio links for lesson vocabulary in both the Northern and Southern Kodiak Alutiiq styles to support the diverse ways of speaking Alutiiq across the region. We hope educators will take advantage of this opportunity to share insights and recommendations so we can continue to improve these resources.</p>
    </Segment>

    <Segment padded='very'>
    <Grid celled='internally'>
      <Grid.Row>
        <Grid.Column width={3} textAligh='center'>
          <i>Alutiit'stun Niuwawik</i> Language Nest Curriculum
        </Grid.Column>
        <Grid.Column width={13}>
          Lesson outlines for a complete academic year of language nest lesson and activity plans. 
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={3}>
          Kodiak Alutiiq Language Preschool Curriculum
        </Grid.Column>
        <Grid.Column width={13}>
          140 Lessons focused on early childhood development and school preparedness.
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={3}>
          Kodiak Alutiiq Elementary Language Curriculum Workbook 
        </Grid.Column>
        <Grid.Column width={13}>
          Level I & II: 40 lessons, with Alutiiq audio files
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={3}>
          Kodiak Alutiiq Thematic Curriculum Units
        </Grid.Column>
        <Grid.Column width={13}>
          6 units targeted at Kindergarden through 5th grade
        </Grid.Column>
      </Grid.Row>
    </Grid>
    </Segment>

  </Segment>
)

export default Curriculum