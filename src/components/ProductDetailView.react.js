import React from 'react';
import ViewActions from '../actions/ViewActions';

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
			<div className="col-xs-6 col-xs-offset-3 productContainer">
				<div className="row">
					<div className="col-xs-12">
						<h3>{product.title}</h3>
						<p>{product.description}</p>
					</div>
					<div className="col-sm-6">
						<img src={product.image} className="thumbnail wide" />
					</div>
					<div className="col-sm-6">
						<div className="form-group">
							<label>Model</label>
							<select onChange={self.modelChanged} value={product.models[product.models.indexOf(self.props.selectedModel)].id} className="form-control">
								{product.models.map((model, index) => {
									return (
										<option key={index} value={model.id}>{model.type}</option>
									);
								})}
							</select>
						</div>
						<div className="mb-xs">
							<strong>{"Price: $" + self.props.selectedModel.price}</strong>
							<strong className="pull-right">{"Inventory: " + this.props.selectedModel.inventory}</strong>
						</div>
						<div onClick={self.addToCart.bind(self)} className="btn btn-success wide addButton" disabled={ modelsLeft ? "" : "disabled"}>
							{ modelsLeft ? "+ Add to cart" : "Sold out"}
						</div>
					</div>
					<div className="clearfix"></div>
				</div>
			</div>
		);
	}
}

export default ProductDetailView;