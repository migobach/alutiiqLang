import React, { Component } from 'react';
import { 
  Header, 
  Form, 
  Button, 
  Segment, 
  Divider,
  Icon,
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { registerUser } from '../reducers/user';
import { setFlash } from '../reducers/flash';
import Flash from './Flash'

class Register extends Component {
  state = { name: '', email: '', password: '', passwordConfirmation: '' };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, passwordConfirmation } = this.state;
    const { dispatch, history } = this.props
    if (password === passwordConfirmation) {
      setTimeout(this.props.view, 5000)
      dispatch(registerUser({ name, email, password, passwordConfirmation }, history))
    } else dispatch(setFlash('Passwords do not match! Please try again', 'red'));
  }

  handleChange = (e) => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  }

  render() {
    const { name, email, password, passwordConfirmation } = this.state;

    return (
      <Segment basic>
        <Header>
          <Icon name='add user' size='large' color='grey'/>Register New Admin
        </Header>
          <Divider />

        <Flash />

        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label htmlFor='name'>Name</label>
            <input
              id='name'
              placeholder='Name'
              required
              value={name}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor='email'>Email</label>
            <input
              id='email'
              placeholder='Email'
              required
              value={email}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor='password'>Password</label>
            <input
              id='password'
              placeholder='Password'
              type='password'
              required
              value={password}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor='passwordConfirmation'>Password Confirmation</label>
            <input
              id='passwordConfirmation'
              placeholder='Password Confirmation'
              type='password'
              required
              value={passwordConfirmation}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Segment basic textAlign='center'>
            <Button type='submit'>Submit</Button>
          </Segment>
        </Form>

            <Divider />
            <Button type='button' onClick={this.props.view}>Cancel</Button>
      </Segment>
    );
  }
}

export default connect()(Register);
