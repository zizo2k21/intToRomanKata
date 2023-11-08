import React, { useState } from 'react';
import './App.css';
import intToRoman from './functions/intToRoman';

function App() {
  const [number, setNumber] = useState<number | null>(null);
  const [romanNumeral, setRomanNumeral] = useState<string>('');
  const [runtimeError, setRuntimeError] = useState<string>(''); // Annotation de type ajoutée pour 'runtimeError'

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputNumber = parseInt(event.target.value, 10);
    setNumber(inputNumber);

    try {
      if (!isNaN(inputNumber)) {
        setRomanNumeral(intToRoman(inputNumber));
        setRuntimeError(''); // Réinitialise les erreurs de runtime en cas de succès
      } else {
        setRomanNumeral('');
        setRuntimeError(''); // Réinitialise les erreurs de runtime en cas de saisie incorrecte
      }
    } catch (error) {
      if (typeof error === 'string') { // Vérifie que 'error' est bien une chaîne de caractères
        setRuntimeError(error);
      } else {
        setRuntimeError('Number must be positive or integer or below 3999'); // Gestion par défaut si 'error' n'est pas une chaîne
      }
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
        {!runtimeError &&<p>Résultat en chiffres romains : {romanNumeral}</p>}
        {runtimeError && <div className="error-message">{runtimeError}</div>}
      </header>
    </div>
  );
}

export default App;
