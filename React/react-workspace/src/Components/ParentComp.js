import React, { Component } from 'react';
import RegComp from './RegComp';
import PureComp from './PureComp';
import MemoComp from './MemoComp';

class ParentComp extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: 'Ajay'
		};
	}

	render() {
		console.log('****************Parent Component****************');
		return (
			<div>
				Parent Component
				<RegComp name={this.state.name} />
				<PureComp name={this.state.name} />
				<MemoComp name={this.state.name}/>
			</div>
		);
	}
	componentDidMount() {
		setInterval(() => {
			this.setState({ name: 'Ajay' });
		}, 2000);
	}
}

export default ParentComp;
