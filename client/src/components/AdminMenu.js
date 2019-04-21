import React, { Component } from 'react'
import {
  Button,
  Header,
  Card,
} from 'semantic-ui-react'
import {
  SpecialDiv,
  CardHeader,
  SectionHead,
  ContentStyle,
  ContainerPad,
} from './styles/CommonStyles'
import Upload from './admin/Upload'
import Register from './Register'
// import AddFile from './admin/AddFile'
import DownloadCSV from './admin/DownloadCSV'

class AdminMenu extends Component {
  state = { 
    adminViewCSV: false,
    registerView: false,
    addMediaView: false, 
    downloadView: false
  }

  toggleViewCSVAdmin = () => {
    this.setState({ adminViewCSV: !this.state.adminViewCSV })
  }

  toggleViewRegister = () => {
    this.setState({ registerView: !this.state.registerView })
  }

  toggleViewAddMedia = () => {
    this.setState({ addMediaView: !this.state.addMediaView })
  }

  toggleViewDownload = () => {
    this.setState({ downloadView: !this.state.downloadView })
  }

  renderConditionalView = () => {
    if (this.state.adminViewCSV === true) {
      return <Upload view={this.toggleViewCSVAdmin} />
    } else if (this.state.registerView === true) {
      return <Register view={this.toggleViewRegister} />
    // } else if (this.state.addMediaView === true) {
    //   return <AddFile view={this.toggleViewAddMedia} />
    } else if (this.state.downloadView === true) {
      return <DownloadCSV view={this.toggleViewDownload} />
    }else 
    return
  }

  render() {
    return(
      <div>
        <SpecialDiv>
          <Header textAlign='center'>
            <SectionHead>
              Admin Console
            </SectionHead>
          </Header>

          <SpecialDiv>
            { this.renderConditionalView() }
          </SpecialDiv>

          <ContainerPad>
            <Card.Group itemsPerRow={3} stackable centered doubling>
              <Card>
                <Card.Content header textAlign='center'>
                  <CardHeader>
                    Upload CSV
                  </CardHeader>
                </Card.Content>
                <Card.Content>
                  <SpecialDiv>
                    <ContentStyle>
                      Upload CSV files for the books, curriculum, dictionary, articles, games, materials, posters, or songs databases. Ensure that the formate of these databases is not altered in any way! 
                    </ContentStyle>
                  </SpecialDiv>
                </Card.Content>
                  <Button color='yellow' size='small' fluid onClick={ () => this.toggleViewCSVAdmin() }>
                    Go 
                  </Button>
              </Card>

              <Card>
                <Card.Content header textAlign='center'>
                  <CardHeader>
                    Download CSV
                  </CardHeader>
                </Card.Content>
                <Card.Content>
                  <SpecialDiv>
                    <ContentStyle>
                      Download CSV files for the books, curriculum, dictionary, articles, games, materials, posters, or songs databases. Ensure that the formate of these databases is not altered in any way! 
                    </ContentStyle>
                  </SpecialDiv>
                </Card.Content>
                  <Button color='yellow' size='small' fluid onClick={ () => this.toggleViewDownload() }>
                    Go 
                  </Button>
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
                  <Button color='yellow' size='small' fluid onClick={ () => this.toggleViewRegister() }>
                    Go 
                  </Button>
              </Card>

              {/* <Card>
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
                    <Button color='yellow' size='small' fluid onClick={ () => this.toggleViewAddMedia() }>
                      Go 
                    </Button>
              </Card> */}

              </Card.Group>
            </ContainerPad>
           
        </SpecialDiv>
      </div>
    )
  }
}

export default AdminMenu