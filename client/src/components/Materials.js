import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getMaterials } from '../reducers/materials'
import { 
  Header, 
  Image,
  Grid,
  Card,
  Button,
  Icon,
 } from 'semantic-ui-react'
import {
  SpecialDiv,
  SectionHead,
  ContentStyle,
  QuotePerson,
  GreenDiv,
  ContentStyleQuote,
  ContainerPad,
  CardHeader,
  ColumnHead,
  TransLink,
} from './styles/CommonStyles'
import Alisha from '../images/alisha.jpg'

class Materials extends Component {

  state = { compMaterials: [] }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(getMaterials())
    this.setState({ compMaterials: this.props.materials })
  }

  // handleLink = (finalPart) => {
  //   <a href={"/js/data/statements/".concat(item.file_name)} download>

  // }

  materials = () => {
    return this.props.materials.map( material => 
      <Grid.Row key={material.id}>
        <Grid.Column width={6}>
          <ContentStyle>
            <i>{material.resource_title}</i>
          </ContentStyle>
        </Grid.Column>
        <Grid.Column width={6}>
          <ContentStyle>
            {material.subjects}
          </ContentStyle>
        </Grid.Column>
        <Grid.Column width={4} textAlign='center'>
          {
            material.file_url ? 
            // Need to interpolate: http://alutiiqeducation.org/files/resource_pdf/{material.file_url}
            <a href={"http://alutiiqeducation.org/files/resource_pdf/".concat(material.file_url)}>
              <Icon name='eye' size='large' color='grey' />
            </a>
            : 
            <a href={material.url}>
            <Icon name='linkify' size='large' color='grey' />
            </a>
          }
        </Grid.Column>
      </Grid.Row>
    )
  }

  render() {
    return(
    <div>
      <SpecialDiv>
        <Header textAlign='center'>
          <SectionHead>
            Learning Materials
          </SectionHead>
        </Header>
        <ContentStyle>
          There are many ways to learn the Alutiiq language: learning from a friend or family member, studying resources, or playing games. Most importantly, there are many ways to integrate Alutiiq into your daily life. Everyone who knows a word or phrase has something to share. 
          <br />
          <br />
          There are many resources housed on this page to help get you going with your learning journey. Check out some of the book designed for learners who are just starting out. Hang some of the posters hosted here around your home or office. Share time with family or friends and play one of the simple games available through the links below. Or, listen to stories in Alutiiq in an effort to increase your fluency by modeling someone more proficient than yourself. 
          <br />
          <br />
          Most importantly, use the language that you have. Even if that is just saying <i>Cama'i</i> to your neighbors. 
        </ContentStyle>
      </SpecialDiv>

      {/* Card section  */}

      <ContainerPad>
          <Card.Group itemsPerRow={3} stackable={true} centered>
            <Card>
              <Card.Content header textAlign='center'>
                <CardHeader>
                  Books
                </CardHeader>
              </Card.Content>
              <Card.Content>
                <SpecialDiv>
                  <ContentStyle>
                    Once a learner has heard and practiced new vocabulary, learning to read and do an activity in Alutiiq is a good way to reinforce their language learning. Click on the Naaqisuutet - Books link above to see how to begin expanding your Alutiiq library. 
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
                  Posters
                </CardHeader>
              </Card.Content>
              <Card.Content>
                <SpecialDiv>
                  <ContentStyle>
                    Posters have been created to visually cue learners into speaking Alutiiq. They may be posted around the house, office, or classroom to bring Alutiiq language into your daily routines, or perform basic conversation in Alutiiq, identify foods, colors, emotions, or items visible all around us on a daily basis. 
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
                  Games
                </CardHeader>
              </Card.Content>
              <Card.Content>
                <SpecialDiv>
                  <ContentStyle>
                    Games are fun way to expand language use! By playing <i>Kinam Pi'ki?</i>, <i>Pingua</i>, or <i>Naama Kluucaten?</i> you can learn new words, and play with the words and language you already have. Click on the <i>Wamqutat</i> - Games link below to see how to get started! 
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
                  Links
                </CardHeader>
              </Card.Content>
              <Card.Content>
                <SpecialDiv>
                  <ContentStyle>
                    Other individuals and organizations support language revitalization efforts online. Click on the link to see a list of websites related to Alutiiq language and culture. 
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
                  Stories
                </CardHeader>
              </Card.Content>
              <Card.Content>
                <SpecialDiv>
                  <ContentStyle>
                    Accessing traditional stories in the Alutiiq language can be difficult. Thanks to archives, a few traditional stories can be accessed here. Click on the link above to access recordings and transcripts of traditional stories. 
                  </ContentStyle>
                </SpecialDiv>
              </Card.Content>
              <Button color='yellow' size='big' fluid>
                Go 
              </Button>
            </Card>

          </Card.Group>
        </ContainerPad>

      {/* Featured Quote */}

        <GreenDiv>
          <Grid stackable columns={2} verticalAlign='middle'>
              <Grid.Column width={4}>
                <Image src={Alisha} size='medium' floated='left' verticalAlign='middle' />
              </Grid.Column>
              <Grid.Column width={12}>
                <ContentStyleQuote>
                  <i>"When I visit the grocery store and hear another language being spoken, I try to exchange a word or phrase of what I have learned from their language so that I can show respect for their efforts to maintain their cultural and linguistic identities in shared public spaces so often dominated by English. Likewise when I see former students, or fellow Alutiiq speakers, I offer greetings in Alutiiq so that we too can practice and help keep Alutiiq a living language. Several Elders who have taught me say how much it means to hear learners speaking in public, when as children our Elders were punished physically for speaking Alutiiq"</i>
                </ContentStyleQuote>
                <QuotePerson>
                  <br />-Alisha Drabek PhD, Alutiiq Language Speaker, Learner, Teacher, and Scholar
                </QuotePerson>
              </Grid.Column>
            
          </Grid>
        </GreenDiv>


        {/* database table */}
      
      <SpecialDiv>
        <Grid celled='internally'>
          <Grid.Row>
            <Grid.Column width={6}>
              <ColumnHead>
                Title
              </ColumnHead>
            </Grid.Column>
            <Grid.Column width={6}>
              <ColumnHead>
                Subject
              </ColumnHead>
            </Grid.Column>
            <Grid.Column width={4} textAlign='center'>
              <ColumnHead>
                View
              </ColumnHead>
            </Grid.Column>
          </Grid.Row>

            { this.materials() }

        </Grid>
      </SpecialDiv>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { 
    materials: state.materials
  }
}


export default connect(mapStateToProps)(Materials)