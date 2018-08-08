import React, { Component } from 'react'
import { 
  Button, 
  Header, 
  Card, 
  Icon,
} from 'semantic-ui-react'
import { 
  SpecialDiv,
  CardHeader, 
  SectionHead, 
  ContentStyle, 
  ContainerPad,
  CenterDiv,
} from './styles/CommonStyles'
import Revitalization from './happenings/Revitalization'
import Worldview from './happenings/Worldview'

 const xtrapadding = {
  padding: '50px',
}

class HistoryNews extends Component { 
  state = { revitalizationComp: false, worldviewComp: false }

  toggleRevitalizationComp = () => {
    this.setState({revitalizationComp: !this.state.revitalizationComp, worldviewComp: false})
  }

  toggleWorldviewComp =() => {
    this.setState({worldviewComp: !this.state.worldviewComp, revitalizationComp: false})
  }

  renderingComponents = () => {
  const { revitalizationComp, worldviewComp } = this.state
  if ( revitalizationComp === true) {
    return <Revitalization />
  } else if ( worldviewComp === true) {
    return <Worldview />
  } else
    return <SpecialDiv />
  }

  render() {
    return(
      <div>
        <SpecialDiv>
          <Header textAlign="center">
            <SectionHead>
              History and News
            </SectionHead>
          </Header>
          <ContentStyle>
            Alutiiq scholars argue that the Alutiiq Renaissance began in 1971. Since then, many projects have focused on various aspects of language revitalization, many people have been, and continue to be involved. Discover ways for you to be involved! 
            <br />
            <br />
            Check out some of our social media channels to finds ways to stay connected with the language movement, or to learn more about how you can become involved. 
            <br />
            <br />
            <CenterDiv style={xtrapadding}>
              <a href='https://www.facebook.com/alutiiqlanguage/'>
                <Button color='facebook' size='massive'>
                  <Icon name='facebook' /> Facebook
                </Button>
              </a>
              <a href='https://www.instagram.com/alutiiqlearners/?hl=en'>
                <Button color='instagram' size='massive'>
                  <Icon name='instagram' /> Instagram
                </Button>
              </a>
            </CenterDiv>
          </ContentStyle>
        </SpecialDiv>
          
          
          <ContainerPad>
            <Card.Group itemsPerRow={3} stackable={true}>
              <Card>
                <Card.Content header textAlign='center'>
                  <CardHeader>
                    Alutiiq in the News
                  </CardHeader>
                </Card.Content>
                <Card.Content>
                  <SpecialDiv>
                    <ContentStyle>
                      Each Wednesday, read an article about Alutiiq language history, news and people of interest.  Click here to read from the archive of articles published in the Kodiak Daily Mirror, written by a variety of people involved in the language movement.
                    </ContentStyle>
                  </SpecialDiv>
                </Card.Content>
                  <Button color='yellow' size='big' fluid>
                    Go 
                  </Button>
              </Card>

              <Card>
                <Card.Content header textAlign='center'>
                  <CardHeader>
                    Alutiiq Worldview
                  </CardHeader>
                </Card.Content>
                <Card.Content>
                  <SpecialDiv>
                    <ContentStyle>
                      Translating from Indigenous languages to English does not make sense. Translations lead to misunderstandings and oversimplification. Click here to learn how to begin exploring an Alutiiq worldview and discover elders who gracefully share their lifeways. 
                    </ContentStyle>
                  </SpecialDiv>
                </Card.Content>
                  <Button color='yellow' size='big' fluid onClick={this.toggleWorldviewComp}>
                    Explore
                  </Button>
              </Card>

              <Card>
                <Card.Content header textAlign='center'>
                  <CardHeader>
                    Language Revitalization
                  </CardHeader>
                </Card.Content>
                <Card.Content>
                  <SpecialDiv>
                    <ContentStyle>
                      Scholars have explored methods for successful revitalization across the globe. Diving into some of the themes of language revitalizaiton can lead to hours of exploration. Click here to see some techniques and theories that have been drawn from in the effort to revitalize the Alutiiq language. 
                    </ContentStyle>
                  </SpecialDiv>
                </Card.Content>
                <Button color='yellow' size='big' fluid onClick={this.toggleRevitalizationComp}>
                  Go
                </Button>
              </Card>
            </Card.Group>
          </ContainerPad>

          { this.renderingComponents() }
          
      </div>
    )
  }
}

export default HistoryNews
