import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCurriculum } from '../../reducers/curriculum'
import {
  Header,
  Container,
  Grid,
} from 'semantic-ui-react'
import {
  SpecialDiv, 
  ContentStyle,
  GreenDiv,
  SubSectionHead,
  SectionHead,
  ContentStyleWhite,
  IconHover,
  IconLink, 
} from '../styles/CommonStyles'

class Workbook extends Component {
  state = { workbookLessons: [] }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(getCurriculum())
  }

  componentDidUpdate(prevProps) {
    if(prevProps !== this.props)
    this.setState({ workbookLessons: this.props.curriculums})
  }

  // lessons = () => {
  //   const { workbookLessons } = this.state
  //   return workbookLessons.map( lesson => 
  //     <Grid.Row>
  //       <Grid.Column width={6} verticalAlign='middle'>
  //         <ContentStyle>
  //           {lesson.curricular_name}
  //         </ContentStyle>
  //       </Grid.Column>
  //     </Grid.Row>
  //   )
  // }
  
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
    
          <GreenDiv>
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
        </GreenDiv>

        <SpecialDiv>
          <Grid celled='internally'>
            {/* { this.lessons()} */}
          </Grid>
        </SpecialDiv>


        
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    curriculum: state.curriculums
  }
}

export default connect(mapStateToProps)(Workbook)