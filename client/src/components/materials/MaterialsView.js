import React, { Component } from 'react'
import {
  Divider,
  Grid,
  Button,
} from 'semantic-ui-react'
import {
  SpecialDiv,
  SpecialDivCenter,
  ContentStyle,
  WordStyle,
  IconLinkGrey,
  IconHover,
} from '../styles/CommonStyles'

class MaterialsView extends Component {

  handleAuthorYear = () => {
    if (this.props.material.author === "" && this.props.material.year === 0) {
      return 
    } else if (this.props.material.author !== "" && this.props.material.year === 0) {
      return(
        <ContentStyle>
          {this.props.material.author}
        </ContentStyle>
      )
    } else if (this.props.material.year !== 0 && this.props.material.author === "") {
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
      if (this.props.material.notes === "") {
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
      if (this.props.material.grade === "" && this.props.material.standards === "") {
        return
      } else if (this.props.material.grade && this.props.material.standards === "") {
        return(
          <ContentStyle>
            <i>This resource was designed for grades {this.props.material.grade}</i>
          </ContentStyle>
        )
      } else if (this.props.material.standards && this.props.material.grade === "") {
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
      if (this.props.material.sponsors === "") {
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
      if (this.props.material.values === "") {
        return
      } else {
        return(
          <ContentStyle>
            Traditional values: <i>{this.props.material.values}</i>
          </ContentStyle>
        )
      }
    }

    //TODO: I THINK THE CONDITION IS WRONG, IT NEED TO EVALUATE AGAINST UNDEFINED OR NULL, NOT EMPTY STRING

    handleUrl = () => { 
      if (this.props.material.url !== "" && this.props.material.file_url !== "") {
        return(
        <div>
          <IconLinkGrey href={this.props.material.url} target='_blank'>
            <IconHover name='linkify'/>
          </IconLinkGrey>
        <Divider hidden />
          <IconLinkGrey href={this.props.material.file_url} target='_blank'>
            <IconHover name='cloud download' />
          </IconLinkGrey>
        </div>
        )
      } else if (this.props.material.url !== "" && this.props.material.file_url === "") {
        return(
          <IconLinkGrey href={this.props.material.url} target='_blank'>
            <IconHover name='linkify'/>
          </IconLinkGrey>
        )
      } else if (this.props.material.url === "" && this.props.material.file_url !== "") {
        return(
          <IconLinkGrey href={this.props.material.file_url} target='_blank'>
            <IconHover name='cloud download' />
          </IconLinkGrey>
        )
      } else {
        return
      }
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

      {/* RENDERING INFORMATION FOR THE COMPUTER AND TABLET ONLY  */}

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
              {this.handleUrl()}
            </Grid.Column>
          </Grid.Row>

      {/* RENDERING INFORMATION FOR MOBILE USERS ONLY */}

        <Grid.Row only='mobile'>
          <Grid.Column>
              {this.handleAuthorYear()}

              {this.handleNotes()}

              {this.handleGrade()}

              {this.handleSponsor()}

              {this.handleValues()}

            <Divider />
              <SpecialDivCenter>
                {this.handleUrl()}
              </SpecialDivCenter>

              <Button type='button' onClick={this.props.view}>
                Close
              </Button>
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
