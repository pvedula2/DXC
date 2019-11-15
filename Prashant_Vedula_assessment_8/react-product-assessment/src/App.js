import React, { Component } from 'react';
import ListProductComponent from './components/ListProductComponent';
import './App.css' 
import {Switch,Route} from 'react-router-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import ProductComponent from './components/ProductComponent';
import Home from './components/Home';
import SearchByName from './components/SearchByName';


class App extends Component {
  render() {
    return (
      <div>
        
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/product' component={ListProductComponent} />
            <Route path='/productupdate/:prodID' component={ProductComponent} />
            <Route path='/productadd' component={ProductComponent} />
            <Route path='/searchByName' component={SearchByName} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;