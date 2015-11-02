import React from 'react';
import ViewActions from '../actions/ViewActions';

import { Button, Image, Row, Col, Input } from 'react-bootstrap';

class ProductDetailView extends React.Component {
	constructor(props) {
		super(props);
	}
	modelChanged(event) {
		ViewActions.modelChanged(event.target.value);
	}
	addToCart() {
		var id = this.props.selectedModel.id;
		var toAdd = {
			id: id,
			name: this.props.selectedProduct.title,
			type: this.props.selectedModel.type,
			price: this.props.selectedModel.price,
			quantity: this.props.cartContent[id] ? this.props.cartContent[id].quantity + 1 : 1
		};
		ViewActions.addToCart(toAdd);
		ViewActions.updateCartVisibility(true);
	}
	render() {
		var self = this;

		var product = self.props.selectedProduct;
		// product hasn't loaded yet
		if (!product) {
			return (<div></div>);
		}

		var selectedModel = self.props.selectedModel;
		var modelsLeft = true;
		if (self.props.cartContent[selectedModel.id])
			modelsLeft = selectedModel.inventory - self.props.cartContent[selectedModel.id].quantity;

		return (
			<Col xs={6} xsOffset={3} className="productContainer">
				<Row>
					<Col xs={12}>
						<h3>{product.title}</h3>
						<p>{product.description}</p>
					</Col>
					<Col sm={6}>
						<Image src={product.image} className="wide" thumbnail />
					</Col>
					<Col sm={6}>
						<Input type="select" label="Model" onChange={self.modelChanged} value={product.models[product.models.indexOf(self.props.selectedModel)].id}>
  							{product.models.map((model, index) => {
								return (
									<option key={index} value={model.id}>{model.type}</option>
								);
							})}
						</Input>
						<div className="mb-xs">
							<strong>{"Price: $" + self.props.selectedModel.price}</strong>
							<strong className="pull-right">{"Inventory: " + this.props.selectedModel.inventory}</strong>
						</div>
						<Button bsStyle="success" onClick={self.addToCart.bind(self)} className="wide addButton" disabled={modelsLeft ? false : true}>
							{ modelsLeft ? "+ Add to cart" : "Sold out"}
						</Button>
					</Col>
				</Row>
			</Col>
		);
	}
}

export default ProductDetailView;