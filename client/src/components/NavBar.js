import React, { Component } from 'react';
import { Menu, Segment, MenuItem } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../reducers/user';

class NavBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })


  rightNavs = () => {
    const { user, dispatch, history } = this.props;

    if (user.id) {
      return (
        <Menu.Menu position='right'>
          <Menu.Item
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
          <Menu.Item 
            name='home'   
            active={activeItem === 'home'} 
            onClick={this.handleItemClick} 
            as={Link} to='/' 
          />
          <Menu.Item 
            name='curriculum' 
            active={activeItem === 'curriculum'} 
            onClick={this.handleItemClick} 
            as={Link} to='/curriculum' 
          />
          <MenuItem
            name='learning_materials'
            active={activeItem === 'learning_materials'}
            onClick={this.handleItemClick}
            as={Link} to="/materials"
          />     
          <MenuItem
            name='dictionary'
            active={activeItem === 'dictionary'}
            onClick={this.handleItemClick}
            as={Link} to="/dictionary"
          />  
            <MenuItem
            name='songs'
            active={activeItem === 'songs'}
            onClick={this.handleItemClick}
            as={Link} to="/songs"
          />  
            <MenuItem
            name='classes'
            active={activeItem === 'classes'}
            onClick={this.handleItemClick}
            as={Link} to="/classes"
          />  
            <MenuItem
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
