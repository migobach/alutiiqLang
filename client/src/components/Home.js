import React from 'react'
import { Link } from 'react-router-dom'
import {  
  Card,
  Button, 
  Header,
  Divider,
  Container,
} from 'semantic-ui-react'
import { Parallax } from 'react-parallax'
import Banner from '../images/harbor.jpg'
import Teaching from '../images/teaching.jpg'
import { 
  CardHeader,
  ContainerPad,
  SpecialDiv,
  MainHeader,
  MainHeaderContent,
  MainDiv,
  ContentStyle,
  SubHeader,
  SubHeaderContent,
} from './styles/CommonStyles'

const Home = () => (

  

  <div>
    <Parallax
      bgImage={Banner}
      bgImageAlt="St. Paul Harbor, Kodiak, Alaska"
      strength={500}
    >
      <div style={{height: 900}}>
        <MainDiv>
          <MainHeader>
            <i>Liicugtukut Alutiit'stun</i>
            <MainHeaderContent>
              We want to learn Alutiiq
            </MainHeaderContent>
          </MainHeader>
        </MainDiv>
      </div>
    </Parallax>
      
    <ContainerPad>
      <Card.Group itemsPerRow={3} stackable={true}>
        <Card>
          <Card.Content header textAlign='center'>
            <CardHeader>
              Calitaartukut?
            </CardHeader>
          </Card.Content>
          <Card.Content>
            <SpecialDiv>
              <ContentStyle>
                What is happeing, and how do you get involved? Click below to learn more about the history of language revitalization on the Kodiak Archipelago and learn about Alutiiq worldviews.
              </ContentStyle>
            </SpecialDiv>
          </Card.Content>
            <Link to={`/happenings`}>
              <Button color='yellow' size='big' fluid>
                Go 
              </Button>
            </Link>
        </Card>

        <Card>
          <Card.Content header textAlign='center'>
            <CardHeader>
              Dictionary
            </CardHeader>
          </Card.Content>
          <Card.Content>
            <SpecialDiv>
              <ContentStyle>
                Discover new words in the Alutiiq language. Hear words being said by an Alutiiq speaker, and explore how to use words in full sentences.
              </ContentStyle>
            </SpecialDiv>
          </Card.Content>
            <Link to={'/dictionary'}>
              <Button color='yellow' size='big' fluid>
                Go 
              </Button>
            </Link>
        </Card>

        <Card>
          <Card.Content header textAlign='center'>
            <CardHeader>
              Nutasqaat Naaqisuutet
            </CardHeader>
          </Card.Content>
          <Card.Content>
            <SpecialDiv>
              <ContentStyle>
                Now you can have a book read to you by an Alutiiq speaker via a downloadable app on your iPad, iPhone, or Android device. Click below to learn more.
              </ContentStyle>
            </SpecialDiv>
          </Card.Content>
          <Button color='yellow' size='big' fluid>
            Go 
          </Button>
        </Card>

      </Card.Group>
    </ContainerPad>

     <Parallax
      bgImage={Teaching}
      blur={{min: 5, max:3}}
      bgImageAlt="Teaching Alutiiq, Afognak Island, Alaska"
      strength={500}
    >
      <div style={{height: 700}} >
      <Container textAlign='center'>
      <SpecialDiv>
        <SpecialDiv>
          <Header textAlign='center'>
            <SubHeader>
              <i>Alutiit'stun Niuwawik</i> Registration is Open!
            </SubHeader>
              <Divider />
          </Header>
        </SpecialDiv>

          <SubHeaderContent>
            Are you interested in registering your little one in the Alutiiq Language Nest? The Alutiit'stun Niuwawik is now accepting student registrations for the fall of 2018.
            <br />
            <br />
            The <i>Alutiit'stun Niuwawik</i> aims to be a culturally-relevant Kodiak Alutiiq immersion language nest for preschool-aged children with outreach services for all age groups to sustain Alutiiq as a living language.
          </SubHeaderContent>
        </SpecialDiv>
          <Button size='huge' href='http://sunaq.org/tamamta-liitukut/'>
            Learn more
          </Button>
      </Container>
      </div>
    </Parallax>


    {/* <GreenDiv>
      <ContentStyleWhite>

      </ContentStyleWhite>
    </GreenDiv> */}
  </div>

)

export default Home
