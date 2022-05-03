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
import { setFlash } from '../../reducers/flash'
import { connect } from 'react-redux'
import Flash from '../Flash'


class Upload extends Component {
  state = {
    data: [],
    keys: [],
    updateDatabase: 'Select datbase type',
    upload: false,
    dataPresent: false
  }



// need to make some sort of flash message saying that the upload was successful
    handleSubmit = () => {
      const { data, updateDatabase, upload, dataPresent } = this.state
      const { dispatch } = this.props
      // data.forEach(function(row) { csvData.push(row.book_title_alutiiq, row.book_title_english, row.description, row.image, row.file, row.audio, row.book_type, row.creator).join })

      if ( updateDatabase === 'Books' && upload === true && dataPresent === true) {
        axios.post('api/books/import', { book: data })
        .then( () => this.resetState(), dispatch(setFlash('Success! Books updated.', 'green')) )
        .catch( res => {
          dispatch(setFlash('Something went wrong!', 'red')) })
      } else if ( updateDatabase === 'Curriculum' && upload === true && dataPresent === true) {
        axios.post('api/curriculums/import', { curriculum: data })
        .then( () => this.resetState(), dispatch(setFlash('Success! Curriculum updated.', 'green')) )
        .catch( res => { dispatch(setFlash('Something went wrong!', 'red')) })
      } else if ( updateDatabase === 'Articles' && upload === true && dataPresent === true) {
        axios.post('api/erinarpets/import', { article: data })
        .then( () => this.resetState(), dispatch(setFlash('Success! Articles updated.', 'green')) )
        .catch( res => { dispatch(setFlash('Something went wrong!', 'red'))})
      } else if ( updateDatabase === 'Games' && upload === true && dataPresent === true) {
        axios.post('api/games/import', { game: data })
        .then(
        () => this.resetState(),
        dispatch(setFlash('Success! Games uploaded!', 'green')) )
        .catch( res => { dispatch(setFlash('Something went wrong!', 'red')) })
      } else if ( updateDatabase === 'Materials' && upload === true && dataPresent === true) {
        axios.post('api/materials/import', { material: data })
        .then( () => this.resetState(), dispatch(setFlash('Success! Materials updated!', 'green')) )
        .catch( res => {
          dispatch(setFlash('Something went wrong!', 'red')) })
      } else if ( updateDatabase === 'Posters' && upload === true && dataPresent === true) {
        axios.post('api/posters/import', { poster: data })
        .then( () => this.resetState(), dispatch(setFlash('Success! Posters have been uploaded!', 'green')) )
        .catch(res => {dispatch(setFlash('Something went wrong.', 'red')) })
      } else if ( updateDatabase === 'Songs' && upload === true && dataPresent === true) {
        axios.post('api/songs/import', { song: data })
        .then( () => this.resetState(), dispatch(setFlash('Success! Songs have been uploaded!', 'green')) )
        .catch(res => {dispatch(setFlash('Something went wrong.', 'red')) })
      } else if ( updateDatabase === 'Dictionary' && upload === true && dataPresent === true) {
        axios.post('api/dictionaries/import', { dictionary: data })
        .then( () => this.resetState(), dispatch(setFlash('Success! Words have been uploaded and updated!', 'green')) )
        .catch(res => {dispatch(setFlash('Something went wrong.', 'red')) })
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
            "link_to_item",
            "level",
            "lesson_number",
            "notes",
            "group_name",
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
      else if (database === "Games") {
        this.setState({keys:
          [ "game_name_alutiiq",
          "game_name_english",
          "link_to_item",
          "game_group",
          "notes",
          "creator",
          "order"
          ]
        })
      }
      else if (database === "Materials") {
        this.setState({keys:
        [ "resource_title",
        "file_url",
        "url",
        "author",
        "year",
        "grade",
        "standards",
        "subjects",
        "values",
        "sponsors",
        "keywords",
        "notes"
        ]
        })
      }
      else if (database === "Posters") {
        this.setState({keys:
        [ "title",
        "poster_link",
        "author",
        "notes"
        ]
        })
      }
      else if (database === "Songs") {
        this.setState({keys:
        [ "title_english",
        "title_alutiiq",
        "credit",
        "audio",
        "video",
        "script",
        "traditional",
        "script_english_words",
        "script_alutiiq_words",
        "notes",
        ]
        })
      } else if (database === "Dictionary") {
        this.setState({keys:
        [ "english",
        "part_of_speech",
        "alutiiq_north",
        "north_audio",
        "north_sentence",
        "alutiiq_south",
        "south_audio",
        "south_sentence",
        "image_name",
        "root_word",
        "category",
        "edited_by",
        "notes",
        "completed",
        "approved",
        "cultural_significance",
        "examples_conjugation_irregulars",
        "negatives",
        "literal_translation",
        "additional_meanings"
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
          <Icon name='upload' size='large' color='grey'/>  Upload Content
        </Header>
          <Divider />
        <ContentStyle>
          Select the database you would like to update with a new CSV file.
        </ContentStyle>
      </SpecialDiv>

      <SpecialDiv>
        <Form>
            <Dropdown placeholder={this.state.updateDatabase} fluid selection options={csvOptions} onChange={this.handleDropdownChange}/>
          <Divider hidden />

        <SpecialDiv>

          <Flash />

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
            Cancel
          </Button>
        </Form>
      </SpecialDiv>
      </div>
    )
  }
}

export default connect()(Upload)
