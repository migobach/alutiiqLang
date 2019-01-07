import React from 'react';
import { 
  Container, 
  Grid, 
  Image, 
} from 'semantic-ui-react';
import {
  ContentHead,
  SpecialDiv,
  ContentStyle,
  ContainerPad,
  FootLink,
  GreenDiv,
} from './styles/CommonStyles'
import AKHF from '../logos/AKHF.jpg'
import ANA from '../logos/ANAlogo.png'
import ANC from '../logos/ANC.jpg'
import AM from '../logos/AM.png'
import KEF from '../logos/KEFlogo.jpg'
import KMXT from '../logos/kmxt.png'
import Koniag from '../logos/koniagLogo.png'
import NPS from '../logos/NPSlogo.png'
import NVA from '../logos/NVA.jpg'
import Sunaq from '../logos/Sunaq.png'
import Dancers from '../logos/DancerLogo.jpg'
import Niuwawik from '../logos/LanguageNestLogo.jpg'
import KOC from '../logos/KOCLogo.png'

const Footer = () => (
  <div>
  <ContainerPad padded="very">
    <Container padded="very">
      <Grid stackable>
      <Grid.Row centered columns={2} divided>
        <Grid.Column textAlign='center'>
          <SpecialDiv>
            <ContentHead>
              Contact Us:
            </ContentHead>
            <ContentStyle>
              <span>
              Native Village of Afognak
              <br />
              323 Carolyn Street
              <br />
              Kodiak, Alaska 99615
              <br />
              907.486.6357
              </span>
            </ContentStyle>
          </SpecialDiv>
        </Grid.Column>
      
        <Grid.Column textAlign='center'>
          <SpecialDiv>
            <ContentHead>
              Who we are: 
            </ContentHead>
            <ContentStyle>
              This website is maintained by the <FootLink href="http://www.afognak.org/">Native Village of Afognak</FootLink> in partnership with the Sun'aq Tribe of Kodiak with the aim of providing a single location to access all things Alutiiq. <i>Nunaniqsarkici!</i>
            </ContentStyle>
          </SpecialDiv>
        </Grid.Column>
      </Grid.Row>

      {/* logos of sponsors */}
    
      <Grid.Row columns={13} only='tablet computer'>
        <Grid.Column>
          <Image src={Niuwawik} size='tiny' />
        </Grid.Column>
        <Grid.Column>
          <Image src={Dancers} size='tiny' />
        </Grid.Column>
        <Grid.Column>
          <Image src={KOC} size='tiny' />
        </Grid.Column>
        <Grid.Column >
          <Image src={AKHF} size='tiny'  />
        </Grid.Column>
        <Grid.Column>
          <Image src={ANA} size='tiny' />
        </Grid.Column>
        <Grid.Column>
          <Image src={ANC} size='tiny' />
        </Grid.Column>
        <Grid.Column>
          <Image src={AM} size='tiny' />
        </Grid.Column>
        <Grid.Column>
          <Image src={KEF} size='tiny' />
        </Grid.Column>
        <Grid.Column>
          <Image src={KMXT} size='tiny' />
        </Grid.Column>
        <Grid.Column>
          <Image src={NPS} size='tiny' />
        </Grid.Column>
        <Grid.Column>
          <Image src={Sunaq} size='tiny' />
        </Grid.Column>
        <Grid.Column>
          <Image src={NVA} size='tiny' />
        </Grid.Column>
        <Grid.Column>
          <Image src={Koniag} size='tiny' />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row columns={1} textAlign='center'>
        <ContentStyle>
          <i>Quyanaasinaq</i> to our generous sponsors
        </ContentStyle>
      </Grid.Row>

    </Grid>
   </Container>
  </ContainerPad>
  
  </div>
)

export default Footer