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
              This book is available for through the <BodyLink href='https://itunes.apple.com/us/developer/native-village-of-afognak/id571827052' target='_blank'>App Store</BodyLink> for iPhones and iPads and available through the <BodyLink href='https://play.google.com/store/search?q=native%20village%20of%20afognak&c=apps' target='_blank'>Google Play</BodyLink> store for Android devices. 
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