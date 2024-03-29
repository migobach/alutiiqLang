import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { getCurriculum } from '../../reducers/curriculum'
import {
  Header,
  Container,
  Grid,
  Icon,
  Divider,
  Button,
} from 'semantic-ui-react'
import {
  SpecialDiv,
  ContentStyle,
  GreenDiv,
  SubSectionHead,
  ContentStyleWhite,
  IconHover,
  IconLink,
  SongStyle,
  Pointer,
  ColumnHead,
  Div,
  BodyLink,
} from '../styles/CommonStyles'

class Workbook extends Component {
  state = { workbookLessons: [] }

  renderLessons = () => {
    let sortedLessons = this.props.curriculum.sort(function(a,b){ if(a.order < b.order) {return -1; } if(a.order > b.order) {return 1; } return 0; })

    return sortedLessons.map( unit => {
      if (unit.group_name !== "Elementary Language") {
        return ( null )
      } else
        return(
            <Grid.Row>
              <Grid.Column computer={6} tablet={6} mobile={10} verticalAlign='middle'>
                <SongStyle>
                  {unit.curricular_name}
                </SongStyle>
              </Grid.Column>

              <Grid.Column width={3} only='computer tablet' verticalAlign='middle'>
                <SongStyle>
                  {unit.level}
                </SongStyle>
              </Grid.Column>

              <Grid.Column width={3} only='computer tablet' verticalAlign='middle'>
                <SongStyle>
                  {unit.lesson_number}
                </SongStyle>
              </Grid.Column>

              <Grid.Column computer={4} tablet={4} mobile={6} verticalAlign='middle' textAlign='center'>
                <SongStyle>
                  { unit.link_to_item ?
                    <Pointer>
                      <a href={unit.link_to_item} target='_blank'>
                        <Icon name='sound' size='large' color='grey'/>
                      </a>
                    </Pointer>
                    :
                    <Icon name='dont' size='large' color='grey' />
                  }
                </SongStyle>
              </Grid.Column>

            </Grid.Row>
        )
    })
  }

  render() {
    return(
      <div>
          <GreenDiv>
          <Header textAlign='center'>
            <SubSectionHead>
            Kodiak Alutiiq Elementary Language Curriculum Workbook
            </SubSectionHead>
          </Header>
            <ContentStyleWhite>
              Audio files have been prepared for each of the 40 vocabulary groups listed below to accompany the teacher's workbook. You can request a CD of all 40 lessons or listen online to each in both Northern and Southern styles of Kodiak Alutiiq, repeated in that order. <i>Quyanaasinaq</i> to Kathryn Chichenoff (Northern style), Florence Pestrikoff (Southern style), and Susan Malutin (English) who lent their voices to this project.
              <br />
              <br />
              A full version of of the workbook is available to be printed and shared widely for educational puposes.
            </ContentStyleWhite>
            <SpecialDiv>
              <Container textAlign='center'>
                <IconLink href='https://s3-us-west-2.amazonaws.com/alutiiq-language-resources/curriculum/Workbook.pdf' target='_blank'>
                  <IconHover name='book' />
                </IconLink>
              </Container>
            </SpecialDiv>
        </GreenDiv>

        <Div>
          <Grid celled='internally'>
            <Grid.Row>
              <Grid.Column computer={6} tablet={6} mobile={10}  textAlign='center'>
                <ColumnHead>
                  Title
                </ColumnHead>
              </Grid.Column>

              <Grid.Column width={3} only='computer tablet' textAlign='center'>
                <ColumnHead>
                  Grade Level
                </ColumnHead>
              </Grid.Column>

              <Grid.Column width={3} only='computer tablet' textAlign='center'>
                <ColumnHead>
                  Lesson
                </ColumnHead>
              </Grid.Column>

              <Grid.Column computer={4} tablet={4} mobile={6} textAlign='center'>
                <ColumnHead>
                  View
                </ColumnHead>
              </Grid.Column>
            </Grid.Row>
            { this.renderLessons() }
          </Grid>
        </Div>

        <Divider hidden />
        <SpecialDiv>
          <ContentStyle>
            Spiral bound copies of the book are available at Native Village of Afognak for educators and learners of the Alutiiq language. Contact the <BodyLink href='https://www.afognak.org/' target='_blank'>Native Village of Afognak</BodyLink> at (907) 486-6357 for a copy, or to request the aid of an Alutiiq speaker.
          </ContentStyle>
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

const mapStateToProps = (state) => {
  return {
    curriculum: state.curriculum
  }
}

export default connect(mapStateToProps)(Workbook)