//the e argument is short for event
var React = require('react');
var ReactDOM = require('react-dom');

//configures routes for our single app
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');


//load in foundation in js (wew lad)
require('style!css!foundation-sites/dist/css/foundation.min.css')
$(document).foundation();

//require for our custom app.css
require('style!css!sass!applicationStyle');

ReactDOM.render(
	// use the name attribute plus ="" to pass values into the render function
	// the path route will be rendered if the route is '/' then 'about'
		<Router history={hashHistory}>
			<Route path="/" component={Main}>
				
			</Route>
		</Router>,
		document.getElementById('app')
);