import React, { Component } from 'react';
import '../SCSS/Login_style.scss';
import { Container } from 'react-bootstrap';
import logo from "../images/logo.png"
export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            password:"",
            userName:""
        }
    }
    onChange =(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    submitLogin=()=>{
        console.log("this is the user name :",this.state.userName)
        console.log("this is the password :",this.state.password)
    }
	render() {
		return (
			<Container className="Login-main-container">
				<div className="login-content-container">
					<div className="logo-image-container">
						 <img className="logo-image" src={logo} alt="./tuman.png"/> 
					</div>
					<div className="login-details-container">
						<div className="login-username">
							<input className="username" name="userName" value={this.state.userName} type="text" placeholder="Login" onChange={this.onChange} />
						</div>
						<div className="login-password">
							<input className="password" name="password" value={this.state.password} type="text" placeholder="password" onChange={this.onChange} />
						</div>
					</div>
                    <div className="login-submit-btn-container">
                        <button className="submit-btn" onClick={this.submitLogin}>Login</button>
                        <a href="#" className="forgot-password-link">Password forgotten?</a>
                    </div>
				</div>
			</Container>
		);
	}
}
