import './App.css';
import React from 'react';
import Breadcrumb from './Breadcrumb';
import Nodes from './Nodes';
function App() {
  return (
    <body>
        <h1>고양이 사진첩</h1>
        <main className="App">
          <Breadcrumb/>
          <Nodes/>
        </main>
    </body>
  );
}

export default App;
