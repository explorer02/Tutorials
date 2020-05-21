import React, { Component } from 'react';
import withCounter from './withCounter';

class ClickCounter extends Component {
	static getDerivedStateFromProps = (nextProps, prevState) => {
		console.log('QQQ');
		console.log(this.props, nextProps);
	};
	render() {
		console.log(this.props.name);
		return (
			<div>
				<button onClick={this.props.incrementCount}>
					{this.props.name + ' '}
					Clicked {this.props.count} times
				</button>
			</div>
		);
	}
	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log(prevProps.incrementCount === this.props.incrementCount);
	}
}

export default withCounter(ClickCounter, 5);
