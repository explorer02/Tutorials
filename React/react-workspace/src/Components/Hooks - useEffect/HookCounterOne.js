import React, { useState, useEffect } from 'react';

function HookCounterOne() {
	const [count, setCount] = useState(0);
	const [name, setName] = useState('');
	useEffect(() => {
		console.log('Updating title');
		document.title = `Clicked ${count} times`;
	});
	return (
		<div>
			<input
				type="text"
				value={name}
				onChange={(ev) => this.setName(ev.target.value)}
			/>
			<button onClick={() => setCount(count + 1)}>Click {count} times</button>
		</div>
	);
}

export default HookCounterOne;
