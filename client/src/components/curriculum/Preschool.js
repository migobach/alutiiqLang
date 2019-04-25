import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Header,
  Container, 
  Divider,
  Button,
} from 'semantic-ui-react'
import {
  SpecialDiv,
  SectionHead,
  ContentStyleCenter,
  IconLinkGrey,
  IconHover,
  BlueDiv,
  SubSectionHead,
  ContentStyleWhite,
} from '../styles/CommonStyles'

class Preschool extends Component {

  render() {
    return(
      <div>
      <BlueDiv>
        <Header textAlign='center'>
          <SubSectionHead>
            Project Summary
          </SubSectionHead>
        </Header>
        <ContentStyleWhite>
          In 2008, NVA received a grant from the Administration for Native Americans (ANA) to publish a Kodiak Alutiiq Language Curriculum for students in preschool through 5th grade, translating materials originally developed by neighboring Chugach Sugpiaq/Alutiiq into Koniag Alutiiq. Through this one-year Native Language Preservation & Maintenance Planning Grant, NVA implemented our Kodiak Alutiiq Curriculum Project in partnership with Chugachmiut, Alutiiq Museum, Kodiak Island Borough School District, Native Educators of the Alutiiq Region, KMXT Radio Station, with support from other Kodiak Native organizations.
        </ContentStyleWhite>
        <ContentStyleWhite>
          Through this project, we developed an early childhood Alutiiq language curriculum that reflects the Kodiak Alutiiq community values and traditions and provides a framework for sharing our values and traditions within schools and tribal education programs in the Kodiak Archipelago. The central goal to these efforts is to increase access to Alutiiq language through curriculum and instructional resources. 
        </ContentStyleWhite>
      </BlueDiv>

        <SpecialDiv>
          <Header textAlign='center'>
            <SectionHead>
              Alutiiq Language Preschool Curriculum
            </SectionHead>
          </Header>
          <ContentStyleCenter>
            The preschool curriculum may be used for children young and old, adult learners, and anybody in between. Click the link below to view the Preschool Curriculum!
          </ContentStyleCenter>
        </SpecialDiv>

        <SpecialDiv>
          <Container textAlign='center'>
            <IconLinkGrey href={"https://s3-us-west-2.amazonaws.com/alutiiq-language-resources/curriculum/Preschool+Curriculum.pdf"} target="_blank">
              <IconHover name='cloud download' />
            </IconLinkGrey>
            <Divider hidden />
          </Container>
        </SpecialDiv>

        <SpecialDiv>
          <Button type='button' onClick={this.props.view}>
            Close
          </Button>
        </SpecialDiv>

        <Divider />
      </div>
    )
  }
}

export default connect()(Preschool)