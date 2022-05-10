import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Button,
  Divider,
  Form,
} from 'semantic-ui-react'
import {
  SpecialDiv,
} from './styles/CommonStyles'
import { addItem } from '../reducers/items'


class ItemForm extends Component {
  state = {
    title: '',
    body: '',
    buttonUrl: '',
    buttonName: '',
    page: '',
    location: '',
    contact: '',
    visible: false
  }

  componentDidMount() {
    if (this.props.items)
    console.log('in the form comp', this.props.items)
      this.setState({...this.props.items})
  }

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    const { dispatch, toggleForm } = this.props
    e.preventDefault()
      this.setState({ page: this.props.originPage }, () => {
        console.log('originPage:', this.props.originPage, '\n', {...this.state})
        let itemData = {...this.state}
        dispatch(addItem(itemData))
        toggleForm()
      }
    )
  }

  handleForm = () => {
    const { user } = this.props
    const { title, body, buttonUrl, buttonName, location, contact } = this.state

    if (user.id) {

      return(
        <SpecialDiv>
          <SpecialDiv>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group widths='equal'>
                <Form.Input
                  label='Put the new content title here.'
                  name='title'
                  value={title}
                  placeholder='Title...'
                  autoFocus={'true'}
                  required
                  onChange={this.handleChange}
                />
              </Form.Group>
                <Divider hidden/>
              <Form.Group widths='equal'>
                <Form.TextArea
                    label='Insert the content here. Keep it brief.'
                    name='body'
                    value={body}
                    placeholder='Content...'
                    required
                    onChange={this.handleChange}
                  />
              </Form.Group>

              <Form.Group widths='equal'>
                <Form.TextArea
                    label='If there is a location you want to share, put it here.'
                    name='location'
                    value={location}
                    placeholder='Ex: 612 Egan Way, Kodiak, AK 99615'
                    onChange={this.handleChange}
                  />
              </Form.Group>

              <Form.Group widths='equal'>
                <Form.TextArea
                    label='Is there a point of contact to share?'
                    name='contact'
                    value={contact}
                    placeholder='Call 907-486-4449 for more information'
                    onChange={this.handleChange}
                  />
              </Form.Group>

                <Divider hidden/>
              <Form.Group widths='equal'>
                <Form.Input
                  label='What is the link for the button?'
                  name='buttonUrl'
                  value={buttonUrl}
                  placeholder='https:www.example.com OR mailto:myemail@email.com'
                  required
                  onChange={this.handleChange}
                />
                <Form.Input
                  label='Button name'
                  name='buttonName'
                  value={buttonName}
                  placeholder='Button name...'
                  required
                  onChange={this.handleChange}
                />
              </Form.Group>
                {/* <Form.Checkbox
                  label='Is this segment going to be visible?'
                  value={visible}
                  onChange={this.handleBoolean}
                /> */}
                <Divider hidden />
              <Button type='submit'>
                Save
              </Button>
              <Button type='submit' onClick={this.props.toggleForm}>
                Cancel
              </Button>
            </Form>

          </SpecialDiv>

        </SpecialDiv>
      )
    } else {
      return(
        null
      )
    }
  }


    render() {
      return(
        <div>
          { this.handleForm() }
        </div>
      )
    }
}

export default connect()(ItemForm)