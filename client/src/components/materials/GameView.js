import React, {Fragment, Component } from 'react'
import {
  Divider,
  Icon,
  Grid,
  Button,
} from 'semantic-ui-react'
import {
  SpecialDiv,
  ContentStyle,
  WordStyle,
  SongStyle,
  IconHover,
  IconLinkGrey,
  Pointer,
} from '../styles/CommonStyles'

class GameView extends Component {
 

  selectedGames = () => {
    return( this.props.game.map(g =>
      <Grid.Row>
        <Grid.Column width={8}>
          <SongStyle>
            {g.game_name_english}
          </SongStyle>
        </Grid.Column>
        <Grid.Column width={4}>
          <SongStyle>
            {g.creator}
          </SongStyle>
        </Grid.Column>
        <Grid.Column width={4} verticalAlign='middle' textAlign='center'>
          <Pointer>
            <a href={g.link_to_item} target='_blank'>
            <Icon name='info' size='large' color='grey'/>
            </a>
          </Pointer>
        </Grid.Column>
      </Grid.Row>      
      )
    )    
  }

  render() {
    return(
      <Fragment>
        <SpecialDiv>
          <WordStyle>
            <i>{this.props.game[0].game_name_alutiiq}</i> Resources:
          </WordStyle>
          <Divider />
          <ContentStyle>
            {this.props.game[0].game_group} Resources
          </ContentStyle>
        </SpecialDiv>

      {        
        this.props.game.length >= 2 ?
        <SpecialDiv>
          <Grid celled='internally' columns={3} container>
            { this.selectedGames() }
          </Grid>
        </SpecialDiv>
        :
        <SpecialDiv>
          <Grid celled='internally' columns={3} container>
            <Grid.Column width={8}>
              <SongStyle>
                {this.props.game[0].game_name_english}
              </SongStyle>
            </Grid.Column>
            <Grid.Column width={4}>
              <SongStyle>
                {this.props.game[0].creator}
              </SongStyle>
            </Grid.Column>
            <Grid.Column width={4} verticalAlign='middle' textAlign='center'>
              <Pointer>
                <a href={this.props.game[0].link_to_item} target='_blank'>
                <Icon name='info' size='large' color='grey'/>
                </a>
              </Pointer>      
            </Grid.Column>
          </Grid>
        </SpecialDiv>
      }
      </Fragment>
    )
  }
}

export default GameView