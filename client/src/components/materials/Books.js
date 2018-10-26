import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getBooks } from '../../reducers/materials'
import {
  Header,
} from 'semantic-ui-react'
import {
  SpecialDiv,
  SectionHead,
  BlueDiv,
  ContentStyle,
} from '../styles/CommonStyles'

class Books extends Component {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(getBooks())
  }


  render() {
    return(
      <div>
        <BlueDiv>
          <Header textAlign='center'>
            <SectionHead>
              <i>Naaqisutet</i>: Books
            </SectionHead>
          </Header>
        </BlueDiv> 

        <SpecialDiv>
          <ContentStyle>
            Native Village of Afognak along with the Alutiiq Museum and Archaeological Repository have partnered with KIWA Media to create storybooks that read to you, spell for you, and allow you to be immersed in an Alutiiq storyetelling experience
            <br />
            <br />
            Free to download on both iOS and Android devices, all you need to do is search "Alutiiq" or "Native Village of Afoganak" wherever you get your apps to find the titles
            <br />
            <br />
            Titles are also available as PDFs below. With the PDF versions, you can print them out in black and white and use them as coloring books, or read them to a loved one. Practice with the application to master pronunciation, and then share the story with your own voice.
          </ContentStyle>
        </SpecialDiv>

      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    books: state.book
  }
}

export default connect(mapStateToProps) (Books)
