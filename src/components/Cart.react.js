import React from 'react';
import ViewActions from '../actions/ViewActions';

import { Button, Row, Col } from 'react-bootstrap';

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
			<Row className={("cartContainer" + (self.props.cartVisibility ? "" : " notShown"))}>
				{ Object.keys(products).map((product, index) => {
					return (
						<Col xs={12} key={index} className="cartProduct pb-s pt-s">
							<strong>{products[product].name}</strong>
							<div>
								<span>{products[product].type} x {products[product].quantity} - <strong>${ products[product].price * products[product].quantity }</strong></span>
							</div>
							<Button bsStyle="danger" bsSize="small" data-id={products[product].id} onClick={self.removeFromCart.bind(self, product)} className="wide">- Remove</Button>
						</Col>
					);
				})}
				<div className="clearfix"></div>
				<Col xs={12} className="cartTotalContainer">
					Total: ${self.props.cartTotal}
				</Col>
			</Row>
		);
	}
}

export default Cart;