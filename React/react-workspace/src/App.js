import React from 'react';
import './App.css';
import ComponentC from './Components/Context/ComponentC';
import { UserProvider } from './Components/Context/userContext';
function App() {
	return (
		<div className="App">
			{/* <h1>Hello World</h1> */}
			<UserProvider value="AJAY">
				<ComponentC />
			</UserProvider>
		</div>
	);
}

export default App;
