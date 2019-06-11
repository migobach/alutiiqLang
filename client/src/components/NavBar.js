import React, { Component } from 'react';
import { Menu, MenuItem } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../reducers/user';
import styled from 'styled-components'

const Menuitems = styled(MenuItem)`
  align-content: center;
  font-size: 1.25em;
  color: #A9A9A9;
  `
export const handleNavBar = (e) => { this.setState({ activeItem: this.props.location.pathname }) }

class NavBar extends Component {
  state = { activeItem: 'home' }
  
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  componentDidMount() {
    this.setState({ activeItem: this.props.location.pathname})
  }

  componentWillUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname)
      this.setState({ activeItem: prevProps.location.pathname})
  }


  rightNavs = () => {
    const { user, dispatch, history } = this.props
    const { activeItem } = this.state
    
    if (user.id) {
      return (
        <Menu.Menu position='right'>
            <Menuitems
              name='Admin'
              active={activeItem === '/admin'}
              onClick={this.handleItemClick}
              as={Link} to='/admin'
            />
          <Menuitems
            name='Logout'
            onClick={() => dispatch(handleLogout(history))}
          />
        </Menu.Menu>
      );   
    }
  }

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing secondary stackable>
          <Menuitems 
            name='home'   
            active={activeItem === '/'} 
            onClick={this.handleItemClick} 
            as={Link} to='/' 
          />
          <Menuitems 
            name='curriculum' 
            active={activeItem === '/curriculum'} 
            onClick={this.handleItemClick} 
            as={Link} to='/curriculum' 
          />
          <Menuitems 
            name='materials'
            active={activeItem === '/materials'}
            onClick={this.handleItemClick}
            as={Link} to="/materials"
          />     
          <Menuitems 
            name='dictionary'
            active={activeItem === '/dictionary'}
            onClick={this.handleItemClick}
            as={Link} to="/dictionary"
          />  
            <Menuitems 
            name='songs'
            active={activeItem === '/songs'}
            onClick={this.handleItemClick}
            as={Link} to="/songs"
          />  
            <Menuitems 
            name='classes'
            active={activeItem === '/classes'}
            onClick={this.handleItemClick}
            as={Link} to="/classes"
          />  
            <Menuitems 
            active={activeItem === '/happenings'}
            onClick={this.handleItemClick}
            as={Link} to="/happenings"
          >
          History & News
          </Menuitems>   

          { this.rightNavs() }      
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default withRouter(connect(mapStateToProps)(NavBar));
