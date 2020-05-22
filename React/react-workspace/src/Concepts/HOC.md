ClickCounter.js
HoverCounter.js
withCounter.js

App.js

import React from 'react';
import './App.css';
import ClickCounter from './Components/ClickCounter';
import HoverCounter from './Components/HoverCounter';
function App() {
return (
<div className="App">
<ClickCounter name="AJAY" />
<HoverCounter />
</div>
);
}

export default App;
