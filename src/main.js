import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import LoginStore from './stores/LoginStore';

import MainComponent from './components/MainComponent.react';
import ProductDetailView from './components/ProductDetailView.react';
import ProductList from './components/ProductList.react';
import AboutComponent from './components/AboutComponent.react';
import LoginComponent from './components/LoginComponent.react';

function requireAuth(nextState, replaceState) {
	if (!LoginStore.isLoggedIn()) {
		replaceState({nextPathname: nextState.location.pathname}, '/login')
	}
}

ReactDOM.render(
	<Router history={createBrowserHistory()}>
		<Route path="/" component={MainComponent}>
			<IndexRoute component={ProductList} />
			<Route path="products/:productId" component={ProductDetailView} />
			<Route path="about" component={AboutComponent} onEnter={requireAuth} />
			<Route path="login" component={LoginComponent} />
		</Route>
	</Router>,
	document.getElementById('mainContainer')
);