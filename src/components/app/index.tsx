import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import {createBrowserHistory} from 'history';
import Home from '../home';
import Header from '../header';
import Hello from '../hello';
const browserHistory = createBrowserHistory()

export default class App extends React.Component {
    render() {
        return (<div>App Container
            <Router history={browserHistory}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/header/" component={Header} />
                    <Route path="/hello/" component={Hello} />
                </Switch>
            </Router>
        </div>);
    }
}