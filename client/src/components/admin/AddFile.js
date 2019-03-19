import React, { Component } from 'react'
import {
  Header,
  Form,
  Button,
  Segment,
  Divider,
  Icon,
} from 'semantic-ui-react'
import { connect } from 'react-redux'
import { setFlash } from '../../reducers/flash'
import Flash from '../Flash'

class AddFile extends Component {
  
  render() {
    return(
      <Header>
        Proof of concept.
      </Header>
    )
  }
}

export default AddFile 