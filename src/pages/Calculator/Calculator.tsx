import React from "react";
import styles from "./Calculator.module.css";
import { useState } from "react";

const Calculator: React.FC = () => {
  const [apol1, setApol1] = useState<number>();
  const [apol1Peso, setApol1Peso] = useState<number>();

  const [apol2, setApol2] = useState<number>();
  const [apol2Peso, setApol2Peso] = useState<number>();

  const [objetiva, setObjetiva] = useState<number>();
  const [objetivaPeso, setObjetivaPeso] = useState<number>();

  const [discursiva, setDiscursiva] = useState<number>();
  const [discursivaPeso, setDiscursivaPeso] = useState<number>();

  const [notaFinal, setNotaFinal] = useState<number>();
  const calcularNotaFinal = () => {
    if (
      apol1 != null &&
      apol1Peso != null &&
      apol2 != null &&
      apol2Peso != null &&
      objetiva != null &&
      objetivaPeso != null &&
      discursiva != null &&
      discursivaPeso != null
    ) {
      const notaFinal =
        apol1 * apol1Peso +
        apol2 * apol2Peso +
        objetiva * objetivaPeso +
        discursiva * discursivaPeso;
      setNotaFinal(notaFinal);
    }
  };
  return (
    <div className={styles.calculatorContainer}>
      <img src="./uninter-logo.png" alt="Uninter Logo" className="logo" />
      <h1>Calculadora de Notas</h1>
      <div className="form-container">
        <div className="form-group">
          <label htmlFor="nota-apol1">Nota do Apol - 1</label>
          <div style={{ display: "flex", gap: "10px" }}>
            <input
              type="number"
              id="nota-apol1"
              value={apol1 ?? ""}
              onChange={(e) => setApol1(Number(e.target.value))}
            />
            <input
              type="number"
              id="apol1-peso"
              value={apol1Peso ?? ""}
              style={{ width: "80px" }}
              onChange={(e) => setApol1Peso(Number(e.target.value))}
            />
          </div>

          <label htmlFor="nota-apol2">Nota do Apol - 2</label>
          <div style={{ display: "flex", gap: "10px" }}>
            <input
              type="number"
              id="nota-apol2"
              value={apol2 ?? ""}
              onChange={(e) => setApol2(Number(e.target.value))}
            />
            <input
              type="number"
              id="apol2-peso"
              value={apol2Peso ?? ""}
              style={{ width: "80px" }}
              onChange={(e) => setApol2Peso(Number(e.target.value))}
            />
          </div>

          <label htmlFor="nota-obj">Nota da Objetiva</label>
          <div style={{ display: "flex", gap: "10px" }}>
            <input
              type="number"
              id="nota-obj"
              value={objetiva ?? ""}
              onChange={(e) => setObjetiva(Number(e.target.value))}
            />
            <input
              type="number"
              id="objetiva-peso"
              value={objetivaPeso ?? ""}
              style={{ width: "80px" }}
              onChange={(e) => setObjetivaPeso(Number(e.target.value))}
            />
          </div>

          <label htmlFor="nota-dis">Nota da Discursiva</label>
          <div style={{ display: "flex", gap: "10px" }}>
            <input
              type="number"
              id="nota-dis"
              value={discursiva ?? ""}
              onChange={(e) => setDiscursiva(Number(e.target.value))}
            />
            <input
              type="number"
              id="discursiva-peso"
              value={discursivaPeso ?? ""}
              style={{ width: "80px" }}
              onChange={(e) => setDiscursivaPeso(Number(e.target.value))}
            />
          </div>
        </div>

        <button className="btn-calcular" onClick={calcularNotaFinal}>
          Calcular Nota Final
        </button>

        {notaFinal !== undefined && (
          <div className="result-container">
            <h2>Resultado</h2>
            <p>
              Nota Final: <strong>{notaFinal.toFixed(2)}</strong>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Calculator;
