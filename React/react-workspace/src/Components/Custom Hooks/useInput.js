import { useState } from 'react';

function useInput(initialValue) {
	const [value, setValue] = useState(initialValue);
	const reset = () => setValue(initialValue);
	const bind = { value, onChange: (ev) => setValue(ev.target.value) };
	return [value, bind, reset];
}

export default useInput;
