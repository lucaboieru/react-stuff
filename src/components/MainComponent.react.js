import React from 'react';
import ProductList from './ProductList.react';
import ProductDetailView from './ProductDetailView.react';
import Cart from './Cart.react';
import API from '../api/API';

import ProductStore from '../stores/ProductStore';
import CartStore from '../stores/CartStore';

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
			cartVisibility: CartStore.getCartVisibility()
		};
	}
	render() {
		var self = this;
		return (
			<div>
				<ProductList products={self.state.products} selectedProduct={self.state.selectedProduct} />
				<ProductDetailView cartContent={self.state.cartContent} products={self.state.products} selectedProduct={self.state.selectedProduct} selectedModel={self.state.selectedModel} />
				<Cart selectedModel={this.state.selectedModel} cartContent={self.state.cartContent} cartVisibility={self.state.cartVisibility} total={this.state.cartTotal}/>
			</div>
		);
	}
}

export default MainComponent;