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
    visible: false
  }

  componentDidMount() {
    if (this.props.items)
      this.setState({...this.props.items})
  }

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    const { dispatch, toggleForm } = this.props
    e.preventDefault()
    let itemData = {...this.state}
    dispatch(addItem(itemData))
    toggleForm()
  }

  handleForm = () => {
    const { user } = this.props
    const { title, body, buttonUrl, buttonName } = this.state

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
                    label='Insert the content here. Keep it brief'
                    name='body'
                    value={body}
                    placeholder='Content...'
                    required
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
        // <div>
        // <SpecialDiv>
        //   <SpecialDiv>
        //      <Header textAlign='center'>
        //        <SubHeader>
        //          {item.title}
        //        </SubHeader>
        //          <Divider />
        //      </Header>
        //    </SpecialDiv>

        //     <SubHeaderContent>
        //       With a new site, we are bound to make mistakes, miss things, or have errors. If you find one, tell us about it! Either, send us an email by typing tribe at afognak dot org from your personal email. Or, click the button below!
        //       <br />
        //       <br />
        //     </SubHeaderContent>
        //   </SpecialDiv>
        //     <Button size='big' href={'mailto:tribe@afognak.org'}>
        //       Email us!
        //     </Button>
        //  </div>
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

// const mapStateToProps = (state) => {
//   return {
//     items: state.items
//   }
// }

export default connect()(ItemForm)