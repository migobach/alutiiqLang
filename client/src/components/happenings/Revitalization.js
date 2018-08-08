import React, { Component } from 'react'
import {
  Header,
  Container, 
  Divider,
  Grid,
  Image,
} from 'semantic-ui-react'
import {
  SpecialDiv,
  SectionHead,
  ContentStyle, 
  BlueDiv,
  GreyTitle,
  ContentStyleQuote,
  QuotePerson,
  IconHover,
  IconLink,
  GreenLink,
  LinkHead,
  BodyLink,
} from '../styles/CommonStyles'
import Stevi from '../../images/Stevi.jpg'

const Revitalization = () => (
  <div>
    <SpecialDiv>
      <Header textAlign='center'>
        <SectionHead>
          Language Revitalization
        </SectionHead>
      </Header>
      <ContentStyle>
        Efforts to revitalize an endangered language are challenging, but there is much we can learn from other groups who are at various stages in their revitalization process.  We have gathered a few resources to assist Alutiiq language learners and teachers in understanding the process and challenges of language revitalization, as well as how to develop and monitor fluency growth as second language learners.
      </ContentStyle>
      </SpecialDiv>

      {/* highlighted quote */}

      <BlueDiv>
        <Header textAlign='center'>
          <GreyTitle>
            Encouragement, Guidance, Insights, and Lessons Learned for Native Language Activists Developing Their Own Tribal language Programs
          </GreyTitle>
        </Header>
        <SpecialDiv>
          <Container textAlign='center'>
            <IconLink href='http://www.alutiiqlanguage.org/files/Articles/encouragementguidanceinsightslessons3-00-1.pdf'>
              <IconHover name='book' />
            </IconLink>
          </Container>
        </SpecialDiv>

        <Grid stackable columns={2} verticalAlign='middle'>
          <Grid.Column width={6}>
            <Image src={Stevi} size='big' floated='left' verticalAlign='middle' />
          </Grid.Column>
          <Grid.Column width = {10}>
            <ContentStyleQuote>
            <i>
              "Keep in mind that the language is the key. There is nothing else. There is no other priority. There are no other issues. There is no reason to defend your motives, your actions, or your vision. You do not defend yourself, your own language fluency, or lack of fluency. You do it. Action is the key. Native children who are actively speaking the language are your only result.
              <br />
              <br />
              So, in developipng a program to revitalize the language: 
              <blockquote>
                <ol>
                  <li>Never ask permission, never beg to save your language</li>
                  <li>Never debate the issues</li>
                  <li>Be very action oriented - just act;</li>
                  <li>Show, don't tell</li>
                  <li>User your language as your curriculum- botany, geography, political science, philosophy, hisotry are all embedded in the langauge."</li>
                </ol>
              </blockquote>
              </i>
            </ContentStyleQuote>
            <QuotePerson>
              <br />-Darrell R. Kipp, Co-Founder of the Piegan Institute of the Blackfeet Nation in conversation with twelve visiting Native American language activists.
            </QuotePerson>
          </Grid.Column>
        </Grid>
      </BlueDiv>

      {/* other links */}
      {/* TODO add in the links as they appear on the current website */}
      <SpecialDiv>
       <LinkHead>
        <GreenLink href='https://www.languagetesting.com/'>
          Fluency Assessments
        </GreenLink>
        <Divider />
      </LinkHead>
        <ContentStyle>
          As an international standard to determine the level of speaking fluency the American Council on the Teaching of Foreign Languages (ACTFL) provides a scale that is useful for both learners and teachers to assess what level of proficiency an individual has attained.  More information on ACTFL is available on their website by clicking above on the ACTFL name. This ACTFL Assessment Levels summary provides an <BodyLink href='http://www.alutiiqlanguage.org/files/lessons/Teacher%20Tools/ACTFL%20Assessment%20Levels.pdf'>overview of fluency levels from Novice to Intermediate to Advanced.</BodyLink>
        </ContentStyle>
        <br />

         <LinkHead>
        <GreenLink href='http://www.alutiiqlanguage.org/files/lessons/Teacher%20Tools/Guidelines%20for%20Strengthening%20Indigenous%20Languages.pdf'>
          Cultural Standards & Guidelines for Strengthening Indigenous Languages
        </GreenLink>
        <Divider />
      </LinkHead>
        <ContentStyle>
          Available on the <BodyLink href='http://www.ankn.uaf.edu/publications/language.html'>Alaska Native Knowledge Network</BodyLink> website as a PDF, this important resource provides a series of guidelines for elders, parents, learners, organizations, educators, schools, education agencies, linguists, and media producers. This guidebook along with the <BodyLink href='http://www.alutiiqlanguage.org/files/lessons/Teacher%20Tools/cultural%20standards.pdf'>Alaska Standards for Culturally Responsive Schools</BodyLink> were developed through a network of Alaska Native educators. The Cultural Standards were adopted by the Alaska Department of Education and <BodyLink href='https://www.kibsd.org/'>Kodiak Island Borough School District</BodyLink> (<BodyLink href='https://www.kibsd.org/domain/115'>found under their posting of World Languages curriculum documents</BodyLink>). There are many articles on the development and importance of these cultural standards found on the <BodyLink href='http://www.ankn.uaf.edu/'>Alaska Native Knowledge Network</BodyLink> website, such as this <BodyLink href='http://www.ankn.uaf.edu/sop/sopv3i4.pdf'>article by Dr. Ray Barnhardt.</BodyLink>
        </ContentStyle>
        <br />
      </SpecialDiv>

  </div>
)

export default Revitalization 