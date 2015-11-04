import React from 'react';
import { Link } from 'react-router';
import { Col } from 'react-bootstrap';
import ViewActions from '../actions/ViewActions';

class MenuComponent extends React.Component {
	constructor(props) {
		super(props);
	}
	handleLogout() {
		ViewActions.handleLogout();
	}
	render() {
		return (
			<Col xs={12} className="menuContainer">
				<Link to="/">
					<img src="/res/logo.png" className="tall" />
				</Link>
				{
					this.props.isLoggedIn ?
					(<a onClick={this.handleLogout} className="pull-right">Logout</a>):
					(<Link to="/login" className="pull-right">Login</Link>)
				}
				<Link to="/about" className="pull-right">About</Link>
			</Col>
		);
	}
}

export default MenuComponent;