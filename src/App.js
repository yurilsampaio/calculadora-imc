import './App.css';
import Header from './components/Header/Header';
import Input from './components/Input/Input';
import Button from './components/Button/Button';
import { useState } from 'react';


function App() {

  const [showResult, setShowResult] = useState(false);
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [imc, setImc] = useState(0);
  const [descImc, setDescImc] = useState('');
  const [classResult, setClassResult] = useState('');

  function formatarValor(valor) {
    let valorNumerico = valor.replace(/[^\d]/g, '');

    if (valorNumerico.length > 2) {
      valorNumerico = `${valorNumerico.slice(0, -2)}.${valorNumerico.slice(-2)}`
    }
    return Number(valorNumerico);
  }

  function handleChangePeso(event) {
    const novoPeso = formatarValor(event.target.value);
    setPeso(novoPeso);
  };

  function handleChangeAltura(event) {
    const novaAltura = formatarValor(event.target.value);
    setAltura(novaAltura);
  };

  function calcular() {
    if (peso === 0 || altura === 0) {
      alert('Informe valores validos para fazer o calculo e tente novamente!');
      return;
    }

    const imc = (peso / (altura * altura)).toFixed(2);

    if (imc < 18.5) {
      setDescImc('Abaixo do normal');
      setClassResult('resultado result-yellow');
    } else if (imc > 18.5 && imc < 24.9) {
      setDescImc('Normal');
      setClassResult('resultado result-green');
    } else if (imc > 25 && imc < 29.9) {
      setDescImc('Sobrepeso');
      setClassResult('resultado result-yellow');
    } else if (imc > 30 && imc < 34.9) {
      setDescImc('Obesidade grau I');
      setClassResult('resultado result-red');
    } else if (imc > 35 && imc < 39.9) {
      setDescImc('Obesidade grau II');
      setClassResult('resultado result-red');
    } else if (imc > 40) {
      setDescImc('Obesidade grau III');
      setClassResult('resultado result-red');
    }

    setImc(imc);
    setShowResult(true);
  }

  function limpar() {
    setShowResult(false);
    setImc(0);
    setDescImc('');
    setPeso(0);
    setAltura(0);
  }

  return (
    <div className="App">
      <Header/>

      <div className='calculadora'>
        <label htmlFor='input-peso'>Peso:</label>
        <Input 
          type='number'
          inputMode='numeric'
          pattern="[0-9]*"
          id='input-peso'
          value={peso}
          onChange={handleChangePeso}
        />

        <label htmlFor='input-altura'>Altura:</label>
        <Input 
          type='number'
          inputMode='numeric'
          pattern="[0-9]*"
          id='input-altura'
          value={altura}
          onChange={handleChangeAltura}
        />
        <div className='div-botoes'>
          <Button 
            className='btn-calcular'
            title='Calcular'
            onClick={calcular}
          />

          <Button
            className='btn-limpar'
            title='Limpar'
            onClick={limpar}
          />
        </div>

      </div>

      {showResult && (
        <div className={classResult}>
          <h2>Seu IMC é: {imc}</h2>
          <h3>{descImc}</h3>
        </div>
      )}

    </div>
  );
}

export default App;
