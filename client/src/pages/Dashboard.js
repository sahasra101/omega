import React, { Component } from "react";
import Nav from "../components/Nav"

class Dashboard extends Component {
	render () {
    	return (
			<div>
				<Nav />

				<div>
					Welcome to the Dashboard Page
				</div>

				<a href="/buildworkout">
					Start Building Your Custom Workout!
				</a>

				

			</div>
    	);
	};
}

export default Dashboard;
