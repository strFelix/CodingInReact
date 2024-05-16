import React, { useState } from 'react';
import './App.css';
import NovoConteudo from './NovoConteudo';
import NovoConteudoAdicional from './NovoConteudoAdicional'

function App() {

  const[str,setStr] = useState("Hello, World!");
  
  function handleClick()
  {
   setStr("Palavra alterada por evento do botão!") 
  }

  return (
    <div className="App">
      <h1>{str}</h1>
      <NovoConteudo value="parametro adicional"></NovoConteudo>
      <NovoConteudoAdicional></NovoConteudoAdicional>
      <button onClick={() => handleClick()}>Clique para alterar!</button>
    </div>
  );
}

export default App;
