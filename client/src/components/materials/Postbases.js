import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPostbases } from '../../reducers/postbases'
import {
  Header,
  Divider,
  Grid,
  Icon
} from 'semantic-ui-react'
import {
  SpecialDiv,
  SectionHead,
  SongStyle,
  ContentStyleCenter,
  SongHeight,
  ColumnHead,
  SongDiv,
  Watermark,
  Div
} from '../styles/CommonStyles'
import PostbaseView from './PostbaseView'

class Postbases extends Component {
  state = {
    searchPostbases: '',
    postbaseData: {},
    postbaseView: false,
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(getPostbases())
  }

  setPostbase = (base) => {
    this.setState( { postbaseData: {...base}, postbaseView: true } )
  }
  toggleView = () => {
    this.setState({ postbaseView: !this.state.postbaseView })
  }

  renderPostbaseView = () => {
    const { postbaseView } = this.state
    if (postbaseView === true) {
      console.log('in render', this.state.postbaseData)
      return <PostbaseView base={this.state.postbaseData} view={this.toggleView} />
    } else
      return <SpecialDiv />
  }

  renderSearchPostbases = () => {
    const searchPostbases = this.state
    const postbases = this.props.postbases

    console.log('searchPostbases:', searchPostbases)
    return (
      postbases.map((base) =>
        <Grid.Row key={base.id}>
          <Grid.Column computer={6} tablet={6} mobile={10}>
            <SongStyle>
              {base.postbase1 ? base.postbase1 : base.postbase2}
            </SongStyle>
          </Grid.Column>
          <Grid.Column width={6} only='computer'>
            <SongStyle>
              {base.translation}
            </SongStyle>
          </Grid.Column>
          <Grid.Column computer={4} tablet={4} mobile={4} textAlign='center'>
            <SongStyle>
              <Icon name='eye' size='large' color='grey' onClick={() => this.setPostbase(base)} />
            </SongStyle>
          </Grid.Column>
        </Grid.Row>
      )
    )
  }

  render() {
    const { searchPostbases, postbaseView } = this.state

    return (
      <div>
        <SpecialDiv>
          <Header textAlign="center">
            <SectionHead>
              Postbases
            </SectionHead>
          </Header>
          <ContentStyleCenter>
            Here is a draft Postbase Database
          </ContentStyleCenter>
        </SpecialDiv>
        <Divider />

        {/* START OF POSTBASE LIST */}

        <Grid columns={2}>
          <Grid.Row only='computer tablet'>
            <Grid.Column>
              <SongHeight>
                <SpecialDiv>
                  <Grid celled='internally' >
                    <Grid.Row>
                      <Grid.Column computer={6} tablet={10} textAlign='center'>
                        <ColumnHead>
                          Postbase
                        </ColumnHead>
                      </Grid.Column>
                      <Grid.Column width={6} only='computer' textAlign='center'>
                        <ColumnHead>
                          English
                        </ColumnHead>
                      </Grid.Column>
                      <Grid.Column computer={4} tablet={4} textAlign='center'>
                      <ColumnHead>
                        View
                      </ColumnHead>
                    </Grid.Column>

                    </Grid.Row>
                    {this.renderSearchPostbases()}x
                  </Grid>
                </SpecialDiv>
              </SongHeight>
            </Grid.Column>

            {/* New conditionally rendered song view - not sticky */}
            <Grid.Column>
              {this.state.postbaseView === false ?
                <SongDiv>
                  <Watermark>
                    Click on a postbase to view
                  </Watermark>
                </SongDiv>
                :
                this.renderPostbaseView()
              }
            </Grid.Column>
          </Grid.Row>

          {/* start of the song list and conditional component - only renders on phones */}

          <Grid.Row only='mobile'>
            { postbaseView === false ?
              null
              :
              this.renderPostbaseView()
            }
          </Grid.Row>
          <Grid.Row only='mobile'>
            <Div>
              {_.times(1, i =>
                <Grid celled='internally' key={i}>
                  <Grid.Row>
                    <Grid.Column width={10} textAlign='center'>
                      <ColumnHead>
                        Alutiiq Postbase
                      </ColumnHead>
                    </Grid.Column>
                    <Grid.Column width={6} textAlign='center'>
                      <ColumnHead>
                        View
                      </ColumnHead>
                    </Grid.Column>
                  </Grid.Row>
                  {this.renderSearchPostbases()}
                </Grid>
              )}
            </Div>
          </Grid.Row>

        </Grid>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    postbases: state.postbases
  }
}

export default connect(mapStateToProps)(Postbases)