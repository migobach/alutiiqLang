import React, { Component } from 'react'
import { 
  Button, 
  Header, 
  Card, 
  Icon 
} from 'semantic-ui-react'
import { 
  SpecialDiv,
  CardHeader, 
  SectionHead, 
  ContentStyle, 
  ContainerPad,
} from './styles/CommonStyles'


class HistoryNews extends Component {
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
            Alutiiq scholars argue that the Alutiiq Renaissance began in 1971. Since then, many projects have focused on various aspects of language revitalization, many people have been involved, and momentum has been building. 
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
                    Each Wednesday, read an article about Alutiiq language history, news and people of interest.  Click here to read from the archive of articles published in the Kodiak Daily Mirror, written by a variety of people involved in the language movement.
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
                    Translating from Indigenous languages to English does not make sense. Translations lead to misunderstandings and oversimplification. Click here to learn how to begin exploring an Alutiiq worldview and discover elders who gracefully share their lifeways. 
                  </SpecialDiv>
                </Card.Content>
                  <Button color='yellow' size='big' fluid>
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
                    Scholars have explored methods for successful revitalization across the globe. Diving into some of the themes of language revitalizaiton can lead to hours of exploration. Click here to see some techniques and theories that have been drawn from in the effort to revitalize the Alutiiq language. 
                  </SpecialDiv>
                </Card.Content>
                <Button color='yellow' size='big' fluid>
                  Go
                </Button>
              </Card>
            </Card.Group>
          </ContainerPad>
      </div>
    )
  }
}

export default HistoryNews

// needs to be a class becuase there is going to be an RSS feed of Facebook.  

{/* <Grid columns={3} relaxed>
    <Grid.Column>
      <Segment basic>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.</Segment>
    </Grid.Column>
    <Divider vertical>Or</Divider>
    <Grid.Column>
      <Segment basic>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.</Segment>
    </Grid.Column>
    <Divider vertical>And</Divider>
    <Grid.Column>
      <Segment basic>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.</Segment>
    </Grid.Column>
  </Grid> */}