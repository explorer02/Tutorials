import React, { useState, useEffect } from 'react';

function IntervalHookCounter() {
	const [count, setCount] = useState(0);
	const tick = () => {
		console.log('Tick Called');
		setCount((count) => count + 1);
	};

	useEffect(() => {
		const interval = setInterval(tick, 1000);
		return () => {
			console.log('unmount called');
			clearInterval(interval);
		};
	}, []);
	return <div>Count: {count}</div>;
}

export default IntervalHookCounter;
