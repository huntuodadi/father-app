import React from 'react';
import { Route } from 'react-router'
import { Link, BrowserRouter } from 'react-router-dom';
import './App.css';

function ReactApp() {
  return (<div>react app</div>)
}
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to='/vue'>vue app</Link>
        <Link to='/react'>react app</Link>
        <Route path='/react' component={ReactApp} />
      </BrowserRouter>
    </div>
  );
}

export default App;
