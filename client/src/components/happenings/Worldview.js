import React from 'react'
import {
  Header,
  Divider,
  Grid,
  Image,
} from 'semantic-ui-react'
import {
  SpecialDiv,
  SectionHead,
  ContentStyle, 
  BlueDiv,
  ContentStyleQuote,
  QuotePerson,
  GreenHead,
  BodyLink,
} from '../styles/CommonStyles'
import Games from '../../images/games.jpg'
import Values from '../../images/LlamSuaValues.jpg'

const Worldview = () => (
  <div>
    <SpecialDiv>
      <Header textAlign='center'>
        <SectionHead>
          Alutiiq Core Values & Cultural Knowledge
        </SectionHead>
      </Header>
    </SpecialDiv>

    {/* highlighted quote */}

    <BlueDiv>
      <Grid stackable columns={2} verticalAlign='middle'>
        <Grid.Column width={10}>
          <Image src={Games} size='massive' floated='left' verticalAlign='middle' />
        </Grid.Column>
        <Grid.Column width={5}>
          <ContentStyleQuote>
            <i>"Language is a vehicle of culture"</i>
          </ContentStyleQuote>
          <QuotePerson>
            <br />=Phyllis Fast, Koyukon Athabaskca Professor of Anthropology
          </QuotePerson>
        </Grid.Column>
      </Grid>
    </BlueDiv>

    {/* content and subsections */}
    <SpecialDiv>
      <Grid stackable columns = {3}>
        <Grid.Column width={5}>
          <GreenHead>
            Elders & Culture Bearers
            <Divider />
          </GreenHead>
            <ContentStyle>
              Our Elders have dedicated many years to teaching, recording, and sharing the language in order to preserve and revitalize the language, making it accessible to anyone who wants to learn. We greatly appreciate them and their dedication despite enduring many hardships associated with their language throughout history. Their efforst have established a strong foundation for language revitalization. 
              <br />
              <br />
              Learn about some of the elders who have played critical roles in revitalizing our language. <BodyLink href='https://alutiiqmuseum.mukurtu.net/collection/alutiiq-language-speakers'>Click here to see biographies</BodyLink> on some elders and culture bearers produced by the Alutiiq Museum.
              <br />
              <br />
              Most importantly, thank you to Nick Alokli, Sally Carlough, Kathryn Chichenoff, Clyda Christiansen, Fred and Irene Coyle, Mary Haakanson, Dennis and Julie Knagin, Nadia Mullan, Patrick Mullan, Julia Naughton, Florence Pestrikoff, John "J.P." Pestrikoff, Phyllis Peterson, and Sophie Shepherd.
            </ContentStyle>
        </Grid.Column>

        <Grid.Column width={5}>
        <SpecialDiv>
          <Image src={Values} size='big' verticalAlign='middle' textAlign='center' />
        </SpecialDiv>
        </Grid.Column>

        <Grid.Column width={5}>
          <GreenHead>
            Alutiiq Core Values
            <Divider />
          </GreenHead>
            <ContentStyle>
              In 2002 with coordination by Alutiiq Educator Teresa Schneider, Alutiiq Elders produced an Alutiiq Values poster, publishing fourteen core value statements that show how our traditional practices and our worldview today are part of a continuous knowledge stream and should provide the framework for Alutiiq education. Alutiiq Educator Alisha Drabek has organized these core values within an <BodyLink href='http://www.alutiiqlanguage.org/files/lessons/Teacher%20Tools/Llam%20Sua%20Model.eps'>Alutiiq Values Model for Community Wellbeing</BodyLink> surrounding the central iconic image of Llam Sua (the Universe's Spirit).
            </ContentStyle>
        </Grid.Column>
        
      </Grid>
    </SpecialDiv>
  </div>
)

export default Worldview