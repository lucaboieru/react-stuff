import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router';

class AboutComponent extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Col xs={6} xsOffset={3} className="aboutContainer">
				<h2>About Us</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
				</p>
			</Col>
		);
	}
}

export default AboutComponent;