import React, { Component, Fragment } from 'react'
// import axios from 'axios'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getMaterials } from '../reducers/materials'
// import InfiniteScroll from 'react-infinite-scroller'
import { 
  Header, 
  Image,
  Grid,
  Card,
  Button,
  Icon,
  Loader,
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
  Div,
} from './styles/CommonStyles'
import Alisha from '../images/alisha.jpg'

class Materials extends Component {
  state = { compMaterials: [], page: 1, total_pages: 0 }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(getMaterials())
  }

  componentDidUpdate(prevProps) {
    if(prevProps !== this.props)
      this.setState({ compMaterials: this.props.materials })
  }

  // loadMore = () => {
  //   const page = this.state.page + 1
  //   axios.get(`/api/materials?page=${page}`)
  //     .then( ({ data }) => {
  //       this.setState(state => {
  //         return{ dictionaryWords: [...state.compMaterials, ...data.materials], page: state.page + 1 }
  //       })
  //     })
  // }
  
  materials = () => {
    const { compMaterials } = this.state
    return compMaterials.map( material => 
      <Grid.Row key={material.id}>
        <Grid.Column width={6} verticalAlign='middle'>
          <ContentStyle>
            <i>{material.resource_title}</i>
          </ContentStyle>
        </Grid.Column>
        <Grid.Column width={6} verticalAlign='middle'>
          <ContentStyle>
            {material.subjects}
          </ContentStyle>
        </Grid.Column>
        <Grid.Column width={4} textAlign='center' verticalAlign='middle'>
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
    const { total_pages, page } = this.state
    return(
    <Fragment>
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
                <Link to={`/links`}>
                  <Button color='yellow' size='big' fluid>
                    Go 
                  </Button>
                </Link>
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

            <Card>
              <Card.Content header textAlign='center'>
                <CardHeader>
                  Flashcards
                </CardHeader>
              </Card.Content>
              <Card.Content>
                <SpecialDiv>
                  <ContentStyle>
                    Download the Quizlet app for your iPhone or Android device, and study vocabulary words whenever you have a chance! Click on the link below to see some of the flashcards used in the Kodiak High School Alutiiq Lanugage class to get started. 
                  </ContentStyle>
                </SpecialDiv>
              </Card.Content>
              <a href='https://quizlet.com/cbranson01'>
                <Button color='yellow' size='big' fluid>
                  Go 
                </Button>
              </a>
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
       {/* <InfiniteScroll
         pageStart={page}
         loadMore={this.loadMore}
         hasMore={ page < total_pages }
         loader={<Loader />}
         useWindow={false}
       > */}

        <Grid celled='internally'>
          <Grid.Row>
            <Grid.Column width={6} verticalAlign='middle'>
              <ColumnHead>
                Title
              </ColumnHead>
            </Grid.Column>
            <Grid.Column width={6} verticalAlign='middle'>
              <ColumnHead>
                Subject
              </ColumnHead>
            </Grid.Column>
            <Grid.Column width={4} textAlign='center' verticalAlign='middle'>
              <ColumnHead>
                View
              </ColumnHead>
            </Grid.Column>
          </Grid.Row>

            { this.materials() }

        </Grid>
        {/* </InfiniteScroll> */}
      </SpecialDiv>
    </Fragment>
    )
  }
}

 const mapStateToProps = (state) => {
  return { 
    materials: state.materials
  }
} 


export default connect(mapStateToProps)(Materials)