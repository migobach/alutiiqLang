import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
  Container,
  Grid,
  Image,
} from 'semantic-ui-react';
import { getEditablesData } from '../reducers/editables';
import ContentEditable from 'react-contenteditable'
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
      axios.put(`api/editables/${updatedFooterLeftHeader.id}`, updatedFooterLeftHeader)
    }

    if (updatedFooterLeftHeader.id === undefined) {
      axios.post('api/editables', updatedFooterLeftHeader)
    }

    if (updatedFooterRightHeader.id) {
      axios.put(`api/editables/${updatedFooterRightHeader.id}`, updatedFooterRightHeader)
    }

    if (updatedFooterRightHeader.id === undefined) {
      axios.post('api/editables', updatedFooterRightHeader)
    }

    if (updatedFooterRightBody.id) {
      axios.put(`api/editables/${updatedFooterRightBody.id}`, updatedFooterRightBody)
    }

    if (updatedFooterRightBody.id === undefined) {
      axios.post('api/editables', updatedFooterRightBody)
    }

    if (updatedFooterLeftBody.id) {
      axios.put(`api/editables/${updatedFooterLeftBody.id}`, updatedFooterLeftBody)
    }

    if (updatedFooterLeftBody.id === undefined) {
      axios.post('api/editables', updatedFooterLeftBody)
    }
  }

  handleChangeEditable = evt => {
    const elementType = evt._dispatchInstances.type

    if (elementType === 'footerLeftHeader') {
      if (this.props.editables.find(val => val.name === 'footerLeftHeader') != undefined ) {
        const prestructuredFooterLeft = this.props.editables.find(val => val.name === 'footerLeftHeader')
        prestructuredFooterLeft.textShort = evt.target.value
        this.setState({ footerLeftHeader: prestructuredFooterLeft})
      } else {
        this.state.footerLeftHeader = { name: 'footerLeftHeader', textShort: evt.target.value }
      }
    }
    if (elementType === 'footerRightHeader') {
      if (this.props.editables.find(val => val.name === 'footerRightHeader') != undefined ) {
        const prestructuredFooterRight = this.props.editables.find(val => val.name === 'footerRightHeader')
        prestructuredFooterRight.textShort = evt.target.value
        this.setState({ footerRightHeader: prestructuredFooterRight})
      } else {
        this.state.footerRightHeader = { name: 'footerRightHeader', textShort: evt.target.value }
      }
    }
    if (elementType === 'footerRightBody') {
      if (this.props.editables.find(val => val.name === 'footerRightBody') != undefined ) {
        const prestructuredFooterRightBody = this.props.editables.find(val => val.name === 'footerRightBody')
        prestructuredFooterRightBody.textLong = evt.target.value
        this.setState({ footerRightBody: prestructuredFooterRightBody})
      } else {
        this.state.footerRightBody = { name: 'footerRightBody', textLong: evt.target.value }
      }
    }
    if (elementType === 'footerLeftBody') {
      if (this.props.editables.find(val => val.name === 'footerLeftBody') != undefined ) {
        const prestructuredFooterLeftBody = this.props.editables.find(val => val.name === 'footerLeftBody')
        prestructuredFooterLeftBody.textLong = evt.target.value
        this.setState({ footerLeftBody: prestructuredFooterLeftBody})
      } else {
        this.state.footerLeftBody = { name: 'footerLeftBody', textLong: evt.target.value }
      }
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
                  <ContentEditable
                    html={(this.props.editables.length >= 1 && this.props.editables.find(val => val.name === 'footerLeftHeader') != undefined) ? this.props.editables.find(val => val.name === 'footerLeftHeader').textShort : 'Contact us:'}
                    disabled={this.props.user.id ? false : true}
                    onChange={this.handleChangeEditable}
                    tagName='footerLeftHeader'
                    onBlur={this.handleBlurEditable}
                  />
                </ContentHead>
                <ContentStyle>
                  <ContentEditable
                  html={(this.props.editables.length >= 1 && this.props.editables.find(val => val.name === 'footerLeftBody') != undefined) ? this.props.editables.find(val => val.name === 'footerLeftBody').textLong : 'Native Village of Afognak, 907.486.6357'}
                  disabled={this.props.user.id ? false : true}
                  onChange={this.handleChangeEditable}
                  tagName='footerLeftBody'
                  onBlur={this.handleBlurEditable}
                  />
                </ContentStyle>
              </SpecialDiv>
            </Grid.Column>

            <Grid.Column textAlign='center'>
              <SpecialDiv>
                <ContentHead>
                  <ContentEditable
                    html= {(this.props.editables.length >= 1 && this.props.editables.find(val => val.name === 'footerRightHeader') != undefined) ? this.props.editables.find(val => val.name === 'footerRightHeader').textShort : 'Who we are:'}
                    disabled={this.props.user.id ? false : true}
                    onChange={this.handleChangeEditable}
                    tagName='footerRightHeader'
                    onBlur={this.handleBlurEditable}
                  />
                </ContentHead>
                <ContentStyle>
                  <ContentEditable
                    html={(this.props.editables.length >= 1 &&this.props.editables.find(val => val.name === 'footerRightBody') != undefined) ? this.props.editables.find(val => val.name === 'footerRightBody').textLong : `This website is maintained by the Native Village of Afognak in partnership with the Sun'aq Tribe of Kodiak with the aim of providing a single location to access all things Alutiiq.`}
                    disabled={this.props.user.id ? false : true}
                    onChange={this.handleChangeEditable}
                    tagName='footerRightBody'
                    onBlur={this.handleBlurEditable}
                  />
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