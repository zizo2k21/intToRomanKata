import React, { useState } from 'react';
import './App.css';
import intToRoman from './functions/intToRoman';
import romanToInt from './functions/romanToInt';

function App() {
  const [number, setNumber] = useState<number | null>(null);
  const [romanNumeral, setRomanNumeral] = useState<string>('');
  const [romanNumber, setRomanNumber] = useState<string>('');
  const [runtimeError, setRuntimeError] = useState<string>('');
  const [runtimeRomanError, setRuntimeRomanError] = useState<string>('');
  const [resultRomanNumber, setResultRomanNumber] = useState<number | null>(null);


  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputNumber = parseInt(event.target.value, 10);
    setNumber(inputNumber);

    try {
      if (!isNaN(inputNumber)) {
        setRomanNumeral(intToRoman(inputNumber));
        setRomanNumber('');
        setRuntimeError('');
      } else {
        setRomanNumeral('');
        setRomanNumber('');
        setRuntimeError('Number must be positive or integer or below 3999');
      }
    } catch (error) {
      if (typeof error === 'string') {
        setRuntimeError(error);
      } else {
        setRuntimeError('Une erreur est survenue.');
      }
    }
  };

  const handleRomanInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputRomanNumber = event.target.value;
    setRomanNumber(inputRomanNumber);

    try {
      const result = romanToInt(inputRomanNumber);
      setRomanNumber(inputRomanNumber);
      setRuntimeRomanError('');
      if (!isNaN(result)) {
        setResultRomanNumber(result);
      }
    } catch (error) {
      if (typeof error === 'string') {
        setRuntimeRomanError(error);
      } else {
        setRuntimeRomanError('Une erreur est survenue.');
      }
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="conversion-panel">
          <div className="input-panel">
            <h1 className="title">Conversion en chiffres romains</h1>
            <input
              type="number"
              placeholder="Entrez un nombre"
              onChange={handleInputChange}
            />
            {!runtimeError && <p>Résultat en chiffres romains : {romanNumeral}</p>}
            {runtimeError && <div className="error-message">{runtimeError}</div>}
          </div>
          <div className="input-panel">
          <h1 className="title">Conversion en chiffres romains</h1>
            <input
              type="text"
              placeholder="Entrez un chiffre romain"
              onChange={handleRomanInputChange}
            />
            {!runtimeRomanError && <p>Résultat en nombre : {resultRomanNumber}</p>}
            {runtimeRomanError && <div className="error-message">{runtimeRomanError}</div>}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
