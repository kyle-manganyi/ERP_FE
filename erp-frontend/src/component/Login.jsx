import React, { Component } from 'react';
import '../SCSS/Login_style.scss';
import { Container } from 'react-bootstrap';
import logo from '../images/logo.png';
export default class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			password: '',
            userName: '',
            errorCheck:false
		};
	}
	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};
	submitLogin = () => {
		let sha1 = require('sha1');
		let hash = sha1(this.state.password);
		if (this.state.password != '' && this.state.userName != '') {
		} else {
            this.setState({ errorCheck:true}); 
		}
		this.setState({ password: '', userName: '' });
	};
	render() {
		return (
			<Container className="Login-main-container">
				<div className="login-content-container">
					<div className="logo-image-container">
						<img className="logo-image" src={logo} alt="./tuman.png" />
					</div>
					<div className="login-details-container">
						<div className="login-username">
							<input
								className="username"
								name="userName"
								value={this.state.userName}
								type="text"
								placeholder="Login"
								onChange={this.onChange}
							/>
						</div>
						<div className="login-password">
							<input
								className="password"
								name="password"
								value={this.state.password}
								type="text"
								placeholder="password"
								onChange={this.onChange}
							/>
						</div>
					</div>
					<div className="login-submit-btn-container">
						<button className="submit-btn" onClick={this.submitLogin}>
							Login
						</button>
						<a href="#" className="forgot-password-link">
							Password forgotten?
						</a>
					</div>
				</div>
				<div className="password-usename-error-msg-container">
					{this.state.errorCheck==true?<div className="login-error-msg">Bad value for login or password</div>:null}
                    
					<div className="support-contact">
						For any support contact contact@halstrategic.com or mody.diop@halstrategic.com
					</div>
				</div>
			</Container>
		);
	}
}
