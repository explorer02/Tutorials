ClickCounter2.js
HoverCounter2.js
User.js
Counter.js

App.js

import React from 'react';
import './App.css';
import ClickCounter2 from './Components/ClickCounter2';
import HoverCounter2 from './Components/HoverCounter2';
import User from './Components/User';
import Counter from './Components/Counter';
function App() {
return (
<div className="App">
<Counter
render={(count, incrementCount) => {
return (
<ClickCounter2 count={count} incrementCount={incrementCount} />
);
}}
/>
<Counter
render={(count, incrementCount) => {
return (
<HoverCounter2 count={count} incrementCount={incrementCount} />
);
}}
/>
<User render={(isLoggedIn) => (isLoggedIn ? 'Ajay' : 'Guest')} />
</div>
);
}

export default App;
