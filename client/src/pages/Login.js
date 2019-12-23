import React, { Component } from "react";
import Nav from "../components/Nav"
import LoginForm from "../components/LoginForm";

class Login extends Component {
	render () {
    	return (
			<div>
				<Nav/>

				<div>
					Welcome to the Home Login Page
				</div>
				<LoginForm/>
			</div>
    	);
	};
}

export default Login;