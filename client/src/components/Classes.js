import React, { Component } from 'react'
import { 
  Header, 
  Grid, 
} from 'semantic-ui-react'
import {
  SpecialDiv,
  SectionHead,
  ContentStyle,
  IconHover,
  CardHeader,
  GreenDiv,
  WhiteTitle,
  ContentStyleWhite,
  GreenHead,
  ColumnHead,
} from './styles/CommonStyles'

class Classes extends Component {

  render() {
    return(
    <div>
      <SpecialDiv>
        <Header textAlign='center'>
          <SectionHead>
            Classes and Gatherings
          </SectionHead>
        </Header>
        <ContentStyle>
          Language is about communication, getting together with one another and sharing stories and time. Find a list of our frequent events below, or click on the link to follow our Facebook page to keep up with the latest events and happenings. Each season brings new events and opportunites to learn Alutiiq, and share time with one another.
        </ContentStyle>
        <ContentStyle>
          Join other Alutiiq language learners and fluent speakers to practice the Alutiiq language at the weekly gatherings listed on the Calendar chart below, drop-ins welcome. Find out how you can get more involved by participating in these events or other learning opportunities listed after this chart.
        </ContentStyle>
        <ContentStyle>
          If you are not in Kodiak, seek out other learners and fluent speakers to start gathering in your community to practice and celebrate the Alutiiq language.
        </ContentStyle>
      </SpecialDiv>

      <Grid>
        <Grid.Row columns={1}>
          <Grid.Column textAlign='center'>
            <SpecialDiv>
              <IconHover name='talk' size='huge' color='grey' />
              <CardHeader>
                <i>Katurlita!</i>
              </CardHeader>
              <ContentStyle>
                Let's get together!
              </ContentStyle>
            </SpecialDiv>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <GreenDiv>

        <Grid celled='internally'>
          <Grid.Row>
            <Grid.Column width={6} textAlign='center' verticalAlign='middle'>
              <WhiteTitle>
                <i>Pekyun</i>  
              </WhiteTitle>
              <ContentStyle>
                Monday
              </ContentStyle>
            </Grid.Column>
            <Grid.Column width={10} textAlign='center'>
              {/* placeholder */}
            </Grid.Column>
          </Grid.Row>
          
          <Grid.Row>
            <Grid.Column width={6} textAlign='center'>
              <WhiteTitle>
                <i>Aipi'in</i>
              </WhiteTitle>
              <ContentStyle>
                Tuesday
              </ContentStyle>
            </Grid.Column>
            <Grid.Column width={10} textAlign='center'>
              {/* placeholder */}
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={6} textAlign='center' verticalAlign='middle'>
              <WhiteTitle>
                <i>Penga'i'in</i>
              </WhiteTitle>
              <ContentStyle>
                Wednesday
              </ContentStyle>
            </Grid.Column>
            <Grid.Column width={10} textAlign='center'>
              <ContentStyleWhite>
                Language Club
                <br />
                <i>Alutiit'stun Niuwawik</i> 
                <br />
                Alutiiq Language Nest, Upstairs from the Alutiiq Museum 
                <br />
                @12:00-1:00 pm
                <br />
                <br />
                Family Language Night
                <br />
                UAF Fisheries Research Building
                <br />
                118 Trident Way, Near Island
                <br />
                @5:00-6:30 pm
              </ContentStyleWhite>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={6} textAlign='center'>
              <WhiteTitle>
                <i>Staami'in</i>
              </WhiteTitle>
              <ContentStyle>
                Thursday
              </ContentStyle>
            </Grid.Column>
            <Grid.Column width={10} textAlign='center'>
              {/* placeholder */}
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={6} textAlign='center' verticalAlign='middle'>
              <WhiteTitle>
                <i>Tallimi'in</i>
              </WhiteTitle>
              <ContentStyle>
                Friday
              </ContentStyle>
            </Grid.Column>
            <Grid.Column width={10} textAlign='center'>
              <ContentStyleWhite>
                Elders Review & Lesson Plan Session
                <br />
                Alutiiq Museum
                <br />
                @11:00-12:15 pm
              </ContentStyleWhite>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={6} textAlign='center'>
              <WhiteTitle>
                <i>Maqineq</i>
              </WhiteTitle>
              <ContentStyle>
                Saturday
              </ContentStyle>
            </Grid.Column>
            <Grid.Column width={10} textAlign='center'>
              {/* placeholder */}
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={6} textAlign='center'>
              <WhiteTitle>
                <i>Agayuneq</i>
              </WhiteTitle>
              <ContentStyle>
                Sunday
              </ContentStyle>
            </Grid.Column>
            <Grid.Column width={10} textAlign='center'>
              {/* placeholder */}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </GreenDiv>

      <SpecialDiv>
        <GreenHead>
          Weekly Gatherings: 
        </GreenHead>

        <ColumnHead>
          Alutiiq Language Club
        </ColumnHead>
        <ContentStyle>
          Wednesdays 12:00-1:00 pm at the <i>Alutiit'stun Niuwawik</i> Alutiiq Language Nest, upstairs from the Alutiiq Museum at 215 Mission Road, Kodiak Alaska.
        </ContentStyle>
        <ContentStyle>
        The Alutiiq Language Club has been meeting since 2003. It is an informal group of learners and Elders who meet every week on Wednesday at noon in the Language Nest in downtown Kodiak.  All levels of learners and speakers are welcome to attend.  To find out more, contact the Alutiiq Museum at (844) 425-8844, or April Laktonen Counceller. All are welcome at Language Club.
        </ContentStyle>
      </SpecialDiv>

    </div>

    )
  }
}

export default Classes
