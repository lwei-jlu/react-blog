// import React from 'react'
// import ReactDOM from 'react-dom'
// import Hello from './src/components/hello'
// import { Router, Route } from 'react-router'
// import {createBrowserHistory} from 'history';
// import Header from './src/components/header';
// const browserHistory = createBrowserHistory()
// ReactDOM.render (
//   <Router history={browserHistory}>
//     <Route path="/" component={Hello}>
//       {/* <Route path="about" component={Header} /> */}
//     </Route>
//     <Route path="/header" component={Header}>
//       {/* <Route path="about" component={Header} /> */}
//     </Route>
//   </Router>,
//   document.getElementById("root")
// )


import React from 'react'
import ReactDom from 'react-dom';
import App from './src/components/app';

ReactDom.render(<App />, document.getElementById('root'));