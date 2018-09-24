import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { 
  Menu, 
  Button,
  Sidebar, 
  Responsive,
  Icon,
} from 'semantic-ui-react'
import { SpecialDiv } from './styles/CommonStyles'
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
import AdminLogin from './AdminLogin'
import AuthRoute from './AuthRoute'
import Login from './Login'
import Register from './Register'
import Footer from './Footer'

class App extends Component {
  state = { visible: false }

  handleButtonClick = () => this.setState({ visible: !this.state.visible })

  handleSidebarHide = () => this.setState({ visible: false })

  render() {
    return(
      <div>
        <Responsive minWidth={768}>
          <NavBar />
        </Responsive>
        
        <Responsive maxWidth={767}>
          <SpecialDiv>
            <Menu.Item 
              as={Button}
              onClick={this.handleButtonClick}
              alt='icon to access the menu'
              alignContent='center'
              icon
            >
              <Icon name='align justify'/>
            </Menu.Item>
          </SpecialDiv>
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
                  Happenings
                </Menu.Item>
              </Link>
            </Sidebar>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/curriculum" component={Curriculum} />
          <Route exact path="/materials" component={Materials} />
          <Route exact path="/dictionary" component={Dictionary} />
          <Route exact path="/songs" component={Songs} />
          <Route exact path="/classes" component={Classes} />
          <Route exact path="/happenings" component={HistoryNews} />
                
          <ProtectedRoute exact path="/kasainaq" component={AdminLogin} />
          <AuthRoute exact path='/login' component={Login} />
          <AuthRoute exact path='/register' component={Register} />
    
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default App
