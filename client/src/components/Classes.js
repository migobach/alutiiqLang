import React, { Component } from 'react'
import { 
  Header, 
  Grid, 
  Divider,
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
          <br />
          <br />
          Join other Alutiiq language learners and fluent speakers to practice the Alutiiq language at the weekly gatherings listed on the Calendar chart below, drop-ins welcome. Find out how you can get more involved by participating in these events or other learning opportunities listed after this chart.
          <br />
          <br />
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
          <Divider />
        </GreenHead>
          <ColumnHead>
            Alutiiq Language Club
          </ColumnHead>
            <ContentStyle>
              Wednesday | 12:00-1:00 pm
              <br />
              <i>Alutiit'stun Niuwawik</i>, Alutiiq Language Nest
              <br />
              215 Mission Road, Kodiak Alaska
              <br />
              <br />
              The Alutiiq Language Club has been meeting since 2003. It is an informal group of learners and Elders who meet every week on Wednesday at noon in the Language Nest in downtown Kodiak.  All levels of learners and speakers are welcome to attend.  To find out more, contact the Alutiiq Museum at (844) 425-8844, or April Laktonen Counceller. All are welcome at Language Club.
            </ContentStyle>
          <br />
          <ColumnHead>
            Family Language Night
          </ColumnHead>
            <ContentStyle>
              Wednesday Night | 5:00-6:30 pm
              <br />
              Fishery Industrial Technology center
              <br />
              118 Trident Way, Kodiak Alaska
              <br />
              <br />
              Families gather to make soup and learn Alutiiq language in a fun and interactive envrionment. This gathering is sponsored by a grant from the Administration for Native Americans, and hosted by the Sun'aq Tribe of Kodiak, with support from the University of Alaska Fairbanks.
            </ContentStyle>
          <br />
          <ColumnHead>
            Elders Session
          </ColumnHead>
            <ContentStyle>
              Friday | 11:00 am -12:15 pm
              <br />
              Alutiiq Museum and Archaeological Repository
              <br />
              215 Mission Road, Kodiak Alaska
              <br />
              <br />
              Alutiiq Elders meet each week to review teaching resources, practice lesson content, and edit songs, stories and other instructional resources. All learners and speakers are welcome to sit in on the discussions. Please call the Alutiiq Museum for up to date information at (844) 425-8844.
            </ContentStyle>
      </SpecialDiv>

      <SpecialDiv>
        <GreenHead>
          Other Opportunities: 
          <Divider />
        </GreenHead>
          <ColumnHead>
            <i>Alutiit'stun Niuwawik</i>- A Place to Speak Alutiiq
          </ColumnHead>
            <ContentStyle>
              215 Mission Road, Suite 213, Kodiak Alaska
              <br />
              <br />
              The Alutiiq Language Nest is operated by the Sun'aq Tribe of Kodiak and sponsored by a grant from the Administration for Native Americans. The Language nest operates Tuesday, Wednesday and Thursday 8-12 for kids age 3-5, and is also open to younger kids who are acommpanied by a cargiver. Registration is required. Guests are welcome with prior notice to the teachers. Click here to learn how to register, or for more information, contact Raissa and Jake at 907-512-5995. 
            </ContentStyle>
          <br />
          <ColumnHead>
            Kodiak College Alutiiq Language Courses
          </ColumnHead>
            <ContentStyle>
              <i>Registration Required</i>
              <br />
              <br />
              UAA-Kodiak College is now offering introductory courses in the Alutiiq Language that will lead to a Certificate or AA Degree in Alutiiq Studies. Visit Kodiak College's website to verify schedules and to register for Alutiiq 101, Alutiiq 102, and an Alutiiq Orthography class. You can also call the Alutiiq Studies program at (907) 486-1276 for more information.
            </ContentStyle>
          <br />
          <ColumnHead>
            Afognak After School Program
          </ColumnHead>
            <ContentStyle>
              Native Village of Afognak
              <br />
              (907) 486-6357
              <br />
              323 Carolyn Street, Kodiak Alaska
              <br />
              <br />
              Dig Afognak camp is a cultural education program that is geared toward youth. A central focus of camp is Alutiiq culture, values, and language. Dig Afognak is a place where young people bond through cultural activities and engagement. For more information, contact Nancy Nelson at Native Village of Afognak. If you would like to register, click here.
            </ContentStyle>
          <ColumnHead>
            Kodiak High School Language Class
          </ColumnHead>
            <ContentStyle>
              <i>Registration Required</i>
              <br />
              <br />
              KHS Alutiiq Language classes are a full-year World Language class, also offered for dual credit through the Kodiak College. We offer year-long instruction in Alutiiq I and Alutiiq II for high school students. The classes are taught by Alutiiq Language Instructor, Candace Branson with support from a group of fluent Alutiiq Elders and team of other adult learners. Questions about the Kodiak High School Class or resources shared from the class can be addressed to Candace Branson at (907) 486-4449 or cmbranson@sunaq.org.
            </ContentStyle>
      </SpecialDiv>

       <SpecialDiv>
        <GreenHead>
          Alutiiq Language Meetings: 
          <Divider />
        </GreenHead>
          <ColumnHead>
            <i>Nuta'at Niugnelistet</i>- New Words Council
          </ColumnHead>
            <ContentStyle>
              The Nuta’at Niugnelistet (New Word Makers), also known as the Alutiiq New Words Council (NWC) has monthly or bimonthly since 2007 to develop new modern terms in the Kodiak Alutiiq language. It is made up of fluent Elder and learner participants. To learn more about the NWC, contact the Alutiiq Museum at (844) 425-8844, or email their Executive Director April Laktonen Counceller.
            </ContentStyle>
          <br />
          <ColumnHead>
            <i>Qik'rtarmiut Alutiit</i> Regional Language Advisory Committee
          </ColumnHead>
            <ContentStyle>
              The <i>Qik’rtarmiut Alutiit</i> (Alutiiq People of the Island) Regional Language Advisory Committee (known as the “Qik Committee”) started in 2003, and is a grassroots committee made up of representatives from island-wide tribes and organizations, as well as interested Elders and other individuals. The committee meets every few months to guide projects in the language revitalization movement and inform members of project updates and events. To get on the agenda for the next Qik Committee meeting, or to be signed up to the mailing list for meeting announcements, call the Alutiiq Museum at (844) 425-8844 or e-mail April Laktonen Counceller.
            </ContentStyle>
      </SpecialDiv>

    </div>

    )
  }
}

export default Classes
