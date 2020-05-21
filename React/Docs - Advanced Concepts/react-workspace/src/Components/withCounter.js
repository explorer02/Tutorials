import React from 'react';

const withCounter = (WrappedComponent, num) => {
	class WithCounter extends React.Component {
		constructor(props) {
			super(props);
			this.state = {
				count: 0
			};
		}
		incrementCount = () => {
			this.setState((state) => ({ count: state.count + num }));
		};
		render() {
			return (
				<WrappedComponent
					count={this.state.count}
					incrementCount={this.incrementCount}
					{...this.props}
				/>
			);
		}
	}
	return WithCounter;
};

export default withCounter;
