import React, { useState } from 'react';
import useInput from './useInput';

function UserForm() {
	const [firstName, bindFirstName, resetFirstName] = useInput('');
	const [lastName, bindLastName, resetLastName] = useInput('');

	const submitHandler = (ev) => {
		ev.preventDefault();
		document.title = firstName + ' ' + lastName;
	};
	return (
		<div>
			<form onSubmit={submitHandler}>
				<div>
					<label>First Name </label>
					<input type="text" {...bindFirstName} />
				</div>
				<div>
					<label>Last Name </label>
					<input type="text" {...bindLastName} />
				</div>

				<input type="submit" />
				<button onClick={() => resetFirstName() || resetLastName()}>
					Clear
				</button>
			</form>
		</div>
	);
}

export default UserForm;
