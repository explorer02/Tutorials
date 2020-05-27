import React, { useState } from 'react';
import useCounter from './useCounter';

function CounterTwo() {
	const [count, increment, decrement, reset] = useCounter();
	return (
		<div>
			<h1>Count: {count}</h1>
			<button onClick={increment}>Increment</button>
			<button onClick={decrement}>Decrement</button>
			<button onClick={reset}>Reset</button>
		</div>
	);
}

export default CounterTwo;
