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

class Posters extends Component {
  render() {
    return(
      <div>
        <BlueDiv>
          <Header textAlign='center'>
            <SectionHead>
              Posters
            </SectionHead>
          </Header>
        </BlueDiv> 

        <SpecialDiv>
          <ContentStyle>
            Posters have been created to visually cue learners into speaking Alutiiq. They may be printed out and posted around the house, office, or classroom to bring Alutiiq language into your daily routines.
            <br />
            <br />
            Some of the posters that have been developed help learners perform basic conversation in Alutiiq, identify foods, colors, emotions, or items visible all around us on a daily basis. Click on the posters below to access a printable PDF and begin using these posters to help expand your Alutiiq vocabulary and conversational abilities. 
          </ContentStyle>
        </SpecialDiv>

      </div>
    )
  }
}

export default Posters