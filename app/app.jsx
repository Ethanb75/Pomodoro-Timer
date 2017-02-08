//the e argument is short for event
var React = require('react');
var ReactDOM = require('react-dom');

//configures routes for our single app
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var About = require('About');
var Timer = require('Timer');
var Pomodoro = require('Pomodoro');
var StopWatch = require('StopWatch');


$(document).foundation();

//require for our custom app.css
require('style!css!sass!applicationStyle');

ReactDOM.render(
	// use the name attribute plus ="" to pass values into the render function
	// the path route will be rendered if the route is '/' then 'about'
		<Router history={hashHistory}>
			<Route path="/" component={Main}>
				<Route path="about" component={About} />
				<Route path="stopWatch" component={StopWatch} />
				<Route path="pom" component={Pomodoro} />
				<IndexRoute component={Timer} />
			</Route>
		</Router>,
		document.getElementById('app')
);