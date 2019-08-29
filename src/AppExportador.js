import React from 'react';
import logo from './logo.svg';
import ComponenteControlado from './fundamentals/ComponenteControlado'
import './App.css';

import ComponenteComFuncao from './fundamentals/ComponenteComEstado';
import {
    default as CompAmigo,  
    Comp1 as Comp123, 
    Comp2 
  } from './fundamentals/ComponenteExportador'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <ComponenteControlado />
          <Comp123 />
          <CompAmigo />
      </header>
    </div>
  );
}

export default App;


// mounting, updating e umounting

// mounting - construtor, 
            // getDerivedStateFromProps, 
            // render, 
            // componentDidMount
// updating - getDerivedStateFromProps
//            shouldComponentUpdate
//            render,
//            getSnapshotBeforeUpdate
//            compomenDidUpdate
// umounting - componentWillUnmount