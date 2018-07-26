import React, { Component } from 'react';
import { Menu, MenuItem } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../reducers/user';
import styled from 'styled-components'

const Menuitems = styled(MenuItem)`
  align-content: center;
  font-size: 1.5em;
  color: #A9A9A9;
  `

class NavBar extends Component {
  state = { activeItem: 'home' }
  
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  // export const handleNavBar = (e) => { this.setState({ activeItem: this.props.location.path }) }


  rightNavs = () => {
    const { user, dispatch, history } = this.props;

    if (user.id) {
      return (
        <Menu.Menu position='right'>
          <MenuItem
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
        <Menu pointing secondary>
          <Menuitems 
            name='home'   
            active={activeItem === 'home'} 
            onClick={this.handleItemClick} 
            as={Link} to='/' 
          />
          <Menuitems 
            name='curriculum' 
            active={activeItem === 'curriculum'} 
            onClick={this.handleItemClick} 
            as={Link} to='/curriculum' 
          />
          <Menuitems 
            name='learning_materials'
            active={activeItem === 'learning_materials'}
            onClick={this.handleItemClick}
            as={Link} to="/materials"
          />     
          <Menuitems 
            name='dictionary'
            active={activeItem === 'dictionary'}
            onClick={this.handleItemClick}
            as={Link} to="/dictionary"
          />  
            <Menuitems 
            name='songs'
            active={activeItem === 'songs'}
            onClick={this.handleItemClick}
            as={Link} to="/songs"
          />  
            <Menuitems 
            name='classes'
            active={activeItem === 'classes'}
            onClick={this.handleItemClick}
            as={Link} to="/classes"
          />  
            <Menuitems 
            name='happenings'
            active={activeItem === 'happenings'}
            onClick={this.handleItemClick}
            as={Link} to="/happenings"
          />         
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default withRouter(connect(mapStateToProps)(NavBar));
