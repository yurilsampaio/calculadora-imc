import './App.css';
import Header from './components/Header/Header';
import Input from './components/Input/Input';

function App() {
  return (
    <div className="App">
      <Header/>
      <div id='calculadora'>
        <Input 
          type='number'
          inputMode='numeric'
          pattern="[0-9]*"
        />
        <Input 
          type='number'
          inputMode='numeric'
          pattern="[0-9]*"
        />
      </div>
      <div id='resultado'>

      </div>
    </div>
  );
}

export default App;
