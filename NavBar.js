import React, { Component } from 'react'
import { Menu, Segment, MenuItem } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class NavBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return(
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
    )
  }
}

export default NavBar