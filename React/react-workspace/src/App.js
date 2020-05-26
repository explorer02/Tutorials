import React from 'react';
import './App.css';
import ClassCounterOne from './Components/Hooks - useEffect/ClassCounterOne';
import HookCounterOne from './Components/Hooks - useEffect/HookCounterOne';
import ClassMouse from './Components/Hooks - useEffect/ClassMouse';
import HookMouse from './Components/Hooks - useEffect/HookMouse';
import MouseContainer from './Components/Hooks - useEffect/MouseContainer';
import IntervalClassCounter from './Components/Hooks - useEffect/IntervalClassCounter';
import IntervalHookCounter from './Components/Hooks - useEffect/IntervalHookCounter';
function App() {
	return (
		<div className="App">
			{/* <ClassCounterOne /> */}
			{/* <HookCounterOne /> */}
			{/* <ClassMouse /> */}
			{/* <HookMouse /> */}
			{/* <MouseContainer /> */}
			{/* <IntervalClassCounter /> */}
			<IntervalHookCounter />
		</div>
	);
}

export default App;
