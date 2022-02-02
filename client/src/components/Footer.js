import React, { Component } from 'react';
import { connect } from 'react-redux'
import { 
  Container, 
  Grid, 
  Image, 
} from 'semantic-ui-react';
import { getEditablesData } from '../reducers/editables';
import axios from 'axios'
import {
  ContentHead,
  SpecialDiv,
  ContentStyle,
  ContainerPad,
  FootLink,
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

class Footer extends Component {
  state = {
    footerLeftHeader: {},
    footerLeftBody: {},
    footerRightHeader: {},
    footerRightBody: {}
  }

  componentDidMount = () => {
    const { dispatch }= this.props 
    dispatch(getEditablesData())
  }
  
  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value })
  }

  handleBlurEditable = () => {
    const updatedFooterLeftHeader = this.state.footerLeftHeader
    const updatedFooterRightHeader = this.state.footerRightHeader
    const updatedFooterRightBody = this.state.footerRightBody
    const updatedFooterLeftBody = this.state.footerLeftBody

    if (updatedFooterLeftHeader.id) {
      console.log('in header PUT', updatedFooterLeftHeader)
      axios.put(`api/editables/${updatedFooterLeftHeader.id}`, updatedFooterLeftHeader)
    } 
    if (updatedFooterRightHeader.id) {
      console.log('in body PUT', updatedFooterRightHeader)
      axios.put(`api/editables/${updatedFooterRightHeader.id}`, updatedFooterRightHeader)
    }
    if (updatedFooterRightBody.id) {
      console.log('in body PUT', updatedFooterRightBody)
      axios.put(`api/editables/${updatedFooterRightBody.id}`, updatedFooterRightBody)
    }
    if (updatedFooterLeftBody.id) {
      console.log('in body PUT', updatedFooterLeftBody)
      axios.put(`api/editables/${updatedFooterLeftBody.id}`, updatedFooterLeftBody)
    }
  }

  handleChangeEditable = evt => {
    console.log('evt: ', evt)
    const elementType = evt._dispatchInstances.type

    if (elementType === 'footerLeftHeader') {
      const prestructuredFooterLeft = this.props.editables.find(val => val.name === 'footerLeftHeader')
      prestructuredFooterLeft.textShort = evt.target.value
      this.setState({ historyNewsHeader: prestructuredFooterLeft})
    }
    if (elementType === 'footerRightHeader') {
      const prestructuredFooterRight = this.props.editables.find(val => val.name === 'footerRightHeader')
      prestructuredFooterRight.textShort = evt.target.value
      this.setState({ historyNewsBody: prestructuredFooterRight})
    }
    if (elementType === 'footerRightBody') {
      const prestructuredFooterRightBody = this.props.editables.find(val => val.name === 'footerRightBody')
      prestructuredFooterRightBody.textLong = evt.target.value
      this.setState({ historyNewsBody: prestructuredFooterRightBody})
    }
    if (elementType === 'footerLeftBody') {
      const prestructuredFooterLeftBody = this.props.editables.find(val => val.name === 'footerLeftBody')
      prestructuredFooterLeftBody.textLong = evt.target.value
      this.setState({ historyNewsBody: prestructuredFooterLeftBody})
    }
  }

  render() {
    return(
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
                  115 Mill Bay Road
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
              <a href='http://sunaq.org/languageprograms/language-nest/' target='_blank' rel='noopener noreferrer'>
                <Image src={Niuwawik} size='tiny' />
              </a>
            </Grid.Column>
            <Grid.Column>
              <Image src={Dancers} size='tiny' />
            </Grid.Column>
            <Grid.Column>
              <a href='https://koc.alaska.edu/' target='_blank' rel='noopener noreferrer'>
                <Image src={KOC} size='tiny' />
              </a>
            </Grid.Column>
            <Grid.Column >
              <a href='https://www.akhf.org/' target='_blank' rel='noopener noreferrer'>
                <Image src={AKHF} size='tiny'  />
              </a>
            </Grid.Column>
            <Grid.Column>
              <a href='https://www.acf.hhs.gov/ana' target='_blank' rel='noopener noreferrer'>
                <Image src={ANA} size='tiny' />
              </a>
            </Grid.Column>
            <Grid.Column>
              <a href='https://www.afognak.com/' target='_blank' rel='noopener noreferrer'>
                <Image src={ANC} size='tiny' />
              </a>
            </Grid.Column>
            <Grid.Column>
              <a href='https://alutiiqmuseum.org/' target='_blank' rel='noopener noreferrer'>
                <Image src={AM} size='tiny' />
              </a>
            </Grid.Column>
            <Grid.Column>
              <a href='https://koniageducation.org/' target='_blank' rel='noopener noreferrer'>
                <Image src={KEF} size='tiny' />
              </a>
            </Grid.Column>
            <Grid.Column>
              <a href='http://kmxt.org/' target='_blank' rel='noopener noreferrer'>
                <Image src={KMXT} size='tiny' />
              </a>
            </Grid.Column>
            <Grid.Column>
              <a href='https://www.nps.gov/index.htm' target='_blank' rel='noopener noreferrer'>
                <Image src={NPS} size='tiny' />
              </a>
            </Grid.Column>
            <Grid.Column>
              <a href='http://sunaq.org/' target='_blank' rel='noopener noreferrer'>
                <Image src={Sunaq} size='tiny' />
              </a>
            </Grid.Column>
            <Grid.Column>
              <a href='https://www.afognak.org/' target='_blank' rel='noopener noreferrer'>
                <Image src={NVA} size='tiny' />
              </a>
            </Grid.Column>
            <Grid.Column>
              <a href='https://www.koniag.com/' target='_blank' rel='noopener noreferrer'>
                <Image src={Koniag} size='tiny' />
              </a>
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
  }
}

const mapStateToProps = (state) => {
  return {
    editables: state.editables,
    user: state.user
  }
}

export default connect(mapStateToProps)(Footer)