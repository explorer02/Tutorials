import { useState } from 'react';

function useCounter(initVal = 0, value = 1) {
	const [count, setCount] = useState(initVal);
	const increment = () => setCount(count + value);
	const decrement = () => setCount(count - value);
	const reset = () => setCount(initVal);
	return [count, increment, decrement, reset];
}

export default useCounter;
