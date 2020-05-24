import React, { Component } from 'react';
import ComponentF from './ComponentF';
import { UserContext } from './userContext';

class ComponentE extends Component {
	static contextType = UserContext;
	render() {
		return (
			<div>
				<ComponentF />
				Hello from Component E: {this.context}
			</div>
		);
	}
}
export default ComponentE;
