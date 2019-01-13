import React, {Component} from 'react'
import {
  Header,
} from 'semantic-ui-react'
import {
  SpecialDiv,
  SectionHead,
  BlueDiv,
  ContentStyle,
} from '../styles/CommonStyles'

class Games extends Component {
  render() {
    return(
      <div>
        <BlueDiv>
          <Header textAlign='center'>
            <SectionHead>
              Videos
            </SectionHead>
          </Header>
        </BlueDiv> 

        <SpecialDiv>
          <ContentStyle>
            This page is a work in progress. 
          </ContentStyle>
        </SpecialDiv>

      </div>
    )
  }
}

export default Games
