import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Header,
  Container,
} from 'semantic-ui-react'
import { getCurriculum } from '../../reducers/curriculum'
import {
  SpecialDiv, 
  ContentStyle,
  BlueDiv,
  SubSectionHead,
  SectionHead,
  ContentStyleWhite,
  IconHover,
  IconLink, 
} from '../styles/CommonStyles'

class Workbook extends Component {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(getCurriculum())
  }

  render() {
    return(
      <div>
        <SpecialDiv>
          <Header textAlign='center'>
            <SectionHead>
              Kodiak Alutiiq Elementary Language Curriculum Workbook
            </SectionHead>
          </Header>
          <ContentStyle>
          Audio files have been prepared for each of the 40 vocabulary groups listed below to accompany the teacher's workbook. You can request a CD of all 40 lessons or listen online to each in both Northern and Southern styles of Kodiak Alutiiq, repeated in that order. <i>Quyanaasinaq</i> to Kathryn Chichenoff (Northern style), Florence Pestrikoff (Southern style), and Susan Malutin (English) who lent their voices to this project.
          <br />
          <br />
          Spiral bound copies of the book are available at Native Village of Afognak for educators and learners of the Alutiiq language. Contact the Native Village of Afognak at (907) 486-6357 for a copy, to request the aid of an Alutiiq speaker, or to share your ideas for expansion and revision.
          </ContentStyle>
        </SpecialDiv>
    
        <BlueDiv>
          <Header textAlign='center'>
            <SubSectionHead>
              Workbook
            </SubSectionHead>
          </Header>
            <ContentStyleWhite>
              A full version of of the workbook is available to be pinted and shared widely for educational puposes. 
            </ContentStyleWhite>
            <SpecialDiv>
              <Container textAlign='center'>
                <IconLink>
                  <IconHover name='book' />
                </IconLink>
              </Container>
            </SpecialDiv>
        </BlueDiv>

        
      </div>
    )
  }
}

export default connect()(Workbook)