import React, { Component } from 'react'
import { 
  Header 
} from 'semantic-ui-react'
import {
  SpecialDiv,
  SectionHead,
  ContentStyle,
} from './styles/CommonStyles'

class Classes extends Component {

  render() {
    return(
    <div>
      <SpecialDiv>
        <Header textAlign='center'>
          <SectionHead>
            Classes and Gatherings
          </SectionHead>
        </Header>
        <ContentStyle>
          Language is about communication, getting together with one another and sharing stories and time. Find a list of our frequent events below, or click on the link to follow our Facebook page to keep up with the latest events and happenings. Each season brings new events and opportunites to learn Alutiiq, and share time with one another.
        </ContentStyle>
      </SpecialDiv>

    </div>

    )
  }
}

export default Classes
