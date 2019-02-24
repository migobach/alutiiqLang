import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import classNames from 'classnames'
import CsvParse from '@vtex/react-csv-parse'
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
  IconLinkGrey,
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
    console.log(acceptedFiles)
  }

  handleData = (data) => {
    this.setState({data})
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
    const booksKeys = [
      "book_title_alutiiq", 
      "book_title_english", 
      "description", 
      "image",
      "file", 
      "audio",
      "created_at",
      "updated_at",
      "book_type",
      "creator"
    ]

    return(
      <div>
{/* CSV PARSE DOES NOT RENDER ANYTHING, JUST FOR PARSING THE FILE */}
    <CsvParse
      keys={booksKeys}
      onDataUploaded={this.handleData}
      onError={this.handleError}
      render={onChange => <input type="file" onChange={onChange} />}
    />

{/* RENDERING STARTS HERE */}
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

        <SpecialDiv>
          <Card fluid color='grey'>
            <Card.Content textAlign='center'>
              <CardHeader>
                CSV File Upload
              </CardHeader>
            </Card.Content>

            <Card.Content textAlign='center'>
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
                            <Icon name='cloud upload' size='massive' color='grey' /> 
                            :
                            <Pointer>
                              <p>Try dropping some files here, or click to select files to upload.</p>
                            </Pointer>
                        }
                      </div>
                    )
                  }}
                </Dropzone>
              </SpecialDiv>
            </Card.Content>
          </Card>
        </SpecialDiv>
        {
          this.state.upload ?
        <Pointer>
          <Button type='submit' onSubmit={this.handleSubmit}>
            Upload
          </Button>
        </Pointer>
        : 
        null
        }
        
        </Form>
      </SpecialDiv>
      </div>
    )
  }
}

export default Upload



