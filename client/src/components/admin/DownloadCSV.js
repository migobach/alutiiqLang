import React, { Component } from 'react'
import axios from 'axios'
import {
  Header, 
  Form, 
  Button,
  Dropdown,
  Divider,
  Card, 
  Icon
} from 'semantic-ui-react'
import {
  SpecialDiv,
  ContentStyle,
  Pointer,
  CardHeader,
} from './../styles/CommonStyles'


class Download extends Component {

  state = {
    downloadDatabase: 'Select database type',
    download: false
  }

  handleDropdownChange = (e, data) => {
    this.setState({
      downloadDatabase: data.value,
      download: true
    })
  }

  resetState = () => {
    this.setState({
      downloadDatabase: 'Select database type',
      download: false
    })
  }

  handleExport = () => {
    const { downloadDatabase, download } = this.state

    if (downloadDatabase === 'Materials' && download === true) {
        axios({
        url: 'api/materials/export.csv',
        method: 'GET',
        responseType: 'blob', // important
      }).then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'materials.csv');
        document.body.appendChild(link);
        link.click();
        this.resetState();
      })
    } else if (downloadDatabase === 'Songs' && download === true) {
        axios({
        url: 'api/songs/export.csv',
        method: 'GET',
        responseType: 'blob', // important
      }).then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'songs.csv');
        document.body.appendChild(link);
        link.click();
        this.resetState();
      })
    } else if (downloadDatabase === 'Books' && download === true) {
        axios({
        url: 'api/books/export.csv',
        method: 'GET',
        responseType: 'blob', // important
      }).then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'books.csv');
        document.body.appendChild(link);
        link.click();
        this.resetState();
      })
    } else if (downloadDatabase === 'Dictionary' && download === true) {
        axios({
        url: 'api/dictionaries/export.csv',
        method: 'GET',
        responseType: 'blob', // important
      }).then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'dictionary.csv');
        document.body.appendChild(link);
        link.click();
        this.resetState();
      })
    } else if (downloadDatabase === 'Curriculum' && download === true) {
        axios({
        url: 'api/curriculums/export.csv',
        method: 'GET',
        responseType: 'blob', // important
      }).then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'curriculum.csv');
        document.body.appendChild(link);
        link.click();
        this.resetState();
      })
    }
  }

  render() {
    const csvOptions = [
      {
        text: 'Books',
        value: 'Books'
      }, 
      {
        text: 'Curriculum', 
        value: 'Curriculum'
      },
      {
        text: 'Dictionary', 
        value: 'Dictionary'
      },
      {
        text: 'Articles', 
        value: 'Articles'
      },
      {
        text: 'Games', 
        value: 'Games'
      },
      {
        text: 'Materials', 
        value: 'Materials'
      },
      {
        text: 'Posters', 
        value: 'Posters'
      },
      {
        text: 'Songs', 
        value: 'Songs'
      }
    ]
    return(
      <div>
        <SpecialDiv>
          <Header>
            <Icon name='download' size='large' color='grey' /> Download Content
          </Header>
            <Divider />
          <ContentStyle>
            Select the database you would like to retrieve current data and format from.
          </ContentStyle>
        </SpecialDiv>

        <SpecialDiv>
          <Form>
            <Dropdown placeholder={this.state.downloadDatabase} fluid selection options={csvOptions} onChange={this.handleDropdownChange} />

              { (this.state.download === true && this.state.downloadDatabase !== 'Select database type') ?
              <div>
              <Divider hidden />
                <Pointer>
                  <Button type='button' onClick={this.handleExport} >
                    Download {this.state.downloadDatabase} CSV
                  </Button>
                </Pointer>
              </div>
              :
              null
              }

            <Divider hidden />
            <Divider />
            <Button type='Button' onClick={this.props.view}>
              Cancel
            </Button>
          </Form>
        </SpecialDiv>
      </div>
    )
  }
}

export default Download

