import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import intToRoman from './functions/intToRoman'; 

function App() {
  const [number, setNumber] = useState<number | null>(null); 
  const [romanNumeral, setRomanNumeral] = useState<string>(''); 

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputNumber = parseInt(event.target.value, 10);
    setNumber(inputNumber);
    if (!isNaN(inputNumber)) {
      setRomanNumeral(intToRoman(inputNumber));
    } else {
      setRomanNumeral(''); 
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <input
          type="number"
          placeholder="Entrez un nombre"
          onChange={handleInputChange}
        />
        <p>Résultat en chiffres romains : {romanNumeral}</p>
      </header>
    </div>
  );
}

export default App;
