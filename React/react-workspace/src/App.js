import React from 'react';
import './App.css';
import RefsDemo from './Components/RefsDemo';
import FocusInput from './Components/FocusInput';
import FRParentInput from './Components/FRParentInput';
function App() {
	return (
		<div className="App">
			{/* <RefsDemo/> */}
			{/* <FocusInput/> */}
			<FRParentInput />
		</div>
	);
}

export default App;
