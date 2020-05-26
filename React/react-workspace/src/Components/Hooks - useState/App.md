import React from 'react';
import './App.css';
import ClassCounter from './Components/Hooks - useState/ClassCounter';
import HookCounter from './Components/Hooks - useState/HookCounter';
import HookCounterTwo from './Components/Hooks - useState/HookCounterTwo';
import HookCounterThree from './Components/Hooks - useState/HookCounterThree';
import HookCounterFour from './Components/Hooks - useState/HookCounterFour';
function App() {
return (
<div className="App">
{/_ <ClassCounter /> _/}
{/_ <HookCounter /> _/}
{/_ <HookCounterTwo /> _/}
{/_ <HookCounterThree /> _/}
<HookCounterFour />
</div>
);
}

export default App;
