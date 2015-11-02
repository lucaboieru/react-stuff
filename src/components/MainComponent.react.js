import React from 'react';
import ProductList from './ProductList.react';
import ProductDetailView from './ProductDetailView.react';
import Cart from './Cart.react';
import API from '../api/API';

import ViewActions from '../actions/ViewActions';

import ProductStore from '../stores/ProductStore';
import CartStore from '../stores/CartStore';

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

		ViewActions.productChanged(this.props.params.productId);

		// call the api to get product list
		API.getProductList();
	}
	dataChanged() {
		this.setState(this.getCurrentState());
	}
	getCurrentState() {
		return {
			products: ProductStore.getProductList(),
			selectedProduct: ProductStore.getSelectedProduct(),
			selectedModel: ProductStore.getSelectedModel(),
			cartContent: CartStore.getCartContent(),
			cartTotal: CartStore.getTotal(),
			cartVisibility: CartStore.getCartVisibility(),
			id: this.props.params.productId
		};
	}
	componentWillReceiveProps(nextProps) {
		var id = nextProps.params.productId;
		ViewActions.productChanged(id);
	}
	render() {
		var self = this;
		return (
			<Grid fluid={true}>
				<Row>
					<ProductList products={self.state.products} selectedProduct={self.state.selectedProduct} />
					<ProductDetailView id={self.state.id} cartContent={self.state.cartContent} products={self.state.products} selectedProduct={self.state.selectedProduct} selectedModel={self.state.selectedModel} />
					<Cart selectedModel={this.state.selectedModel} cartContent={self.state.cartContent} cartVisibility={self.state.cartVisibility} total={this.state.cartTotal}/>
				</Row>
			</Grid>
		);
	}
}

export default MainComponent;