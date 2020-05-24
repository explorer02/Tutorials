import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const portalElement = document.getElementById('portal-root');

class PortalDemo extends Component {
	constructor(props) {
		super(props);

		this.state = {
			count: 0
		};
	}
	handleClick = () => {
		this.setState((state) => ({ count: state.count + 1 }));
	};

	render() {
		return (
			<div>
				<p>Clicked {this.state.count} times</p>
				<Child handleClick={this.handleClick} />
			</div>
		);
	}
}

function Child(props) {
	return ReactDOM.createPortal(
		<button onClick={props.handleClick}>Click Me!!</button>,
		portalElement
	);
}

export default PortalDemo;
