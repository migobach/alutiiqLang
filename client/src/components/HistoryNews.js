import React, { Component } from 'react'
import { Segment, Header, Card, Icon } from 'semantic-ui-react'
import { CardHeader } from './styles/CommonStyles'


class HistoryNews extends Component {
  render() {
    return(
      <Segment padded='very'>
         <Segment textAlign="center">
            <Header as="h2">
              History and News
            </Header>
            <Segment textAlign="center">
              Alutiiq scholars argue that the Alutiiq Renaissance began in 1971. Since then, many projects have focused on various aspects of language revitalization, many people have been involved, and momentum has been building. 
            </Segment>
          </Segment>
          
            <Card.Group itemsPerRow={3} stackable={true}>
              <Card>
                <Card.Content header>
                  <CardHeader>
                    Alutiiq in the News
                  </CardHeader>
                </Card.Content>
                <Card.Content>
                  Each Wednesday, read an article about Alutiiq language history, news and people of interest.  Click here to read from the archive of articles published in the Kodiak Daily Mirror, written by a variety of people involved in the language movement.
                </Card.Content>
                <Card.Content extra>
                  <Icon name='linkify' />
                </Card.Content>
              </Card>

              <Card>
                <Card.Content header>
                  <CardHeader>
                    Alutiiq Worldview
                  </CardHeader>
                </Card.Content>
                <Card.Content>
                  Translating from Indigenous languages to English does not make sense. Translations lead to misunderstandings and oversimplification. Click here to learn how to begin exploring an Alutiiq worldview and discover elders who gracefully share their lifeways. 
                </Card.Content>
                <Card.Content extra>
                  <Icon name='linkify' />
                </Card.Content>
              </Card>

              <Card>
                <Card.Content header>
                  <CardHeader>
                    Language Revitalization
                  </CardHeader>
                </Card.Content>
                <Card.Content>
                  Scholars have explored methods for successful revitalization across the globe. Diving into some of the themes of language revitalizaiton can lead to hours of exploration. Click here to see some techniques and theories that have been drawn from in the effort to revitalize the Alutiiq language. 
                </Card.Content>
                <Card.Content extra>
                  <Icon name='linkify' />
                </Card.Content>
              </Card>
            </Card.Group>

        </Segment>
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