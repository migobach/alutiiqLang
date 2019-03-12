import React, { Component } from 'react'
import axios from 'axios'
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
    data: [],
    updateDatabase: 'Datbase type',
    upload: false,
    dataPresent: false
  }


  // data.forEach(function(row) { empty.push(row.book_title_alutiiq) }) need to parse the data this way maybe into a new array? 

// need to make some sort of flash message saying that the upload was successful
    handleSubmit = () => { 
      const { data, updateDatabase, upload, dataPresent } = this.state
      // data.forEach(function(row) { csvData.push(row.book_title_alutiiq, row.book_title_english, row.description, row.image, row.file, row.audio, row.book_type, row.creator).join })
      debugger

      if ( updateDatabase === 'Books' && upload === true && dataPresent === true) {
        axios.post('api/books/import', { book: data })
        .then( () => this.resetState() 
        )
      }
    }
    
    resetState = () => {
      this.setState({data: [], updateDatase: '', upload: false, dataPresent: false})
    }
  
    handleDropdownChange = (e, data) => {
      this.setState({updateDatabase: data.value, upload: true})
    }
    
    handleCancel = () => {
      this.setState({updateDatabase: '', upload: false})
    }
    
    // can just build the logic there to populate the correct database. It won't be pretty, but it'll work. 
    // if I scrap the whole dropzone thing, then I need to make sure I uninstall the npm package. 
    
    handleData = (data) => {
      this.setState({data, dataPresent: true})
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
      "book_type",
      "creator"
    ]
    
    return(
      <div>
        
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
            
            <SpecialDiv>
              {/* CSV PARSE DOES NOT RENDER ANYTHING, JUST FOR PARSING THE FILE */}
              {/* RENDERS SIMPLE ARRAY WITH NO HEADERS */}
                  <CsvParse
                    keys={booksKeys}
                    onDataUploaded={this.handleData}
                    onError={this.handleError}
                    render={onChange => <input type="file" onChange={onChange} />}
                  />
            </SpecialDiv>
          </Card>
        </SpecialDiv>

          {
            (this.state.upload === true && this.state.dataPresent === true) ?
          <Pointer>
            <Button type='submit' onClick={this.handleSubmit}>
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
