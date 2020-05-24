PortalDemo.js
App.js

import React from 'react';
import './App.css';
import PortalDemo from './Components/PortalDemo';
function App() {
return (
<div className="App">
{/_ <h1>Hello World</h1> _/}
<PortalDemo />
</div>
);
}

export default App;

index.htm

<div id="root"></div>
  <div id="portal-root"></div>
