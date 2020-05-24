App.js

import React from 'react';
import './App.css';
import ComponentC from './Components/Context/ComponentC';
import { UserProvider } from './Components/Context/userContext';
function App() {
return (
<div className="App">
{/_ <h1>Hello World</h1> _/}
<UserProvider value="AJAY">
<ComponentC />
</UserProvider>
</div>
);
}

export default App;
