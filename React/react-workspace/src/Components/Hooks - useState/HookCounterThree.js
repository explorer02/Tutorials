import React, { useState } from 'react';

function HookCounterThree() {
	const [name, setName] = useState({ firstName: '', lastName: '' });
	return (
		<form>
			<input
				type="text"
				value={name.firstName}
				onChange={(ev) => setName({ ...name, firstName: ev.target.value })}
			/>
			<br />
			<input
				type="text"
				value={name.lastName}
				onChange={(ev) => setName({ ...name, lastName: ev.target.value })}
			/>
			<h2>Your first name is: {name.firstName}</h2>
			<h2>Your last name is: {name.lastName}</h2>
		</form>
	);
}

export default HookCounterThree;
