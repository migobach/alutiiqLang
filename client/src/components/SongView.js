import React, {Component, Fragment} from 'react'
import ReactPlayer from 'react-player'
import {
  Divider,
  Grid,
} from 'semantic-ui-react'
import {
  SpecialDiv,
  SongHead,
  ContentStyle,
  IconHover,
  IconLinkGrey,
} from './styles/CommonStyles'


const paddingStyle = { 
  paddingTop: '2em',
}

const iconPad = {
  paddingTop: '2.5em',
}

class SongView extends Component {
  // using state so that I can use the same form to update the site via admin permissions
  state = {}

  componentDidMount() {
    if (this.props.song)
    this.setState({...this.props.song})
  }

  linesToParagraph(...lines) {
    return lines
      .map(line => typeof line === 'string' ?
      line.split("\r\n").map(text => <p>{text}</p>) 
      : 
      line).reduce((lines, line) => lines.concat(line), [])
  }

  render() {
    return(
      <Fragment>
        <SpecialDiv>
          <SongHead>
            <i>{this.props.song.title_alutiiq}</i>
          </SongHead>
          <Divider />

          <ContentStyle>
            {this.props.song.title_english}
          </ContentStyle>
        
        {/* shared by ternary  */}
        {this.props.song.credit ?
          <ContentStyle>
            Shared by: {this.props.song.credit}
          </ContentStyle>
          :
          null
        }

        {/* Audio ternary  */}

          {this.props.song.audio ?
            <ReactPlayer 
              url={this.props.song.audio}
              // playing='false'
              controls='true'
              height='5em'
              width='20em'
              loop='false'
            />
            :
            null
          }

          {/* Video ternary */}
          <Grid>
            <Grid.Row only='computer tablet'>
              {this.props.song.video ?
                <div style={paddingStyle}>
                <ReactPlayer 
                  url={this.props.song.video}
                  // playing='false'
                  controls='true'
                  height='17em'
                  width='30em'
                  
                />
                </div>
                :
                null  
              }
            </Grid.Row>
            <Grid.Row only='mobile'>
              <Divider hidden />
            </Grid.Row>
          </Grid>

          {/* English and Alutiiq script */}

          {this.props.song.script_alutiiq_words || this.props.song.script_english_words ?
          <div style={iconPad}>
            <Grid>
            <Grid.Row>
              <Grid.Column width={8}>
                <ContentStyle>
                  {this.linesToParagraph(this.props.song.script_alutiiq_words)}
                </ContentStyle>
              </Grid.Column>
              <Grid.Column width={8}>
                <ContentStyle>
                  {this.linesToParagraph(this.props.song.script_english_words)}
                </ContentStyle>
              </Grid.Column>
            </Grid.Row>
            </Grid>
          </div>
          :
          null
          }

          {/* Script ternary */}

          {this.props.song.script ?
          <div style={iconPad}>
            <Divider />
            <ContentStyle>
              Download song script
            </ContentStyle>
            <br />
            <IconLinkGrey href={this.props.song.script} style={iconPad}>
              <IconHover name='cloud download' />
            </IconLinkGrey>
          </div>
          :
          null
          }

          {/* Notes ternary */}
          
          {this.props.song.notes ?
          <div>
            <br />
          <Divider />
            <ContentStyle>
              Song information: {this.props.song.notes}
            </ContentStyle>
          </div>
            :
            <SpecialDiv />
          }
           
        </SpecialDiv>
      </Fragment>
    )
  }



  //https://vimeo.com/108160097 intsead of http://player.vimeo.com/video/108160097 .  
}

export default SongView