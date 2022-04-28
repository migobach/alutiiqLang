import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  Header,
  Grid,
  Icon,
  Divider,
  Button,
} from 'semantic-ui-react'
import {
  SpecialDiv,
  GreenDiv,
  SubSectionHead,
  ContentStyleWhite,
  SongStyle,
  Pointer,
  ColumnHead,
  Div,
} from '../styles/CommonStyles'

class HighSchool extends Component {
  // state = { highSchoolLessons: [] }

  renderHighSchoolUnits = () => {
    let sortedResources = this.props.curriculum.filter(x => x.level === 'High School')

    console.log('sortedResources:', sortedResources)

    return sortedResources.map( lesson => {
      return(
      <Grid.Row>
        <Grid.Column computer={4} tablet={4} mobile={10} verticalAlign='middle'>
          <SongStyle>
            {lesson.curricular_name}
          </SongStyle>
        </Grid.Column>

        <Grid.Column width={3} only='computer tablet' verticalAlign='middle'>
          <SongStyle>
            {lesson.lesson_number}
          </SongStyle>
        </Grid.Column>

        <Grid.Column width={7} only='computer tablet' verticalAlign='middle'>
          <SongStyle>
            {lesson.notes}
          </SongStyle>
        </Grid.Column>

        <Grid.Column computer={2} tablet={2} mobile={6} verticalAlign='middle' textAlign='center'>
            <SongStyle>
              { lesson.link_to_item ?
                <Pointer>
                  <a href={lesson.link_to_item} target='_blank'>
                    <Icon name='eye' size='large' color='grey'/>
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
    return (
      <div>
        <GreenDiv>
          <Header textAlign='center'>
            <SubSectionHead>
              High School Alutiiq Language Resources
            </SubSectionHead>
          </Header>
          <ContentStyleWhite>
            Alutiiq Language is part of the World Languages department at Kodiak High School. Resources shared below may be used in a variety of settings. Recources are organized by units and contain puzzles, presentations, flashcards, and games.
          </ContentStyleWhite>
        </GreenDiv>

        <Div>
          <Grid celled='internally'>
            <Grid.Row>
              <Grid.Column computer={4} tablet={4} mobile={10}  textAlign='center'>
                <ColumnHead>
                  Title
                </ColumnHead>
              </Grid.Column>

              <Grid.Column width={3} only='computer tablet' textAlign='center'>
                <ColumnHead>
                  Unit
                </ColumnHead>
              </Grid.Column>

              <Grid.Column width={7} only='computer tablet' textAlign='center'>
                <ColumnHead>
                  Description
                </ColumnHead>
              </Grid.Column>

              <Grid.Column computer={2} tablet={2} mobile={6} textAlign='center'>
                <ColumnHead>
                  View
                </ColumnHead>
              </Grid.Column>
            </Grid.Row>
            { this.renderHighSchoolUnits() }
          </Grid>
        </Div>

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

export default connect(mapStateToProps)(HighSchool)