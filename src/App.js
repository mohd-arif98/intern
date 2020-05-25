import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';

import Home from './components/Home.js';
import ProductCart from './components/ProductCard.js';

function App() {
  return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route path='/' >
              <Home />
            </Route>
            <Route exact path='/cart' >
              <div> under construction</div>
            </Route>
          </Switch>
        </Router>
        
        
      </React.Fragment>
  );
}

export default App;
