import React, { Component } from 'react'
import { Segment, Header } from 'semantic-ui-react'

class Dictionary extends Component {

  render() {
    return(
      <Segment padded>
        <Header
          textAlign="center"
          as="h2"
        >
          Dictionary
        </Header>
      </Segment>

    )
  }

}

export default Dictionary

// needs to be a class becuase I would there to be a dictionary that is live searching. 