import React from 'react';
import logo from './logo.svg';
import './App.css';

// import ComponenteFuncao from "./fundamentals/ComponenteFuncao";
// import ComponenteClasse from "./fundamentals/ComponenteClasse";
// import Multicomponentes from "./fundamentals/ComponenteClasse";
import Lista from "./fundamentals/Lista";
import ComponenteFuncao from './fundamentals/ComponenteFuncao';

function App() {

  const data = [ "ReactJs", "VueJs", "Angular2+", "AngularJs", "EmberJs"]

  const gerarH4 = () => {    
         return data.map(dataItem => <ComponenteFuncao>{dataItem}</ComponenteFuncao>);      
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <Lista 
            data={data} 
          />
          {gerarH4()}
      </header>
    </div>
  );
}

export default App;
