Cat.js
Mouse.js
Renderprops.js
App.js

import React from 'react';
import './App.css';
import { MouseTracker } from './Components/RenderProps';
import MouseWithCat from './Components/Cat';
function App() {
return (
<div className="App">
{/_ <MouseTracker /> _/}
{/_ <MouseWithCat /> _/}
<MouseTracker />
</div>
);
}

export default App;
