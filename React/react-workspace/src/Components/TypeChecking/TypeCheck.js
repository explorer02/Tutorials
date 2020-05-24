import React, { Component } from 'react';
import PropTypes from 'prop-types';

function Child(props) {
	return <div>{props.children}</div>;
}
class TypeCheck extends Component {
	render() {
		return (
			<Child count={4} active={3} arr={['1', '2', '3']} qqq="111" num={11}>
				{/* <h1>Hello</h1> */}
				{/* <h1>Meoww</h1> */}
				{/* <h1>Bhoww</h1> */}
			</Child>
		);
	}
}
Child.propTypes = {
	count: PropTypes.number,
	active: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
	arr: PropTypes.arrayOf(PropTypes.string),
	qqq: PropTypes.string.isRequired,
	num: function (prop, propname, comp) {
		return prop[propname] < 10;
	}
	// children: PropTypes.element.isRequired
};
Child.defaultProps = {
	children: <h1>Bhowww</h1>
};
export default TypeCheck;
