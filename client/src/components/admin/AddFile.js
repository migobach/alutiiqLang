import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import {
  Header,
  Form,
  Button,
  Dropdown,
  Divider,
  Icon,
} from 'semantic-ui-react'
import {
  ContentStyle,
  SpecialDiv,
  SpecialDivBorder,
} from './../styles/CommonStyles'
import axios from 'axios';

const bookOptions  = [
  {
    text: 'Audio file',
    value: 'audio'
  },
  {
    text: 'Book thumbnail',
    value: 'image'
  },
  {
    text: 'Book PDF',
    value: 'pdf'
  }
]

class AddFile extends Component {
  state = {
    uploadTo: 'Upload media to..',
    subFolder: '',
    upload: false,
    file: ''
  }

  handleDropdownChange = (e, data) => {
    this.setState({
      uploadTo: data.value,
      upload: true
    })
  }

  handleBookFolder = (e, data) => {
    this.setState({
      subFolder: data.value
    })
  }

  handleMultipleFolders = () => {
    if (this.state.uploadTo === 'Books' && this.state.upload === true) {
      return <Dropdown placeholder='Select book subfolder' fluid selection options={bookOptions} onChange={this.handleBookFolder} />
    }
  }

  response = (e) => {
    this.setState({file: e.file.name})
    e.state = null
  }


  onDrop = async (acceptedFiles) => {
    console.log(acceptedFiles)
    const book = acceptedFiles[0]

    // Read file contents, this uses a promise to make it wait for the file contents
    let base64File = await this.readUploadedFileAsBase64(acceptedFiles[0])

    // Join the file contents to the book object
    let bookWFile = Object.assign(book, {file: base64File});

    axios.post('/api/books', { book: bookWFile }) // somehow the problem has to be how I am passing the object to the controller
    // can I remove the [0] - the array is needed when I step through. However, how do I get the object correctly in the controller?
    // axios.post('/api/books', { book: (acceptedFiles) })

    // if (this.state.uploadTo === 'Books' && this.state.subFolder === 'pdf' && this.state.upload === true) {
      //   axios.post('/api/books', { file: acceptedFiles })
      // }

  }

  readUploadedFileAsBase64 = (inputFile) => {
    const temporaryFileReader = new FileReader();

    return new Promise((resolve, reject) => {
      temporaryFileReader.onerror = () => {
        temporaryFileReader.abort();
        reject(new DOMException("Problem parsing input file."));
      };

      temporaryFileReader.onload = () => {
        resolve(temporaryFileReader.result);
      };
      temporaryFileReader.readAsDataURL(inputFile);
    });
  };



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
      },
      {
        text: 'Postbases',
        value: 'Postbases'
      }
    ]

    // const s3Url = 'https://alutiiq-language-resources.s3.amazonaws.com'

    return(
      <div>
        <SpecialDiv>
          <Header>
            <Icon name='file outline' size='large' color='grey' /> Add Files
          </Header>
          <Divider />

          <ContentStyle>
            Select which database the files belong with, then select the folder, then drop and add the appropriate file. <i>Kayagnaituq.</i>
          </ContentStyle>
        </SpecialDiv>

        <SpecialDiv>
          <Form>
            <Dropdown placeholder={this.state.uploadTo} fluid selection options={csvOptions} onChange={this.handleDropdownChange} />
            <Divider hidden />
            { this.handleMultipleFolders() }
            <Divider hidden />
            {/* { this.handleDropzone() } */}

            <SpecialDivBorder>
              <Dropzone
                onDrop={this.onDrop}
                accept="image/png, image/jpg, application/pdf, audio/mpeg, text/csv"
                multiple>
              {({getRootProps, getInputProps, isDragActive, isDragReject}) => (
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    {!isDragActive && 'Click here or drop a file to upload!'}
                    {isDragActive && !isDragReject && "Drop it like it's hot!"}
                    {isDragReject && "File type not accepted, sorry!"}
                  </div>
                )}
              </Dropzone>

            </SpecialDivBorder>

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

export default AddFile