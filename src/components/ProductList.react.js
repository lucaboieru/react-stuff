import React from 'react';
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
	productChanged(id) {
		ViewActions.productChanged(id);
	}
	render() {
		var self = this;
		return (
			<div className="listContainer" onMouseEnter={self.maximizeList} onMouseLeave={self.minimizeList}>
				{self.props.products.map((product, index) => {
					return (
						<div key={index} className={ "listItem" + ((self.props.selectedProduct ? self.props.selectedProduct.id : "") === product.id ? " active" : "") } onClick={self.productChanged.bind(self, product.id)}>
							<div className="image pull-left" style={{backgroundImage: "url(" + product.image + ")"}}></div>
							<span className="title pull-left notShown">{product.title}</span>
							<div className="clearfix"></div>
						</div>
					);	
				})}
			</div>
		);
	}
}

export default ProductList;