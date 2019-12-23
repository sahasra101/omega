import React, { Component } from "react";
import Nav from "../components/Nav"

class Dashboard extends Component {
	render () {
    	return (
			<div>
				<Nav />

				<div>
					<h1>Welcome to the Research Page</h1>
					<h5>Here you can find new information.</h5>
				</div>

			</div>
    	);
	};
}

export default Dashboard;
