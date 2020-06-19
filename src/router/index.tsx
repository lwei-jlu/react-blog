import Hello from '../components/hello'
import About from '../components/about';
import Articles from '../components/Articles';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from '../components/app';
import * as React from 'react'

const routeLists = [
    {
        path: '/',
        component: Articles
    },
    {
      path: '/articles',
      component: Articles
    },
    {
        path: '/hello',
        component: Hello
    },
    {
        path: '/about',
        component: About
    },
];

const RouterMap = () => (
<BrowserRouter>
  <App>
    <Switch>
      {routeLists.map(item => (
        <Route
          key={item.path}
          exact={true}
          path={item.path}
          component={item.component}
        />
      ))}
    </Switch>
  </App>
</BrowserRouter>
)

export default RouterMap;