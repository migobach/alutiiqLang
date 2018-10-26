import React, { Component } from 'react'
import {
  Divider,
  Grid,
  Button,
} from 'semantic-ui-react'
import {
  SpecialDiv,
  ContentStyle,
  WordStyle,
  IconLinkGrey,
  IconHover,
} from '../styles/CommonStyles'

const iconPad = {
  paddingTop: '5em',
}

class MaterialsView extends Component {

  
  handleAuthorYear = () => {
    if (this.props.material.author === null && this.props.material.year === null) {
      return 
    } else if (this.props.material.author && this.props.material.year === null) {
      return(
        <ContentStyle>
          {this.props.material.author}
        </ContentStyle>
      )
    } else if (this.props.material.year && this.props.material.author === null) {
      return(
        <ContentStyle>
          {this.props.material.year}
        </ContentStyle>
      )
    } else 
    return(
      <ContentStyle>
          {this.props.material.author}  |  {this.props.material.year}
        </ContentStyle>
      )
    }
    
    handleNotes = () => {
      if (this.props.material.notes === null) {
        return
      } else {
        return(
          <ContentStyle>
            {this.props.material.notes}
          </ContentStyle>
        )
      }
    }

    handleGrade = () => {
      if (this.props.material.grade === null && this.props.material.standards === null) {
        return
      } else if (this.props.material.grade && this.props.material.standards === null) {
        return(
          <ContentStyle>
            <i>This resource was designed for grades {this.props.material.grade}</i>
          </ContentStyle>
        )
      } else if (this.props.material.standards && this.props.material.grade === null) {
        return (
          <ContentStyle>
            <i>This resources is designed to meet standards {this.props.material.standards}</i>
          </ContentStyle>
        )
      } else {
        return(
          <ContentStyle>
            <i>This resources was designed for grades {this.props.material.grade} and meets standards {this.props.material.standards}</i>
          </ContentStyle>
        )
      }
    }

    handleSponsor = () => {
      if (this.props.material.sponsor === null) {
        return
      } else {
        return(
          <ContentStyle>
            The development of {this.props.material.resource_title} was made possible through the support of {this.props.material.sponsors}
          </ContentStyle>
        )
      }
    }

    handleValues = () => {
      if (this.props.material.values === null) {
        return
      } else {
        return(
          <ContentStyle>
            Traditional values: <i>{this.props.material.values}</i>
          </ContentStyle>
        )
      }
    }

    handleUrl = () => {
      // this needs to be finalized. Currently the urls are not in one spot- gotta clean the data before I make this useable
    }

    handleButton = (e) => {
      
    }

  render() {
    return(
      <div>
        <SpecialDiv>
          <WordStyle>
            {this.props.material.resource_title}  
          </WordStyle>
        <Divider />

        <Grid>
          <Grid.Row only='computer tablet'>
            <Grid.Column width={14}>
              {this.handleAuthorYear()}

              {this.handleNotes()}

              {this.handleGrade()}

              {this.handleSponsor()}

              {this.handleValues()}

            <Divider hidden />
              <Button type='button' onClick={this.props.view}>
                Close
              </Button>
            </Grid.Column>

            <Grid.Column width={2} verticalAlign='middle'>
              <IconLinkGrey>
                <IconHover name='cloud download' />
              </IconLinkGrey>
            </Grid.Column>
          </Grid.Row>

        </Grid>

        {/* ADD DOWNLOAD RESOURCE BUTTON WITH THE CLOUD LIKE ON THE SONG VIEW */}
        
        <Divider hidden />

        </SpecialDiv>
      </div>
    )
  }
}

export default MaterialsView