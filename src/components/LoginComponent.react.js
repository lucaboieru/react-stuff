import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col, Input, ButtonInput } from 'react-bootstrap';
import ViewActions from '../actions/ViewActions';

class LoginComponent extends React.Component {
	constructor(props) {
		super(props);

		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleSubmit(event) {
		event.preventDefault();

		ViewActions.handleLogin({
			username: this.refs.username.getValue(),
			password: this.refs.password.getValue()
		});
	}
	render() {
		return (
			<Col xs={6} xsOffset={3} className="loginContainer">
				<h2>Login</h2>
				<form onSubmit={this.handleSubmit}>
					<Input ref="username" type="text" label="Username" placeholder="Enter username" />
					<Input ref="password" type="password" label="Password" placeholder="Enter password" />
					<ButtonInput type="submit" value="Login" />
				</form>
			</Col>
		);
	}
}

export default LoginComponent;