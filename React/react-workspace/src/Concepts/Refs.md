Refs
RefsDemo.js

Refs on Class Components
Input.js
FocusInput.js

Forwarding Refs
FRInput.js
FRParentInput.js

App.js

import React from 'react';
import './App.css';
import RefsDemo from './Components/RefsDemo';
import FocusInput from './Components/FocusInput';
import FRParentInput from './Components/FRParentInput';
function App() {
return (
<div className="App">
{/_ <RefsDemo/> _/}
{/_ <FocusInput/> _/}
<FRParentInput />
</div>
);
}

export default App;
