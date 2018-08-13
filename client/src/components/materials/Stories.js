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

class Stories extends Component {
  render() {
    return(
      <div>
        <BlueDiv>
          <Header textAlign='center'>
            <SectionHead>
              <i>Qulianguat</i>: Stories
            </SectionHead>
          </Header>
        </BlueDiv> 

        <SpecialDiv>
          <ContentStyle>
            Being able to sit and listen to traditional stories is an opportunity few of us can take advantage of. However, by clicking on the stories and transcripts below, you can listen to a story and follow along. 
          </ContentStyle>
        </SpecialDiv>

      </div>
    )
  }
}

export default Stories