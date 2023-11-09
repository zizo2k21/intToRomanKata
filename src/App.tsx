import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [inputRomanNumber, setInputRomanNumber] = useState<string>('');
  const [runtimeRomanError, setRuntimeRomanError] = useState<string>('');
  const [resultRomanNumber, setResultRomanNumber] = useState<number | null>(null);
  const [localStorageData, setLocalStorageData] = useState<{ key: string; value: string }[]>([]);

  const handleRomanInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputRomanNumber(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let value : any;
  
    if (localStorage.getItem(inputRomanNumber)) {
      const stringValue = localStorage.getItem(inputRomanNumber);
      value = parseInt(stringValue || '0', 10);
      setResultRomanNumber(value);
    } else {
      try {
        const response = await axios.post('https://api-romannumber.onrender.com/romanToInt', { str: inputRomanNumber });
        const result = response.data;
        value = result.int;
        setRuntimeRomanError('');
        setResultRomanNumber(value);
        localStorage.setItem(inputRomanNumber, value.toString());
  
        // Mettez à jour l'état localStorageData avec la nouvelle entrée
        setLocalStorageData((prevData) => [...prevData, { key: inputRomanNumber, value: value.toString() }]);
      } catch (error) {
        if (typeof error === 'string') {
          setRuntimeRomanError(error);
        } else {
          setRuntimeRomanError('Must be a roman number or inferior to 3999');
        }
      }
    }
  };

  useEffect(() => {
    // Charger les données du localStorage au chargement de la page
    const keys = Object.keys(localStorage);
    const data = keys.map((key) => ({ key, value: localStorage.getItem(key) || '' }));
    setLocalStorageData(data);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="conversion-panel">
          <div className="input-panel">
            <h1 className="title">Conversion en nombre arabe</h1>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Entrez un chiffre romain"
                value={inputRomanNumber}
                onChange={handleRomanInputChange}
              />
              <button type="submit">Convertir</button>
            </form>
            {!runtimeRomanError && <p>Résultat en nombre : {resultRomanNumber}</p>}
            {runtimeRomanError && <div className="error-message">{runtimeRomanError}</div>}
          </div>
          <div className="localStorage-panel">
            <h2>Jeu de données</h2>
            <ul>
              {localStorageData.map((item) => (
                <li key={item.key}>
                  Romain: {item.key}, Arabe: {item.value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
