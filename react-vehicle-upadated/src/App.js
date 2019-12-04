import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import login from './components/login';
import 'bootstrap/dist/css/bootstrap.css'

import Welcome from './components/Welcome'
import Dealer from './components/Dealer'
import User from './components/User'
import ADD_UPDATE_MAINTAINANCE from './components/ADD_UPDATE_MAINTAINANCE'
import login_updated from './components/login_updated';




class App extends Component {
 
  render() {
    return (
      <div>
       <Router>
         <Switch>
         <Route exact path='/' component={Welcome} />
         <Route exact path = '/login' component = {login_updated}/>
         <Route exact path = '/dealer' component = {Dealer}/>
         <Route exact path = '/user/:uid' component = {User}/>
         <Route exact path = '/update_add/:uid/:mid' component = {ADD_UPDATE_MAINTAINANCE}/>
         <Route exact path = '/update_add/:uid/' component = {ADD_UPDATE_MAINTAINANCE}/>
         
         </Switch>
       </Router>
      
        </div>
        );
  }
}
export default App;