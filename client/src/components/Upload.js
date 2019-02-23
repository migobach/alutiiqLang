import React, { Component } from 'react'
import {
  Header,
  Form,
  Button,
} from 'semantic-ui-react'
import {
  SpecialDiv,
  ContentStyle,
  Pointer,
} from './styles/CommonStyles'


class Upload extends Component {
  state = {
    updateDatabase: '',
    upload: false
  }
  
  handleSubmit = () => {
    
  }

  handleDropdownChange = (e, data) => {
    this.setState({updateDatabase: data.value, upload: true})
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
          <Form.Group widths='equal'>
            <Form.Dropdown
              selection
              label='Database type'
              value={csvOptions}
              placeholder='Database type'
              required
              options={csvOptions}
              onChange={this.handleDropdownChange}
            />
           
           {/* <Pointer>
             <Button type='submit' onSubmit={this.handleSubmit}>
                Upload
             </Button>
             <Button type='button'>
                Cancel
             </Button>
           </Pointer> */}

          </Form.Group>
        </Form>
      </SpecialDiv>
      </div>
    )
  }
}

export default Upload



