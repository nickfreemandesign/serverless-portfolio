import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import 'core-js/es6/map';
import 'core-js/es6/set';

import App from './App';


ReactDOM.render(
  <Router>
    <Switch>
      <App/>
    </Switch>
  </Router>
, document.getElementById('app'));
