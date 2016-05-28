import React from 'react';
import { IndexRoute, Router, Route, Link, browserHistory } from 'react-router'

import App from './components/App'
import About from './components/About'
import NotFound from './components/NotFound'

const routes = (
  <Router history={browserHistory}>

    <Route path="/">
      <IndexRoute component={App} />
      <Route path="about" component={About} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
)

export default routes