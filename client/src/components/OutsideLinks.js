import React, { Component } from 'react'
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
} from './styles/CommonStyles'

const OutsideLinks = () => (
  <div>
    <SpecialDiv>
      <Header textAlign='center'>
        <SectionHead>
          Links to Outside Resources
        </SectionHead>
      </Header>
    </SpecialDiv>

    <SpecialDiv>
      <LinkHead>
        <GreenLink href='https://alutiiqmuseum.org/'>
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
        <GreenLink href='https://alutiiqeducation.org/'>
          Alutiiq Education
        </GreenLink>
        <Divider />
      </LinkHead>
        <ContentStyle>
          Alutiiq education is designed to serve as a clearinghouse of Kodiak Alutiiq educational resourses. By clicking on the resources tab on the homepage, users are able to search a curriculum database. Click on the link above to begin discovering resources through Alutiiq Education. 
        </ContentStyle>
        <br />
        <LinkHead>
        <GreenLink href='https://letsteachfromstories.weebly.com/'>
          <i>Qulianguanek Litnauwilita</i>
        </GreenLink>
        <Divider />
      </LinkHead>
        <ContentStyle>
          <i>Qulianguanek Litnauwilita</i> is a unit of lessons created by Candace Branson, in collaboration with many Kodiak community members. The unit was developed to teach Alutiiq to youth in a high school setting. Click on the link above for more information about the unit. 
        </ContentStyle>
        <br />
        
    </SpecialDiv>
  </div>
)

export default OutsideLinks