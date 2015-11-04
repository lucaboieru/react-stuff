import React from 'react';

import MenuComponent from './MenuComponent.react';
import Cart from './Cart.react';

import API from '../api/API';
import ViewActions from '../actions/ViewActions';

import ProductStore from '../stores/ProductStore';
import CartStore from '../stores/CartStore';
import LoginStore from '../stores/LoginStore';

import { Grid, Row } from 'react-bootstrap';

class MainComponent extends React.Component {
	constructor(props) {
		super(props);

		// set initial state
		this.state = this.getCurrentState();

		// bind this to custom methods
		this.dataChanged = this.dataChanged.bind(this);
		this.getCurrentState = this.getCurrentState.bind(this);

		// listen for data changes
		ProductStore.addChangeListener(this.dataChanged);
		CartStore.addChangeListener(this.dataChanged);
		LoginStore.addChangeListener(this.dataChanged);

		// call the api to get product list
		API.getProductList();
	}
	shouldComponentUpdate(nextProps, nextState) {
		if (!this.state.isLoggedIn && nextState.isLoggedIn) {
			var nextPathname = this.props.location.state ? this.props.location.state.nextPathname : "";
			this.props.history.replaceState(null, nextPathname ? nextPathname : '/');
			return false;
		} else if (this.state.isLoggedIn && !nextState.isLoggedIn) {
			this.props.history.replaceState(null, '/login');
			return false;
		}
		return true;
	}
	dataChanged() {
		this.setState(this.getCurrentState());
	}
	getCurrentState() {
		return {
			isLoggedIn: LoginStore.isLoggedIn(),
			products: ProductStore.getProductList(),
			selectedProduct: ProductStore.getSelectedProduct(),
			selectedModel: ProductStore.getSelectedModel(),
			cartContent: CartStore.getCartContent(),
			cartTotal: CartStore.getTotal(),
			cartVisibility: CartStore.getCartVisibility(),
		};
	}
	render() {
		var self = this;
		return (
			<Grid fluid={true}>
				<Row>
					<MenuComponent isLoggedIn={self.state.isLoggedIn} />
					<Cart cartContent={self.state.cartContent} cartVisibility={self.state.cartVisibility} cartTotal={self.state.cartTotal}/>
					{
						self.props.children && React.cloneElement(self.props.children, {
							isLoggedIn: self.state.isLoggedIn,
							products: self.state.products,
							selectedProduct: self.state.selectedProduct,
							selectedModel: self.state.selectedModel,
							cartContent: self.state.cartContent,
							cartTotal: self.state.cartTotal,
							cartVisibility: self.state.cartVisibility
						})
					}
				</Row>
			</Grid>
		);
	}
}

export default MainComponent;