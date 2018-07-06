import React, { Component } from 'react'
import { Segment, Header } from 'semantic-ui-react'

class Classes extends Component {

  render() {
    return(
      <Segment padded>
        <Header
          textAlign="center"
          as="h2"
        >
         Classes
        </Header>
      </Segment>

    )
  }
}

export default Classes
