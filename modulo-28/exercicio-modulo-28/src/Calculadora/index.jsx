import { useState } from 'react';

const Calculadora = ({ onCalcularIMC }) => {
  const [nome, setNome] = useState('');
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (altura <= 0 || peso <= 0) {
      alert('Por favor, insira valores válidos para altura e peso.');
      return;
    }

    const alturaMetros = altura / 100;
    const imcCalculado = (peso / (alturaMetros * alturaMetros)).toFixed(2);
    onCalcularIMC({ nome, imc: imcCalculado });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          required
          placeholder="Digite seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="number"
          required
          placeholder="Digite a altura (cm)"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />
        <input
          type="number"
          required
          placeholder="Digite o peso (kg)"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />
        <button type="submit">Calcular IMC</button>
      </form>
    </div>
  );
};

export default Calculadora;