import React from 'react';
import { Link } from 'react-router';
import ViewActions from '../actions/ViewActions';
import API from '../api/API';

import { Row, Col } from 'react-bootstrap';

class ProductList extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		var self = this;
		if (!self.props.products) {
			return (<div></div>);
		}
		return (
			<Col xs={6} xsOffset={3} className="listContainer">
				<Row>
					{self.props.products.map((product, index) => {
						return (
							<Link to={"/products/" + product.id} key={index}>
								<Col sm={6} className="listItem">
									<div className="image" style={{backgroundImage: "url(" + product.image + ")"}}></div>
									<span className="title">{product.title}</span>
									<div className="clearfix"></div>
								</Col>
							</Link>
						);	
					})}
				</Row>
			</Col>
		);
	}
}

export default ProductList;