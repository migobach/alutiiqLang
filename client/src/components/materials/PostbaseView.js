import React, { Component, Fragment } from 'react'
import {
  Divider
} from 'semantic-ui-react'
import {
  SpecialDiv,
  WordStyle,
  ContentStyle,
  ContentStyleThick,
} from '../styles/CommonStyles'

const englishStyle = {
  fontSize: '2em',
}

class PostbaseView extends Component {
  render() {
    console.log('Props:', this.props)

    return (
      <SpecialDiv>
        <Fragment>
          <SpecialDiv>
            {
              (this.props.base.cleanpostbase1 && this.props.base.cleanpostbase2) ?
                <WordStyle>
                  {this.props.base.cleanpostbase1}, {this.props.base.cleanpostbase2}
                </WordStyle>
                :
                <WordStyle>
                  {this.props.base.cleanpostbase1}
                </WordStyle>
            }

            <Divider />
            <ContentStyle style={englishStyle}>
              {this.props.base.translation}
            </ContentStyle>

            {
              (this.props.base.postbase1 || this.props.base.postbase2 || this.props.base.postbase3) ?
                <div>
                  <ContentStyleThick>Example(s):</ContentStyleThick>
                  <ContentStyle><i>{this.props.base.postbase1}</i> - {this.props.base.example1translation}</ContentStyle>
                  {this.props.base.postbase2 ?
                    <ContentStyle><i>{this.props.base.postbase2}</i> - {this.props.base.example2translation}</ContentStyle>
                    : null
                  }
                  {this.props.base.postbase3 ?
                    <ContentStyle><i>{this.props.base.postbase3}</i> - {this.props.base.example3translation}</ContentStyle>
                    : null
                  }
                </div>
                : null
            }
            < Divider hidden />
            {
              this.props.base.notes ?
                <div>
                  <ContentStyleThick>Notes:</ContentStyleThick>
                  <ContentStyle>{this.props.base.notes}</ContentStyle>
                </div>
                : null
            }
            < Divider hidden />
            {
              (this.props.base.cleanpostbase1 || this.props.base.cleanpostbase2) ?
                <div>
                  <ContentStyleThick>Cleaned verison:</ContentStyleThick>
                  <ContentStyle>{this.props.base.cleanpostbase1}</ContentStyle>
                  {
                    this.props.base.cleanpostbase2 ?
                      <ContentStyle>{this.props.base.cleanpostbase1}</ContentStyle>
                      : null
                  }
                </div>
                : null

            }

          </SpecialDiv>
        </Fragment>
      </SpecialDiv>
    )
  }
}

export default PostbaseView