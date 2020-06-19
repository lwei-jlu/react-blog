import React from 'react'
//引入路由
import {Route, Switch} from 'react-router-dom'
import Articles from '../Articles'
import Hello from '../hello'
import About from '../about'

export default class ContentMain extends React.Component {
	render() {
		return (
			<div>
				<Switch>
					<Route exact path='/' component={Articles}/>
					<Route exact path='/articles' component={Articles}/>
					<Route exact path='/hello' component={Hello}/>
					<Route exact path='/about' component={About}/>
				</Switch>
			</div>
		)
	}
}