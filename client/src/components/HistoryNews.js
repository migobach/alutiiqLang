import React, { Component } from 'react'
import { connect } from 'react-redux'
import { 
  Button, 
  Header, 
  Card, 
  Icon,
  Grid,
  Divider,
} from 'semantic-ui-react'
import { 
  SpecialDiv,
  CardHeader, 
  SectionHead, 
  ContentStyle, 
  ContainerPad,
  ContentStyleWhite,
} from './styles/CommonStyles'
import { Parallax } from 'react-parallax'
import { getEditablesData } from '../reducers/editables'
import ContentEditable from 'react-contenteditable'
import axios from 'axios'
import Revitalization from './happenings/Revitalization'
import Worldview from './happenings/Worldview'
import News from './happenings/AlutiiqNews'
import HistoryAfognak from '../images/AfognakHistory.jpg'

class HistoryNews extends Component { 
  state = { 
    revitalizationComp: false, 
    worldviewComp: false, 
    newsComp: false,
    historyNewsHeader: {},
    historyNewsBody: {}
  }

  componentDidMount = () => {
   const { dispatch } = this.props
   dispatch(getEditablesData())
  }

  toggleRevitalizationComp = () => {
    this.setState({revitalizationComp: !this.state.revitalizationComp, worldviewComp: false, newsComp: false})
  }

  toggleWorldviewComp = () => {
    this.setState({worldviewComp: !this.state.worldviewComp, revitalizationComp: false, newsComp: false})
  }

  toggleNewsComp = () => {
    this.setState({ newsComp: !this.state.newsComp, worldviewComp: false, revitalizationComp: false})
  }

  renderingComponents = () => {
  const { revitalizationComp, worldviewComp, newsComp } = this.state
  if (revitalizationComp === true) {
    return <Revitalization />
  } else if (worldviewComp === true) {
    return <Worldview />
  } else if (newsComp === true) {
    return <News />
  } else
    return <SpecialDiv />
  }

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value })
  }

  handleBlurEditable = () => {
    const updatedHeader = this.state.historyNewsHeader
    const updatedBody = this.state.historyNewsBody

    if (updatedHeader.id) {
      console.log('in header PUT', updatedHeader)
      axios.put(`api/editables/${updatedHeader.id}`, updatedHeader)
    } 
    if (updatedBody.id) {
      console.log('in body PUT', updatedBody)
      axios.put(`api/editables/${updatedBody.id}`, updatedBody)
    }
  }

  handleChangeEditable = evt => {
    console.log('evt: ', evt)
    const elementType = evt._dispatchInstances.type

    if (elementType === 'historyNewsHeader') {
      const prestructuredhistoryNewsHeader = this.props.editables.find(val => val.name === 'historyNewsHeader')
      prestructuredhistoryNewsHeader.textShort = evt.target.value
      this.setState({ historyNewsHeader: prestructuredhistoryNewsHeader})
    }
    if (elementType === 'historyNewsBody') {
      const prestructuredhistoryNewsBody = this.props.editables.find(val => val.name === 'historyNewsBody')
      prestructuredhistoryNewsBody.textLong = evt.target.value
      this.setState({ historyNewsBody: prestructuredhistoryNewsBody})
    }
  }

  render() {
    return(
      <div>
        <Parallax
          bgImage={HistoryAfognak}
          blur={{min: 5, max:1}}
          bgImageAlt="Afognak Village, Afognak, Alaska"
          strength={500}
        >
          <div style={{height: 350}}>
            <SpecialDiv>
              <Header textAlign="center">
                <SectionHead>
                  <ContentEditable
                    html={this.props.editables.length >= 1 ? this.props.editables.find(val => val.name === 'historyNewsHeader').textShort : 'History and News'}
                    disabled={this.props.user.id ? false : true}
                    onChange={this.handleChangeEditable}
                    tagName='historyNewsHeader'
                    onBlur={this.handleBlurEditable}
                  />
                </SectionHead>
                <Divider hidden />
              </Header>
                <ContentStyleWhite>  
                  <ContentEditable
                    html={this.props.editables.length >= 1 ? this.props.editables.find(val => val.name === 'historyNewsBody').textLong : 'Alutiiq scholars argue that the Alutiiq Renaissance began in 1971. Since then, many projects have focused on various aspects of language revitalization, many people have been, and continue to be involved. Discover ways for you to be involved!'}
                    disabled={this.props.user.id ? false : true}
                    onChange={this.handleChangeEditable}
                    tagName='historyNewsBody'
                    onBlur={this.handleBlurEditable}
                  />
                </ContentStyleWhite>
            </SpecialDiv>
          </div>
        </Parallax>

        <SpecialDiv>
            <Grid stackable centered>
              <Grid.Row columns={5}>
                <Grid.Column width={2}/>
                <Grid.Column textAlign='center' width={5}>
                  <a href='https://www.facebook.com/alutiiqlanguage/' rel='noopener noreferrer' target='_blank'>
                  <SpecialDiv>
                    <Button color='facebook' size='huge'>
                      <Icon name='facebook'/> Facebook
                    </Button>
                  </SpecialDiv>
                  </a>
                </Grid.Column>
                <Grid.Column width={1}/>
                <Grid.Column textAlign='center' width={5}>
                  <a href='https://www.instagram.com/alutiiqlearners/?hl=en' rel='noopener noreferrer' target='_blank'>
                  <SpecialDiv>
                    <Button color='instagram' size='huge'>
                      <Icon name='instagram'/> Instagram
                    </Button>
                  </SpecialDiv>
                  </a>
                </Grid.Column>
                <Grid.Column width={2}/>
              </Grid.Row>
            </Grid>
           
        </SpecialDiv>
          
          
          <ContainerPad>
            <Card.Group itemsPerRow={3} stackable={true} doubling>
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
                {this.state.newsComp === false ?
                  <Button color='yellow' size='medium' fluid onClick={this.toggleNewsComp}>
                    Go 
                  </Button>
                  :
                  <Button color='grey' size='medium' fluid onClick={this.toggleNewsComp}>
                    Hide
                </Button>
                }
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
                {this.state.worldviewComp === false ?
                  <Button color='yellow' size='medium' fluid onClick={this.toggleWorldviewComp}>
                    Explore
                  </Button>
                  :
                  <Button color='grey' size='medium' fluid onClick={this.toggleWorldviewComp}>
                    Hide
                  </Button>
                }
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
                {this.state.revitalizationComp === false ?
                  <Button color='yellow' size='medium' fluid onClick={this.toggleRevitalizationComp}>
                    Go
                  </Button>
                  :
                  <Button color='grey' size='medium' fluid onClick={this.toggleRevitalizationComp}>
                    Hide
                  </Button>
                }
              </Card>
            </Card.Group>
          </ContainerPad>

          { this.renderingComponents() }
          
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    editables: state.editables,
    user: state.user
  }
}

export default connect(mapStateToProps)(HistoryNews)
