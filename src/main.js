import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import MainComponent from './components/MainComponent.react';

ReactDOM.render(
	<Router history={createBrowserHistory()}>
		<Route path="/">
			<Route path="/products/:productId" component={MainComponent} />
		</Route>
	</Router>,
	document.getElementById('mainContainer')
);