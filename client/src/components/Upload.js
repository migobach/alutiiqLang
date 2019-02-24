import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import classNames from 'classnames'
import {
  Header,
  Form,
  Button,
  Dropdown,
  Divider,
} from 'semantic-ui-react'
import {
  SpecialDiv,
  ContentStyle,
  Pointer,
} from './styles/CommonStyles'


class Upload extends Component {
  state = {
    updateDatabase: 'Datbase type',
    upload: false
  }
  
  handleSubmit = () => {
    
  }

  handleDropdownChange = (e, data) => {
    this.setState({updateDatabase: data.value, upload: true})
  }

  handleCancel = () => {
    this.setState({updateDatabase: '', upload: false})
  }

  onDrop = (acceptedFiles, rejectedFiles) => {

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
          Upload Content
        </Header>
        <ContentStyle>
          Select the database you would like to update with a new CSV file. 
        </ContentStyle>
      </SpecialDiv>

      <SpecialDiv>
        <Form>
            <Dropdown placeholder={this.state.updateDatabase} fluid selection options={csvOptions} onChange={this.handleDropdownChange}/>
          <Divider hidden />
          <Pointer>
            <Button type='submit' onSubmit={this.handleSubmit}>
              Upload
            </Button>

        <SpecialDiv>
          <Dropzone onDrop={this.onDrop}>
            {({getRootProps, getInputProps, isDragActive}) => {
              return (
                <div
                  {...getRootProps()}
                  className={classNames('dropzone', {'dropzone--isActive': isDragActive})}
                >
                  <input {...getInputProps()} />
                  {
                    isDragActive ?
                      <p>Drop files here...</p> :
                      <p>Try dropping some files here, or click to select files to upload.</p>
                  }
                </div>
              )
            }}
          </Dropzone>
          </SpecialDiv>
          
          </Pointer>
        </Form>
      </SpecialDiv>
      </div>
    )
  }
}

export default Upload



