import { useState } from 'react';
import './App.css';
import Calculadora from './Calculadora';
import Resultado from './Resultado';

function App() {
  const [resultado, setResultado] = useState(null);

  const handleCalcularIMC = (dados) => {
    setResultado(dados);
  };

  return (
    <>
      <Calculadora onCalcularIMC={handleCalcularIMC} />
      {resultado && <Resultado nome={resultado.nome} imc={resultado.imc} />}
    </>
  );
}

export default App;