import React from 'react'
//引入路由
import {Route, Switch} from 'react-router-dom'
import Loadable from 'react-loadable'
import Loading from '../../router/loading'
import homeCon from '../../container/homeCon'
// import helloCon from '../../container/helloCon'
import aboutCon from '../../container/aboutCon'
import { Hello } from '../hello'


const ArticlesComponent = Loadable({
    loader: () => import('../Articles'),
    loading: Loading,
});

export default class ContentMain extends React.Component {
	render() {
		return (
			<div>
				<Switch>
					<Route exact path='/' component={ArticlesComponent}/>
					<Route exact path='/articles' component={ArticlesComponent}/>
					<Route exact path='/hello' component={Hello}/>
					<Route exact path='/home' component={homeCon}/>
					<Route exact path='/about' component={aboutCon}/>
				</Switch>
			</div>
		)
	}
}