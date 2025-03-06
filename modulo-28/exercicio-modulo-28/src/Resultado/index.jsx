const Resultado = ({ nome, imc }) => {
    const getClassificacao = (imc) => {
      if (imc < 18.5) return 'Abaixo do peso';
      if (imc >= 18.5 && imc < 24.9) return 'Peso normal';
      if (imc >= 25 && imc < 29.9) return 'Sobrepeso';
      if (imc >= 30 && imc < 34.9) return 'Obesidade grau 1';
      if (imc >= 35 && imc < 39.9) return 'Obesidade grau 2';
      return 'Obesidade grau 3';
    };
  
    return (
      <div className="resultado">
        <h2>Resultado</h2>
        <p>Nome: {nome}</p>
        <p>IMC: {imc}</p>
        <p>Classificação: {getClassificacao(imc)}</p>
      </div>
    );
  };
  
  export default Resultado;