import React from 'react'
import { 
  Header, 
  Divider,
} from 'semantic-ui-react'
import {
  SpecialDiv,
  SectionHead,
  ContentStyle,
  GreenLink,
  LinkHead,
  BlueDiv,
} from '../styles/CommonStyles'

const OutsideLinks = () => (
  <div>
    <BlueDiv>
      <Header textAlign='center'>
        <SectionHead>
          Links to Outside Resources
        </SectionHead>
      </Header>
    </BlueDiv>

    <SpecialDiv>
      <LinkHead>
        <GreenLink href='https://alutiiqmuseum.org/' target='_blank'>
          The Alutiiq Museum and Archaeological Repository 
        </GreenLink>
        <Divider />
      </LinkHead>
        <ContentStyle>
          215 Mission Road, Kodiak Alaska
          <br />
          <br />
          The Alutiiq Museum and Archaeological Reposity website not only serves as a resource for happenings at the Alutiiq Museum but also shares a wealth of historical, archaeological, and educational resources at the click of a mouse. Click on the link above to visit the Museum's website. 
        </ContentStyle>
        <br />

      <LinkHead>
        <GreenLink href='https://alutiiqeducation.org/' target='_blank'>
          Alutiiq Education
        </GreenLink>
        <Divider />
      </LinkHead>
        <ContentStyle>
          Alutiiq education is designed to serve as a clearinghouse of Kodiak Alutiiq educational resourses. By clicking on the resources tab on the homepage, users are able to search a curriculum database. Click on the link above to begin discovering resources through Alutiiq Education. 
        </ContentStyle>
        <br />

      <LinkHead>
        <GreenLink href='https://letsteachfromstories.weebly.com/' target='_blank'>
          <i>Qulianguanek Litnauwilita</i>
        </GreenLink>
        <Divider />
      </LinkHead>
        <ContentStyle>
          <i>Qulianguanek Litnauwilita</i> is a unit of lessons created by Candace Branson, in collaboration with many Kodiak community members. The unit was developed to teach Alutiiq to youth in a high school setting. Click on the link above for more information about the unit. 
        </ContentStyle>
        <br />

      <LinkHead>
        <GreenLink href='https://alutiiqmuseum.mukurtu.net/' target='_blank'>
          <i>Naken-Natmen</i> Online Language Archive
        </GreenLink>
        <Divider />
      </LinkHead>
        <ContentStyle>
          The online archives is curated and cared for by the Alutiiq Museum and Archaeolgocial Resposity, and aims to bring archival resources out of the collections room, and into the homes and ears of Museum patrons. Click on the link above to begin exploring recordings dating back to the 1950s. <br /><br />Not sure how to search the archive? Click here to watch a short tutorial on using the resource. 
        </ContentStyle>
        <br />

      <LinkHead>
        <GreenLink href='https://vimeo.com/alutiiq' target='_blank'>
          Alutiiq Language Speakers on Vimeo
        </GreenLink>
        <Divider />
      </LinkHead>
        <ContentStyle>
          Alutiiq language speakers on Vimeo page has everything from songs, speaker biographies, short skits, and tutorials on how to use other language resources from other organizations. 
        </ContentStyle>
        <br />

      <LinkHead>
        <GreenLink href='https://vimeo.com/channels/827412' target='_blank'>
          <i>Alutiiq Atuutet:</i> Alutiiq Songs of the Kodiak Archipelago
        </GreenLink>
        <Divider />
      </LinkHead>
        <ContentStyle>
          If you are interested in learning how to sing and dance, this is the Vimeo channel for you. Peter Squartsoff of Port Lions preforms a variety of traditional and modern Alutiiq songs. The videos play similar to a karaoke video, where the words are displayed at the bottom of the screen so the viewer is able to follow along as the song progresses. 
        </ContentStyle>
        <br />

      <LinkHead>
        <GreenLink href='https://www.uaf.edu/anla/' target='_blank'>
          Alaska Native Language Archive
        </GreenLink>
        <Divider />
      </LinkHead>
        <ContentStyle>
          The Alaska Native Language Archive documents all Alaska Native languages to preserve Alaska's unique linguistic heritage for future generations. The collection includes both published and unpublished resources in Alutiiq (Sug'piaq) along with other Alaska Native languages. <br /><br />Not sure how to search the archive? Click here to watch a short tutorial on using the resource. 
        </ContentStyle>
        <br />

        <LinkHead>
        <GreenLink href='https://whereareyourkeys.org/' target='_blank'>
          Where Are Your Keys? 
        </GreenLink>
        <Divider />
      </LinkHead>
        <ContentStyle>
         The WAYK system is a comprehensive method for revitalizing endangered languages and skills. Endangered languages are languages on the precipice, with only a handful of speakers left as a result of colonization, and the impact of modern economic culture. The Alutiiq language revitalization efforts has partnered with WAYK to implement teaching and learning methods to bring Alutiiq back to the community. 
        </ContentStyle>
        <br />


        
        
    </SpecialDiv>
  </div>
)

export default OutsideLinks
