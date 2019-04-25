import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { 
  Menu, 
  Button,
  Sidebar, 
  Responsive,
  Icon,
} from 'semantic-ui-react'
import ProtectedRoute from './ProtectedRoute'
import NoMatch from './NoMatch'
import Home from './Home'
import NavBar from './NavBar'
import Curriculum from './Curriculum';
import Materials from './Materials'
import Dictionary from './Dictionary'
import Songs from './Songs'
import Classes from './Classes'
import HistoryNews from './HistoryNews'
import AdminMenu from './AdminMenu'
import AuthRoute from './AuthRoute'
import Login from './Login'
import Register from './Register'
import Footer from './Footer'
import Books from './materials/Books'
import PostersGames from './materials/PostersGames'
import Videos from './materials/Videos'
import Stories from './materials/Stories'
import OutsideLinks from './materials/OutsideLinks' 
import Upload from './admin/Upload'
import Add from './admin/AddFile'
import FetchUser from './FetchUser'

const menuPad = {
  padding: '1em',
}

class App extends Component {
  state = { visible: false }

  handleButtonClick = () => this.setState({ visible: !this.state.visible })

  handleSidebarHide = () => this.setState({ visible: false })

  render() {
    return(
      <div>
        <Responsive minWidth={767}>
          <NavBar />
        </Responsive>
        
        <Responsive maxWidth={766}>
          <div style={menuPad}>
            <Menu.Item 
              as={Button}
              onClick={this.handleButtonClick}
              alt='icon to access the menu'
              alignContent='center'
              icon
            >
              <Icon name='align justify'/>
            </Menu.Item>
          </div>
        </Responsive>

          {/* <Sidebar.Pushable as={Segment}> */}
            <Sidebar
              as={Menu}
              animation='overlay'
              icon='labeled'
              onHide={this.handSidebarHide}
              vertical
              onClick={this.handleSidebarHide}
              visible={this.state.visible}
              width='thin'
            >
              <Link to='/'>
                <Menu.Item>
                  Home
                </Menu.Item>
              </Link>
              <Link to='/curriculum'>
                <Menu.Item>
                  Curriculum
                </Menu.Item>
              </Link>
              <Link to='/materials'>
                <Menu.Item>
                  Materials
                </Menu.Item>
              </Link>
              <Link to='/dictionary'>
                <Menu.Item>
                  Dictionary
                </Menu.Item>
              </Link>
              <Link to='/songs'>
                <Menu.Item>
                  Songs
                </Menu.Item>
              </Link>
              <Link to='/classes'>
                <Menu.Item>
                  Classes
                </Menu.Item>
              </Link>
              <Link to='/happenings'>
                <Menu.Item>
                  History & News
                </Menu.Item>
              </Link>
            </Sidebar>
        <FetchUser>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/curriculum" component={Curriculum} />
            <Route exact path="/materials" component={Materials} />
            <Route exact path="/dictionary" component={Dictionary} />
            <Route exact path="/songs" component={Songs} />
            <Route exact path="/classes" component={Classes} />
            <Route exact path="/happenings" component={HistoryNews} />
            <Route exact path="/books" component={Books} />
            <Route exact path="/postersandgames" component={PostersGames} />
            <Route exact path="/stories" component={Stories} />
            <Route exact path="/videos" component={Videos} />
            <Route exact path="/links" component={OutsideLinks} />
            
        {/* ROUTES BELOW ARE ONLY ACCESSIBLE TO SITE ADMINS */}
                  
            {/* <ProtectedRoute exact path='/kasainaq' component={AdminLogin} /> */}
            <AuthRoute exact path='/login' component={Login} />
            <ProtectedRoute exact path='/admin' component={AdminMenu} />
            <ProtectedRoute exact path='/register' component={Register} /> 
            <ProtectedRoute exact path='/upload' component={Upload} />
            <ProtectedRoute exact path='/add' component={Add} />
            {/* <ProtectedRoute exact path='/media' component={Media} /> */}

        {/* ERROR PAGE  */}
        
            <Route component={NoMatch} />
          </Switch>
          <Footer />
        </FetchUser>
      </div>
    )
  }
}

export default App
