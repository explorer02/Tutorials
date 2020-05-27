import React from 'react';
import './App.css';
import DocTitleOne from './Components/Custom Hooks/DocTitleOne';
import DocTitleTwo from './Components/Custom Hooks/DocTitleTwo';
import CounterOne from './Components/Custom Hooks/CounterOne';
import CounterTwo from './Components/Custom Hooks/CounterTwo';
import UserForm from './Components/Custom Hooks/UserForm';
function App() {
return (
<div className="App">
{/_ <DocTitleOne />
<DocTitleTwo /> _/}
{/_ <CounterOne />
<CounterTwo /> _/}
<UserForm />
</div>
);
}

export default App;
