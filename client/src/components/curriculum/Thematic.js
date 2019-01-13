import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import {
  Header, 
  Grid,
  Icon,
  Container,
  Divider,
  Button,
} from 'semantic-ui-react'
import {
  SpecialDiv,
  SectionHead,
  ContentStyle,
  ColumnHead,
  SongStyle, 
  Pointer,
  IconLinkGrey,
  IconHover,
  Div,
} from '../styles/CommonStyles'

class Thematic extends Component {

  renderUnits = () => {
    return this.props.curriculum.map( unit => {
      if (unit.group_name !== "Thematic Units") {
        return ( null )
      } else 
        return (
            <Grid.Row>
              <Grid.Column computer={6} tablet={6} mobile={10} verticalAlign='middle'>
                <SongStyle>
                  {unit.curricular_name}
                </SongStyle>
              </Grid.Column>

              <Grid.Column width={6} only='computer tablet' verticalAlign='middle'>
                <SongStyle>
                  {unit.level}
                </SongStyle>
              </Grid.Column>

              <Grid.Column computer={4} tablet={4} mobile={6} verticalAlign='middle' textAlign='center'>
                <SongStyle>
                  { unit.link_to_item ?
                    <Pointer>
                      <a href={unit.link_to_item} target='_blank'>
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
    return(
      <Fragment>
        <SpecialDiv>
          <Header textAlign='center'>
            <SectionHead>
              Alutiiq Heritage Thematic Units
            </SectionHead>
          </Header>
          <ContentStyle>
            Developed by teachers for teachers, our Alutiiq Heritage Thematic Units book contains 6 units, targeted at grades Kindergarden through 5th grade. Each unit contains between 6 to 11 lessons for use within a classroom. Teachers are encouraged to send in comments or lesson expansion ideas for revision of this teachers' curriculum workbook as it is test piloted with students. 
          </ContentStyle>
          <ContentStyle>
            Spiral bound copies of the book are available at NVA for educators and learners of the Alutiiq language. Download the full workbook from the link below, or contact the Native Village of Afognak at (907) 486-6357 for a copy or to share your ideas for expansion and revision.
          </ContentStyle>
        </SpecialDiv>

        <SpecialDiv>
          <Container textAlign='center'>
            <IconLinkGrey href={"https://s3-us-west-2.amazonaws.com/alutiiq-language-resources/curriculum/Thematic+Units.pdf"} target="_blank">
              <IconHover name='cloud download' />
            </IconLinkGrey>
            <Divider hidden />
          </Container>
        </SpecialDiv>
        <Divider hidden />

        <Div>
          <Grid celled='internally'>
            <Grid.Row>
              <Grid.Column computer={6} tablet={6} mobile={10}  textAlign='center'>
                <ColumnHead>
                  Title
                </ColumnHead>
              </Grid.Column>

              <Grid.Column width={6} only='computer tablet' textAlign='center'>
                <ColumnHead>
                  Grade Level
                </ColumnHead>
              </Grid.Column>

              <Grid.Column computer={4} tablet={4} mobile={6} textAlign='center'>
                <ColumnHead>
                  View
                </ColumnHead>
              </Grid.Column>
            </Grid.Row>
            { this.renderUnits() }
          </Grid>
        </Div>

        <SpecialDiv>
          <Button type='button' onClick={this.props.view}>
            Close
          </Button>
        </SpecialDiv>
        
        <Divider />
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    curriculum: state.curriculum
  }
}

export default connect(mapStateToProps)(Thematic)