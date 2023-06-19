import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const [display, setDisplay] = useState('0');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        const calculatedResult = eval(display);
        setResult(calculatedResult);
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setDisplay('0');
      setResult('');
    } else {
      setDisplay((prevDisplay) => {
        if (prevDisplay === '0') {
          return value;
        } else {
          return prevDisplay + value;
        }
      });
    }
  };

  const evaluateExpression = () => {
    const operators = ['+', '-', '*', '/'];
    const expression = display;

    // Check if the expression ends with an operator
    if (operators.includes(expression[expression.length - 1])) {
      setResult('Error');
    } else {
      // Check if the expression contains repeated consecutive operators
      if (/[+\-*/]{2,}/.test(expression)) {
        setResult('Error');
      } else {
        try {
          const calculatedResult = eval(display);
          setResult(calculatedResult);
        } catch (error) {
          setResult('Error');
        }
      }
    }
  };

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="result">{result}</div>
      <div className="buttons">
        <button className="button gray" onClick={() => handleButtonClick('C')}>
          C
        </button>
        <button className="button gray">+/-</button>
        <button className="button gray">%</button>
        <button className="button orange" onClick={() => handleButtonClick('/')}>
          ÷
        </button>
        <button className="button" onClick={() => handleButtonClick('7')}>
          7
        </button>
        <button className="button" onClick={() => handleButtonClick('8')}>
          8
        </button>
        <button className="button" onClick={() => handleButtonClick('9')}>
          9
        </button>
        <button className="button orange" onClick={() => handleButtonClick('*')}>
          ×
        </button>
        <button className="button" onClick={() => handleButtonClick('4')}>
          4
        </button>
        <button className="button" onClick={() => handleButtonClick('5')}>
          5
        </button>
        <button className="button" onClick={() => handleButtonClick('6')}>
          6
        </button>
        <button className="button orange" onClick={() => handleButtonClick('-')}>
          -
        </button>
        <button className="button" onClick={() => handleButtonClick('1')}>
          1
        </button>
        <button className="button" onClick={() => handleButtonClick('2')}>
          2
        </button>
        <button className="button" onClick={() => handleButtonClick('3')}>
          3
        </button>
        <button className="button orange" onClick={() => handleButtonClick('+')}>
          +
        </button>
        <button className="button zero" onClick={() => handleButtonClick('0')}>
          0
        </button>
        <button className="button" onClick={() => handleButtonClick('.')}>
          .
        </button>
        <button className="button equal" onClick={evaluateExpression}>
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
