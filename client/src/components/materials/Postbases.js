import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPostbases } from '../../reducers/postbases'
import { Parallax } from 'react-parallax'
import {
  Header,
  Grid,
  Icon,
  Form
} from 'semantic-ui-react'
import {
  SpecialDiv,
  SectionHead,
  SongStyle,
  ContentStyleCenter,
  ColumnHead,
  SongDiv,
  Watermark,
  Div
} from '../styles/CommonStyles'
import PostbaseView from './PostbaseView'
import DictionaryTop from '../../images/Dictionary.jpg'

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
    this.setState({ postbaseData: { ...base }, postbaseView: true })
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

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value })
  }

  renderSearchPostbases = () => {
    const keywords = this.state.searchPostbases
    const postbases = this.props.postbases
    const lowercasedKeywords = keywords.replace("'", "").toLowerCase()

    let filteredPostbase = postbases.filter(b =>
      ((b.translation !== null) ?
        b.translation.replace("'", "").toLowerCase().includes(lowercasedKeywords)
        : null
      )
      ||
      ((b.example1translation !== null) ?
        b.example1translation.replace("'", "").toLowerCase().includes(lowercasedKeywords)
        : null
      )
      ||
      ((b.example2translation !== null) ?
        b.example2translation.replace("'", "").toLowerCase().includes(lowercasedKeywords)
        : null
      )
      ||
      ((b.example3translation !== null) ?
        b.example3translation.replace("'", "").toLowerCase().includes(lowercasedKeywords)
        : null
      )
    )
    return (
      filteredPostbase.map((base) =>
        <Grid.Row key={base.id}>
          <Grid.Column computer={6} tablet={6} mobile={6}>
            <SongStyle>
              {base.postbase1 ? base.postbase1 : base.postbase2}
            </SongStyle>
          </Grid.Column>
          <Grid.Column width={6} textAlign='center'>
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
        <Parallax
          bgImage={DictionaryTop}
          blur={{ min: 5, max: 1 }}
          bgImageAlt="Page from Dr. Jeff Leer's Dictionary"
          strength={500}
        >

          <div style={{ height: 350 }}>
            <SpecialDiv>
              <Header textAlign="center">
                <SectionHead>
                  Postbases
                </SectionHead>
              </Header>
              <ContentStyleCenter>
                Search our online postbase collection for common postbases, or to find ways to express ideas using postbases. Click the Alutiiq icon to see information about the word. Most postbases have example sentencences and style notes.
                <br />
                <br />
                To start exploring, just begin typing in the search bar below.
              </ContentStyleCenter>
            </SpecialDiv>
          </div>
        </Parallax>

        {/* SEARCH FUNCTIONALITY */}

        <SpecialDiv>
          <Form>
            <Form.Input
              placeholder="Search Keywords..."
              autoFocus={true}
              name='searchPostbases'
              value={searchPostbases}
              onChange={this.handleChange}
              fluid
            />
          </Form>
        </SpecialDiv>

        {/* START OF POSTBASE LIST */}

        <Grid columns={2}>
          <Grid.Row only='computer tablet'>
            <Grid.Column>
              <Div>
                <SpecialDiv>
                  <Grid celled='internally' >
                    <Grid.Row>
                      <Grid.Column computer={6} textAlign='center'>
                        <ColumnHead>
                          Postbase
                        </ColumnHead>
                      </Grid.Column>
                      <Grid.Column width={6} textAlign='center'>
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
                    {this.renderSearchPostbases()}
                  </Grid>
                </SpecialDiv>
              </Div>
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
            {postbaseView === false ?
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
                    <Grid.Column width={6} textAlign='center'>
                      <ColumnHead>
                        Alutiiq Postbase
                      </ColumnHead>
                    </Grid.Column>
                    <Grid.Column width={6} textAlign='center'>
                      <ColumnHead>
                        English
                      </ColumnHead>
                    </Grid.Column>
                    <Grid.Column width={4} textAlign='center'>
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