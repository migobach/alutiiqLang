import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Header, 
} from 'semantic-ui-react'
import {
  SpecialDiv,
  SectionHead,
  ContentStyle,
} from '../styles/CommonStyles'

class Nest extends Component {

  render() {
    return(
      <div>
        <SpecialDiv>
          <Header textAlign='center'>
            <SectionHead>
              <i>Alutiit'stun Niuwawik</i> Curriculum and Resources
            </SectionHead>
          </Header>
          <ContentStyle>
            Curricular themes at the language nest are organized around cultural themes that prepare students for kindergarten. Interacting with elders, community members, and their own peers make in a culturally and linguistically rich environment are what make the langauge nest environment unique.
          </ContentStyle>
        </SpecialDiv>
      </div>
    )
  }
}

export default connect()(Nest)