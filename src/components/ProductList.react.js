import React from 'react';
import { Link } from 'react-router';
import ViewActions from '../actions/ViewActions';

class ProductList extends React.Component {
	constructor(props) {
		super(props);
	}
	maximizeList(event) {
		var $list = $(".listContainer");
		$list.stop().animate({width: "250px"}, 100, () => {
			$list.find(".title").fadeIn(100);
		});
	}
	minimizeList(event) {
		var $list = $(".listContainer");
		$list.find(".title").fadeOut(100, () => {
			$list.stop().animate({width: "80px"}, 400);
		});
	}
	productChanged() {
		ViewActions.productChanged(self.props.params.productId);
	}
	render() {
		var self = this;
		return (
			<div className="listContainer" onMouseEnter={self.maximizeList} onMouseLeave={self.minimizeList}>
				{self.props.products.map((product, index) => {
					return (
						<Link to={"/products/" + product.id} key={index}>
							<div className={ "listItem" + ((self.props.selectedProduct ? self.props.selectedProduct.id : "") === product.id ? " active" : "") }>
								<div className="image pull-left" style={{backgroundImage: "url(" + product.image + ")"}}></div>
								<span className="title pull-left notShown">{product.title}</span>
								<div className="clearfix"></div>
							</div>
						</Link>
					);	
				})}
			</div>
		);
	}
}

export default ProductList;