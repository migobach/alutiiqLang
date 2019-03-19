import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
  Button,
  Header,
  Card,
  Icon,
  Grid,
} from 'semantic-ui-react'
import {
  SpecialDiv,
  CardHeader,
  SectionHead,
  ContentStyle,
  ContainerPad,
} from './styles/CommonStyles'
import Upload from './admin/Upload'
import AddFile from './admin/AddFile'

class AdminMenu extends Component {
  state = { adminView: false }

  render() {
    return(
      <div>
        <SpecialDiv>
          <Header textAlign='center'>
            <SectionHead>
              Admin Console
            </SectionHead>
          </Header>

          <ContainerPad>
            <Card.Group itemsPerRow={3} stackable centered doubling>
              <Card>
                <Card.Content header textAlign='center'>
                  <CardHeader>
                    Upload
                  </CardHeader>
                </Card.Content>
                <Card.Content>
                  <SpecialDiv>
                    <ContentStyle>
                      Upload CSV files for the books, curriculum, dictionary, articles, games, materials, posters, or songs databases. Ensure that the formate of these databases is not altered in any way! 
                    </ContentStyle>
                  </SpecialDiv>
                </Card.Content>
                <Link to={`/upload`}>
                  <Button color='yellow' size='small' fluid>
                    Go 
                  </Button>
                </Link>
              </Card>

              <Card>
                <Card.Content header textAlign='center'>
                  <CardHeader>
                    Register
                  </CardHeader>
                </Card.Content>
                <Card.Content>
                  <SpecialDiv>
                    <ContentStyle>
                      Register an admin. Loop in another person to handle content and upload CSV files as the databases grow! 
                    </ContentStyle>
                  </SpecialDiv>
                </Card.Content>
                <Link to={`/register`}>
                  <Button color='yellow' size='small' fluid>
                    Go 
                  </Button>
                </Link>
              </Card>

              <Card>
                <Card.Content header textAlign='center'>
                  <CardHeader>
                    Media
                  </CardHeader>
                </Card.Content>
                <Card.Content>
                  <SpecialDiv>
                    <ContentStyle>
                      I have no idea how this is going to work. But click on the button to get a proof of concept page. 
                    </ContentStyle>
                  </SpecialDiv>
                </Card.Content>
                  <Link to={'/add'}>
                    <Button color='yellow' size='small' fluid>
                      Go 
                    </Button>
                
                  </Link>
              </Card>

              </Card.Group>
            </ContainerPad>
           
        </SpecialDiv>
      </div>
    )
  }
}

export default AdminMenu