import React, { Component } from 'react'
import { Segment, Header } from 'semantic-ui-react'

class Songs extends Component {

  render() {
    return(
      <Segment padded>
        <Header
          textAlign="center"
          as="h2"
        >
          Songs
        </Header>
      </Segment>

    )
  }
}

export default Songs

// needs to be a class becuase I would there to be songs that are live searching 