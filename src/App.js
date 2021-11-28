// import './App.css';
import React from 'react';
import Home from './Home';
import About from './About';
import {Route,Routes,Link} from 'react-router-dom';

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </div>
    
  );
}

export default App;
