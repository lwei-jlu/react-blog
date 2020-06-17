import React from 'react'
import ReactDOM from 'react-dom'
import Hello from './components/hello'
import { Router, Route } from 'react-router'
import createBrowserHistory from '../history';
const browserHistory = createBrowserHistory()
ReactDOM.render (
  <Router history={browserHistory}>
    <Route path="/" component={Hello}>
      {/* <Route path="about" component={About} />
      <Route path="inbox" component={Inbox}>
        <Route path="messages/:id" component={Message} />
      </Route> */}
    </Route>
  </Router>,
  document.getElementById("root")
)