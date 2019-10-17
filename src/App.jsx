import React, { Component } from "react";

import { hot } from "react-hot-loader/root";

class App extends Component {
	state = { items: [] };
	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/todos/")
			.then(response => response.json())
			.then(json => this.setState({ items: json }));
	}

	render() {
		const { items } = this.state;

		return (
			<div>
				<center>
					<h1>Todo List</h1>
				</center>
				<div
					style={{
						border:'solid 1px',
						cursor: "pointer",
						display: "flex",
						flexDirection: "column",
						padding: 20,
						overflowY: "auto",
						height: "100vh",
					}}>
					{items &&
						items.map((e, i) => (
							<div
								key={i}
								style={{
									color: "red",
									border: "solid 1px black",
									borderRadius: "50px",
									padding: 20,
									marginTop: 10,
								}}>
								Title is {e.title}
							</div>
						))}
				</div>
			</div>
		);
	}
}

export default hot(App);
