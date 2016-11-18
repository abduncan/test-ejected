import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import App2 from './App2';
import './index.css';

import { Route,Router, browserHistory, IndexRoute } from 'react-router'


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path='/app2' component={App2} />
  </Router>,
  document.getElementById('root')
);
