import React from 'react';
import { 
  Container, 
  Grid, 
  Image, 
  Item,
} from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  ContentHead,
  SpecialDiv,
  ContentStyle,
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

const Footer = () => (
  <div>
    <div style={{height: 150}}>
    </div>
    <Container>
      <Grid>
      <Grid.Row centered columns={2} divided>
        <Grid.Column>
          <SpecialDiv>
            <ContentHead>
              Contact Us:
            </ContentHead>
            <ContentStyle>
              Native Village of Afognak
              323 Carolyn Street
              Kodiak, Alaska 99615
              907.486.6357
            </ContentStyle>
          </SpecialDiv>
        </Grid.Column>
      
        <Grid.Column>
          <SpecialDiv>
            <ContentHead>
              Who we are: 
            </ContentHead>
            <ContentStyle>
              This website is maintained by the Native Village of Afognak in partnership with the Sun'aq Tribe of Kodiak with the aim of providing a single location to access all things Alutiiq. <i>Nunaniqsarkici!</i>
            </ContentStyle>
          </SpecialDiv>
        </Grid.Column>
      </Grid.Row>

      {/* logos of sponsors */}

      <Grid.Row columns={10} >
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
    </Grid>
    </Container>
  </div>
)

export default Footer