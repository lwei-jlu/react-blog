import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import {createBrowserHistory} from 'history';
import Header from '../header';
import homeCon from '../../container/homeCon';
import helloCon from '../../container/helloCon';
import './style.scss';
const browserHistory = createBrowserHistory()

export default class App extends React.Component {
    render() {
        return (<div>App Container
            <Router history={browserHistory}>
                <Switch>
                    <Route path="/" exact component={homeCon} />
                    <Route path="/header/" component={Header} />
                    <Route path="/hello/" component={helloCon} />
                </Switch>
            </Router>
        </div>);
    }
}