import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Header, 
  Grid,
  Icon,
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
    return this.props.curriculum.map( curriculum => {
      if (curriculum.level != "Language Nest") {
        return
      } else 
        return (
        <Grid.Row key={curriculum.id}>
          <Grid.Column computer={5} tablet={5}>
            <SongStyle>
              <i>{curriculum.curricular_name}</i> 
            </SongStyle>
          </Grid.Column>
          <Grid.Column width={7} only='computer tablet'>
            <SongStyleLeft>
              {curriculum.level}
            </SongStyleLeft>
          </Grid.Column>
          <Grid.Column computer={4} tablet={4} textAlign='center'>
            <SongStyle>
              { curriculum.link_to_item ?
                <Pointer>
                  <a href={curriculum.link_to_item}>
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
            Curricular themes at the language nest are organized around cultural themes that prepare students for kindergarten. Interacting with elders, community members, and their own peers make in a culturally and linguistically rich environment are what make the langauge nest environment unique.
          </ContentStyle>
        </SpecialDiv>

         <SpecialDiv>
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
          </SpecialDiv>
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