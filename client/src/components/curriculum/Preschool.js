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

class Preschool extends Component {

  render() {
    return(
      <div>
        <Divider />

        <SpecialDiv>
          <Header textAlign='center'>
            <SectionHead>
              Alutiiq Language Preschool Curriculum
            </SectionHead>
            <ContentStyle>
              Throughout the past few years, our language program has been developing a Preschool Curriculum for the Alutiiq Language. This can be used for children young and old, adult learners, and anybody in between. As we develop and revise the curriculum, you may notice some changes. Click the link below to view the Preschool Curriculum!
            </ContentStyle>
          </Header>
        </SpecialDiv>
      </div>
    )
  }
}

export default connect()(Preschool)