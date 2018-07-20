import React from 'react'
import { 
  Header, 
  Image,
  Grid,
 } from 'semantic-ui-react'
import {
  SpecialDiv,
  SectionHead,
  ContentStyle,
  QuotePerson,
  GreenDiv,
  ContentStyleQuote,
} from './styles/CommonStyles'
import Nick from '../images/nickAlokli.jpg'

const Materials = () => (
  <div>
    <SpecialDiv>
      <Header textAlign='center'>
        <SectionHead>
          Learning Materials
        </SectionHead>
      </Header>
      <ContentStyle>
      </ContentStyle>
    </SpecialDiv>

    <GreenDiv>

      <Grid stackable columns={2} verticalAlign='middle'>
       
          <Grid.Column width={4}>
            <Image src={Nick} size='medium' floated='left' verticalAlign='middle' />
          </Grid.Column>
          <Grid.Column width={12}>
            <ContentStyleQuote>
              <i>'"Before I started teaching [Alutiiq] I just went to work everyday. I wasn’t happy because I didn’t do anything else. I thought, ‘Is this it? Is this all I’m going to do?’ Now I’m happy because I teach. It gives me something to look forward to.”'</i> 
            </ContentStyleQuote>
            <QuotePerson>
              <br />-Nick Alokli, Alutiiq Language Master Speaker
            </QuotePerson>
          </Grid.Column>
        
      </Grid>
    </GreenDiv>
   
  </div>
)

export default Materials