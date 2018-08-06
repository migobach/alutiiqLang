import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Header, 
  Divider,
} from 'semantic-ui-react'
import {
  SpecialDiv,
  SectionHead,
  ContentStyle,
} from '../styles/CommonStyles'

class Thematic extends Component {

  render() {
    return(
      <div>
        <Divider />

        <SpecialDiv>
          <Header textAlign='center'>
            <SectionHead>
              Alutiiq Heritage Thematic Units
            </SectionHead>
            <ContentStyle>
              Developed by teachers for teachers, our Alutiiq Heritage Thematic Units book contains 6 units, targeted at grades Kindergarden through 5th grade. Each unit contains between 6 to 11 lessons for use within a classroom. Teachers are encouraged to send in comments or lesson expansion ideas for revision of this teachers' curriculum workbook as it is test piloted with students. Spiral bound copies of the book are available at NVA for educators and learners of the Alutiiq language. Download the full workbook from the link below, or contact the Native Village of Afognak at (907) 486-6357 for a copy or to share your ideas for expansion and revision.
            </ContentStyle>
          </Header>
        </SpecialDiv>
      </div>
    )
  }
}

export default connect()(Thematic)