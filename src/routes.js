import React from 'react';
import { IndexRoute, Router, Route, Link, browserHistory } from 'react-router'

import App from './components/App'
import About from './components/About'

const routes = (
  <Router history={browserHistory}>

    <Route path="/">
      <IndexRoute component={App} />
      <Route path="about" component={About} />
    </Route>
  </Router>
)

export default routes