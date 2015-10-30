import React from 'react';
import ViewActions from '../actions/ViewActions';

class Cart extends React.Component {
	constructor(props) {
		super(props);
	}
	removeFromCart(id) {
		ViewActions.removeFromCart(id);
		if (!Object.keys(this.props.cartContent).length) {
			ViewActions.updateCartVisibility(false);
		}
	}
	render() {
		var self = this;
		var products = self.props.cartContent;
		return (
			<div className={("row cartContainer" + (self.props.cartVisibility ? "" : " notShown"))}>
				{ Object.keys(products).map((product, index) => {
					return (
						<div key={index} className="cartProduct col-xs-12 pb-s pt-s">
							<strong>{products[product].name}</strong>
							<div>
								<span>{products[product].type} x {products[product].quantity} - <strong>${ products[product].price * products[product].quantity }</strong></span>
							</div>
							<div data-id={products[product].id} onClick={self.removeFromCart.bind(self, product)} className="btn btn-danger btn-sm wide">- Remove</div>
						</div>
					);
				})}
				<div className="clearfix"></div>
				<div className="cartTotalContainer col-xs-12">Total: ${self.props.total}</div>
			</div>
		);
	}
}

export default Cart;