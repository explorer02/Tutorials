import React, { Component } from 'react';

class ClassMouse extends Component {
	constructor(props) {
		super(props);

		this.state = {
			x: 0,
			y: 0
		};
	}
	logMousePosition = (ev) => this.setState({ x: ev.clientX, y: ev.clientY });
	componentDidMount() {
		window.addEventListener('mousemove', this.logMousePosition);
	}
	componentWillUnmount() {
		window.removeEventListener('mousemove', this.logMousePosition);
	}
	render() {
		return <div></div>;
	}
}

export default ClassMouse;
