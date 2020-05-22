import React, { Component } from 'react';
import withCounter from './withCounter';

class HoverCounter extends Component {
	render() {
		console.log('ZZZZ');
		return (
			<div>
				<h2 onMouseOver={this.props.incrementCount}>
					Hovered {this.props.count} times
				</h2>
			</div>
		);
	}
}

export default withCounter(HoverCounter, 10);
