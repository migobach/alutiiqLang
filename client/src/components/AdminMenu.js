import React, { Component } from 'react'
import {
  Button,
  Header,
  Card,
  Icon,
  Grid,
} from 'semantic-ui-react'
import {
  SpecialDiv,
  CardHeader,
  SectionHead,
  ContentStyle,
  ContainerPad,
} from './styles/CommonStyles'
import Upload from './admin/Upload'
import AddFile from './admin/AddFile'

class AdminMenu extends Component {


  render() {
    return(
      <div>
        <Header>
          Proof of Concept
        </Header>
      </div>
    )
  }
}

export default AdminMenu