import React, { Component } from 'react'
import { 
  Header,
  Divider,
} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import {
  SpecialDiv,
  Pointer,
} from './styles/CommonStyles'

class NoMatch extends Component {
  render() {
    return (
      <div>
        <Divider hidden />
        <SpecialDiv>
          <Header as='h1' textAlign='center' color='grey'>
            <i> Pingnaqluten cali </i>
          </Header>
          <Header as='h1' textAlign='center'>
            Page not found, try again.
          </Header>
          <Header as='h1' textAlign='center'>
            <Pointer>
              <Link to='/'>Home</Link>
            </Pointer>
          </Header>
        </SpecialDiv>
      </div>
    );
  }
}

export default NoMatch;
