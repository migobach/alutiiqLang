import React, { Component } from 'react'
import {
  Divider,
  Grid,
} from 'semantic-ui-react'
import {
  SpecialDiv,
  ContentStyle,
} from './styles/CommonStyles'

class MaterialsView extends Component {

  render() {
    return(
      <div>
        <SpecialDiv>
          <ContentStyle>
            Proof of Concept
          </ContentStyle>
        </SpecialDiv>
      </div>
    )
  }
}

export default MaterialsView