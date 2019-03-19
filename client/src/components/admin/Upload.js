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
} from './../styles/CommonStyles'


class Upload extends Component {
  state = {
    data: [],
    keys: [],
    updateDatabase: 'Datbase type',
    upload: false,
    dataPresent: false
  }

  

// need to make some sort of flash message saying that the upload was successful
    handleSubmit = () => { 
      const { data, updateDatabase, upload, dataPresent } = this.state
      // data.forEach(function(row) { csvData.push(row.book_title_alutiiq, row.book_title_english, row.description, row.image, row.file, row.audio, row.book_type, row.creator).join })
      debugger

      if ( updateDatabase === 'Books' && upload === true && dataPresent === true) {
        axios.post('api/books/import', { book: data })
        .then( () => this.resetState() )
      } else if ( updateDatabase === 'Curriculum' && upload === true && dataPresent === true) {
        axios.post('api/curriculums/import', { curriculum: data })
        .then( () => this.resetState() )
      } else if ( updateDatabase === 'Articles' && upload === true && dataPresent === true) {
        axios.post('api/erinarpets/import', { article: data })
        .then( () => this.resetState() )
      }
    }
    
    resetState = () => {
      this.setState({data: [], keys: [], updateDatase: '', upload: false, dataPresent: false})
    }
  
    handleDropdownChange = (e, data) => {
      this.setState({
        updateDatabase: data.value, 
        upload: true
      })
      this.handleKeys(data.value)
    }
    
    handleCancel = () => {
      this.setState({ updateDatabase: 'Database type', upload: false, data: [] })
    }
        
    handleData = (data) => {
      this.setState({data, dataPresent: true})
    }

    handleKeys = (database) => {
      if (database === "Books") {
        this.setState({keys:
          [ "book_title_alutiiq", 
            "book_title_english", 
            "description", 
            "image",
            "file", 
            "audio",
            "book_type",
            "creator"
          ]
        })
      }
      else if (database === "Curriculum") {
        this.setState({keys:
          [ "curricular_name",
            "group_name",
            "level",
            "lesson_number",
            "link_to_item",
            "notes",
            "order"
          ]
        })
      }
      else if (database === "Articles") {
        this.setState({keys:
        [ "print_date",
        "topic",
        "author",
        "article_pdf",
        "image",
        "notes"
        ]
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
    const keys = this.state.keys 

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
                keys={keys}
                onDataUploaded={this.handleData}
                onError={this.handleError}
                render={onChange => <input type="file" onChange={onChange} />}
              />
            </SpecialDiv>
          </Card>
        </SpecialDiv>

          {
            (this.state.upload === true && this.state.dataPresent === true) ?
          <SpecialDiv>
            <ContentStyle>
              <Icon name='warning sign'/>
               The {this.state.updateDatabase.toLowerCase()} database will be deleted and replaced with the new data. Click upload to continue. 
            </ContentStyle>

            <Pointer>
              <Button type='submit' onClick={this.handleSubmit}>
                Upload
              </Button>
            </Pointer>
          </SpecialDiv>
          : 
          null
          }
        
          <Divider />
          <Button type='button' onClick={this.props.view}>
            Close
          </Button>
        </Form>
      </SpecialDiv>
      </div>
    )
  }
}

export default Upload
