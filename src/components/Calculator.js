// import React from 'react';
import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [calculatorValues, setCalculator] = useState({ total: null, next: null, operation: null });

  const updateCalc = (symbol) => {
    setCalculator((state) => calculate(state, symbol));
  };

  const { total, next, operation } = calculatorValues;

  const stateNull = () => !total && !next && !operation;
  const showOperation = () => {
    if (operation) return `${total} ${operation} ${next || ''}`;
    return next || total;
  };

  return (
    <div className="calculator">
      <div className="input">{stateNull() ? '0' : showOperation()}</div>
      <div className="calculator-body">
        <button className="calculator-buttons" type="button" onClick={() => { updateCalc('AC'); }}>AC</button>
        <button className="calculator-buttons" type="button" onClick={() => { updateCalc('+/-'); }}>+/-</button>
        <button className="calculator-buttons" type="button" onClick={() => { updateCalc('%'); }}>%</button>
        <button className="calculator-buttons operation" type="button" onClick={() => { updateCalc('÷'); }}>÷</button>
        <button className="calculator-buttons" type="button" onClick={() => { updateCalc('7'); }}>7</button>
        <button className="calculator-buttons" type="button" onClick={() => { updateCalc('8'); }}>8</button>
        <button className="calculator-buttons" type="button" onClick={() => { updateCalc('9'); }}>9</button>
        <button className="calculator-buttons operation" type="button" onClick={() => { updateCalc('x'); }}>x</button>
        <button className="calculator-buttons" type="button" onClick={() => { updateCalc('4'); }}>4</button>
        <button className="calculator-buttons" type="button" onClick={() => { updateCalc('5'); }}>5</button>
        <button className="calculator-buttons" type="button" onClick={() => { updateCalc('6'); }}>6</button>
        <button className="calculator-buttons operation" type="button" onClick={() => { updateCalc('-'); }}>-</button>
        <button className="calculator-buttons" type="button" onClick={() => { updateCalc('1'); }}>1</button>
        <button className="calculator-buttons" type="button" onClick={() => { updateCalc('2'); }}>2</button>
        <button className="calculator-buttons" type="button" onClick={() => { updateCalc('3'); }}>3</button>
        <button className="calculator-buttons operation" type="button" onClick={() => { updateCalc('+'); }}>+</button>
        <button className="calculator-buttons cero-button" type="button" onClick={() => { updateCalc('0'); }}>0</button>
        <button className="calculator-buttons" type="button" onClick={() => { updateCalc('.'); }}>.</button>
        <button className="calculator-buttons operation" type="button" onClick={() => { updateCalc('='); }}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
