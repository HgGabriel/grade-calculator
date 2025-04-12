import React from 'react';
import styles from './Calculator.module.css';
import { useState } from 'react';

const Calculator: React.FC = () => {
  const [apol1, setApol1] = useState<number>();
  const [apol2, setApol2] = useState<number>();
  const [objetiva, setObjetiva] = useState<number>();
  const [discursiva, setDiscursiva] = useState<number>();
  const [notaFinal, setNotaFinal] = useState<number>();

  const calcularNotaFinal = () => {
    if (apol1 != null && apol2 != null && objetiva != null && discursiva != null) {
      const notaFinal = (apol1 + apol2) * 0.1 + objetiva * 0.3 + discursiva * 0.5;
      setNotaFinal(notaFinal);
    }
}
  return (
    <div className={styles.calculatorContainer}>
      <img src="./uninter-logo.png" alt="Uninter Logo" className="logo" />
      <h1>Calculadora de Notas</h1>
      <div className="form-container">
        <div className="form-group">
          <label htmlFor="nota-apol1">Nota do Apol - 1</label>
          <input type="number" id="nota-apol1" value={apol1 ?? ''} onChange={(e) => setApol1(Number(e.target.value))} />

          <label htmlFor="nota-apol2">Nota do Apol - 2</label>
          <input type="number" id="nota-apol2" value={apol2 ?? ''} onChange={(e) => setApol2(Number(e.target.value))} />

          <label htmlFor="nota-obj">Nota da Objetiva</label>
          <input type="number" id="nota-obj" value={objetiva ?? ''} onChange={(e) => setObjetiva(Number(e.target.value))} />

          <label htmlFor="nota-dis">Nota da Discursiva</label>
          <input type="number" id="nota-dis" value={discursiva ?? ''} onChange={(e) => setDiscursiva(Number(e.target.value))} />
        </div>

        <button className="btn-calcular" onClick={calcularNotaFinal}>Calcular Nota Final</button>

        {notaFinal !== undefined && (
          <div className="result-container">
            <h2>Resultado</h2>
            <p>Nota Final: <strong>{notaFinal.toFixed(2)}</strong></p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Calculator;
