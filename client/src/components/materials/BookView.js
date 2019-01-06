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
} from '../styles/CommonStyles'

class BookView extends Component {
  render() {
    return(
      <SpecialDiv>
        <WordStyle>
          {this.props.book.book_title_alutiiq}
        </WordStyle>
      <Divider />

        <Grid columns={2} stackable>
          <Grid.Row>
            {this.props.book.image ?
              <Grid.Column width={3} textAlign='center'>
                <Image src={this.props.book.image} size='small' circular bordered />
              </Grid.Column>
              :
              null
            }
            <Grid.Column width={13}>
              <ContentStyle>
                {this.props.book.book_title_english}
              </ContentStyle>
             { this.props.book.creator != null ?
              <ContentStyle>
                Creator: {this.props.book.creator}
              </ContentStyle>
              : 
              null
              } 
              <ContentStyle>
                {this.props.book.description}
              </ContentStyle>    
            { this.props.book.book_type === 'Qbook' ?
            <ContentStyle>
              This book is available for through the App Store for iPhones and iPads and available through the Google Play store for Android devices. 
            </ContentStyle>
            : 
            <ContentStyle>
              {this.props.book.book_type}
            </ContentStyle>
            }
            <Divider hidden />
            { this.props.book.file ?
              <IconLinkGrey href={this.props.book.file} target='_blank'>
                <IconHover name='cloud download' />
              </IconLinkGrey>
              :
              null
            }
            <Divider hidden />
              <Button type='button' onClick={this.props.view}>
                Close
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </SpecialDiv>
    )
  }
}

export default BookView