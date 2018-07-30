import React from 'react'
import { Switch, Route } from 'react-router-dom'
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
import OutsideLinks from './OutsideLinks'
import Workbook from './curriculum/Workbook'

const App = () => (
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/curriculum" component={Curriculum} />
      <Route exact path="/materials" component={Materials} />
      <Route exact path="/dictionary" component={Dictionary} />
      <Route exact path="/songs" component={Songs} />
      <Route exact path="/classes" component={Classes} />
      <Route exact path="/happenings" component={HistoryNews} />
      <Route exact path="/links" component={OutsideLinks} />
      
      <Route exact path="/workbook" component={Workbook} />
      
      <ProtectedRoute exact path="/kasainaq" component={AdminLogin} />
      <AuthRoute exact path='/login' component={Login} />
      <AuthRoute exact path='/register' component={Register} />

      <Route component={NoMatch} />
    </Switch>
    <Footer />
  </div>
)

export default App
