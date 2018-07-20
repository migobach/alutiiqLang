import React, { Component } from 'react'
import {  
  Header,
} from 'semantic-ui-react'
import {
  SpecialDiv,
  SectionHead,
  ContentStyle,
} from './styles/CommonStyles'

class Dictionary extends Component {

  render() {
    return(
    <div>
    <SpecialDiv>
        <Header textAlign="center">
          <SectionHead>
            Dictionary
          </SectionHead>
        </Header>
        <ContentStyle>
          Search our on-line dictionary for common words, a specific word you are interested in learning, or review an entire category of words. Click the Alutiiq word to see a flashcard with an image and audio clip.
        </ContentStyle>
      </SpecialDiv>
    </div>
    )
  }

}

export default Dictionary

// needs to be a class becuase I would there to be a dictionary that is live searching. 