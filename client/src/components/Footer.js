import React from 'react';
import { Container, Grid, Image, Item } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  SubSectionHead,
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
          <Item>
            <Item.Content header='Contact Us'>
            <Item.Meta>
              Native Village of Afognak
              323 Carolyn Street
              Kodiak, Alaska 99615
            </Item.Meta>
            </Item.Content>
          </Item>
          {/* <SpecialDiv>
            <SubSectionHead>
              Contact Us:
            </SubSectionHead>
            <ContentStyle>
              Native Village of Afognak
              <Divider hidden />
              323 Carolyn Street
              Kodiak, Alaska 99615
              <Divider hidden />

              907.486.6357
            </ContentStyle>
          </SpecialDiv> */}
        </Grid.Column>
        <Grid.Column>
          Who we are: 
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