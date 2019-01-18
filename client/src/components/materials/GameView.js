import React, { Component } from 'react'
import {
  Divider,
  Image,
  Grid,
  Button,
} from 'semantic-ui-react'
import {
  SpecialDiv,
  ContentStyle,
  WordStyle,
  IconHover,
  IconLinkGrey,
  BodyLink,
} from '../styles/CommonStyles'

class GameView extends Component {
  render() {
    return(
      <SpecialDiv>
        <WordStyle>
          Proof of Concept
        </WordStyle>
      </SpecialDiv>
    )
  }
}

export default GameView