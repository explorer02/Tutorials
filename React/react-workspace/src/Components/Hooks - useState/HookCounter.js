import React, { useState } from 'react';

function HookCounter() {
	const [count, setCount] = useState(0);
	handleClick = () => setCount(count + 1);
	return (
		<div>
			<button onClick={handleClick}>Count: {count}</button>
		</div>
	);
}

export default HookCounter;
