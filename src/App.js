import React from 'react';
import logo from './logo.svg';
import './App.css';

import ComponenteComFuncao from './fundamentals/ComponenteComEstado';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <ComponenteComFuncao />
      </header>
    </div>
  );
}

export default App;
