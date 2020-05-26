import React, { useState, useEffect } from 'react';

function HookMouse() {
	const [x, setX] = useState(0);
	const [y, setY] = useState(0);
	const logMousePosition = (ev) => {
		console.log('Mouse Effect');
		setX(ev.clientX);
		setY(ev.clientY);
	};
	useEffect(() => {
		console.log('useEffect called');
		window.addEventListener('mousemove', logMousePosition);
		return () => {
			console.log('unmount called');
			window.removeEventListener('mousemove', logMousePosition);
		};
	}, []);
	return (
		<div>
			<p>X: {x}</p>
			<p>Y: {y}</p>
		</div>
	);
}

export default HookMouse;
