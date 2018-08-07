import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import {
  Header, 
  Grid,
} from 'semantic-ui-react'
import {
  SpecialDiv,
  SectionHead,
  ContentStyle,
  ColumnHead,
} from '../styles/CommonStyles'

class Thematic extends Component {

  // Create a SQL query to search the materials

  render() {
    return(
      <Fragment>
        <SpecialDiv>
          <Header textAlign='center'>
            <SectionHead>
              Alutiiq Heritage Thematic Units
            </SectionHead>
          </Header>
          <ContentStyle>
            Developed by teachers for teachers, our Alutiiq Heritage Thematic Units book contains 6 units, targeted at grades Kindergarden through 5th grade. Each unit contains between 6 to 11 lessons for use within a classroom. Teachers are encouraged to send in comments or lesson expansion ideas for revision of this teachers' curriculum workbook as it is test piloted with students. Spiral bound copies of the book are available at NVA for educators and learners of the Alutiiq language. Download the full workbook from the link below, or contact the Native Village of Afognak at (907) 486-6357 for a copy or to share your ideas for expansion and revision.
          </ContentStyle>
        </SpecialDiv>

        <SpecialDiv>
          <Grid celled='internally'>
            <Grid.Row>
              <Grid.Column width={6} verticalAlign='middle'>
                <ColumnHead>
                  Title
                </ColumnHead>
              </Grid.Column>

              <Grid.Column width={6} verticalAlign='middle'>
                <ColumnHead>
                  Grade Level
                </ColumnHead>
              </Grid.Column>

              <Grid.Column width={4} verticalAlign='middle'>
                <ColumnHead>
                  View
                </ColumnHead>
              </Grid.Column>

            </Grid.Row>
          </Grid>
        </SpecialDiv>
      </Fragment>
    )
  }
}

export default connect()(Thematic)