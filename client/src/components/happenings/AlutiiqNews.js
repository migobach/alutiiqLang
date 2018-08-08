import React from 'react'
import {
  Header,
} from 'semantic-ui-react'
import {
  SpecialDiv,
  SectionHead,
  ContentStyle,
  BodyLink,
} from '../styles/CommonStyles'

const News = () => (
  <div>
    <SpecialDiv>
      <Header textAlign='center'>
        <SectionHead>
          <i>Erinarpet</i> - Our Voices:
          <br/>
          A Weekly Kodiak Daily Mirror column.
        </SectionHead>
      </Header>
      <ContentStyle>
        Each Wednesday, read an article about Alutiiq language history, news and people of interest.  Click on the titles below to read from the archive of articles published in the <BodyLink href='http://www.kodiakdailymirror.com/'>Kodiak Daily Mirror</BodyLink>, written by a variety of people involved in the language movement. If you're interested in writing an article for the column, email <BodyLink href='alisha@nunaworks.com'>Alisha Drabek</BodyLink>.
      </ContentStyle>
    </SpecialDiv>

  </div>
)

export default News