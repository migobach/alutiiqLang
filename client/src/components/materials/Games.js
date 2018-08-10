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
              <i>Wamqutat</i>: Games
            </SectionHead>
          </Header>
        </BlueDiv> 

        <SpecialDiv>
          <ContentStyle>
            In addition to the games and activity resources located within the Lesson Pages on this website, there are other games that can be played in Alutiiq listed below. Each game listed includes the information and resources needed to successfully play at your next game night. 
          </ContentStyle>
        </SpecialDiv>

      </div>
    )
  }
}

export default Games
