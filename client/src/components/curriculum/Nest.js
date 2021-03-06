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
  SectionHead,
  ContentStyle,
  SongStyle,
  Div,
  ColumnHead,
  SongStyleLeft,
  Pointer,
} from '../styles/CommonStyles'

class Nest extends Component {

  renderCurriculum = () => {

    let sortedLessons = this.props.curriculum.sort(function(a,b) { if(a.order < b.order) {return -1;} if(a.order > b.order) {return 1;} return 0;})

    return sortedLessons.map( curriculum => {
      if (curriculum.group_name !== "Language Nest") {
        return ( null )
      } else 
        return (
        <Grid.Row key={curriculum.id}>
          <Grid.Column computer={5} tablet={5} mobile={10}>
            <SongStyle>
              <i>{curriculum.curricular_name}</i> 
            </SongStyle>
          </Grid.Column>
          <Grid.Column width={7} only='computer tablet'>
            <SongStyleLeft>
              {curriculum.level}
            </SongStyleLeft>
          </Grid.Column>
          <Grid.Column computer={4} tablet={4} mobile={6} textAlign='center'>
            <SongStyle>
              { curriculum.link_to_item ?
                <Pointer>
                  <a href={curriculum.link_to_item} target='_blank'>
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
    }
  )
}

  render() {
    return(
      <div>
        <SpecialDiv>
          <Header textAlign='center'>
            <SectionHead>
              <i>Alutiit'stun Niuwawik</i> Curriculum and Resources
            </SectionHead>
          </Header>
          <ContentStyle>
            The Language Nest is a child-focused Alutiiq language immersion environment where language is acquired naturally. Children develop kindergarten readiness skills while they problem solve, explore, and play through the language in a supportive multi-generational setting.
            <br />
            <br />
            Our secret mission is to get other adults fluent in the language, to develop the next generation of teachers.
          </ContentStyle>
        </SpecialDiv>

         <Div>
          <Grid celled='internally'>
            <Grid.Row>
              <Grid.Column computer={5} tablet={5} mobile={10} verticalAlign='middle' textAlign='center'>
                <ColumnHead >
                  Title
                </ColumnHead>
              </Grid.Column>
              <Grid.Column width={7} verticalAlign='middle' only='computer tablet' textAlign='center'>
                <ColumnHead>
                  Level
                </ColumnHead>
              </Grid.Column>
              <Grid.Column width={4} verticalAlign='middle' only='computer tablet' textAlign='center'>
                <ColumnHead>
                  View
                </ColumnHead>
              </Grid.Column>
            </Grid.Row>
            { this.renderCurriculum() }
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

export default connect(mapStateToProps)(Nest)