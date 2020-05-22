import React from 'react';

export class Cat extends React.Component {
	render() {
		const mouse = this.props.mouse;
		return (
			<div
				style={{
					position: 'absolute',
					left: mouse.x,
					top: mouse.y,
					height: '40px',
					width: '40px',
					backgroundColor: 'red'
				}}
			/>
		);
	}
}

export default class MouseWithCat extends React.Component {
	constructor(props) {
		super(props);
		this.handleMouseMove = this.handleMouseMove.bind(this);
		this.state = { x: 0, y: 0 };
	}

	handleMouseMove(event) {
		this.setState({
			x: event.clientX,
			y: event.clientY
		});
	}

	render() {
		return (
			<div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
				{/*
          We could just swap out the <p> for a <Cat> here ... but then
          we would need to create a separate <MouseWithSomethingElse>
          component every time we need to use it, so <MouseWithCat>
          isn't really reusable yet.
        */}
				<Cat mouse={this.state} />
			</div>
		);
	}
}

class MouseTracker extends React.Component {
	render() {
		return (
			<div>
				<h1>Move the mouse around!</h1>
				<MouseWithCat />
			</div>
		);
	}
}
