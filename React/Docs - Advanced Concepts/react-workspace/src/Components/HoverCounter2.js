import React, { Component } from 'react';

class HoverCounter2 extends Component {

	render() {
		return (
			<h2 onMouseOver={this.props.incrementCount}>
				Hovered {this.props.count} times
			</h2>
		);
	}
}

export default HoverCounter2;
