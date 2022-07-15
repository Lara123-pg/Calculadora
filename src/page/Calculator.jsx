import React, { useState } from 'react';

import '../scss/Main.scss';

export function Calculator() {
    const [number, setNumber] = useState(0);
    const [operator, setOperator] = useState();
    const [keepNumber, setKeepNumber] = useState(0);

    function addNumber(num) {
        let insertNumber = num.target.value;

        if(number === 0) {
            setNumber(insertNumber);

        } else {
            setNumber(number+insertNumber);
        }
    }

    function operations(operatorCount) {
        let value = operatorCount.target.value;

        setOperator(value);
        setKeepNumber(number);

       
        setNumber(0);
    }

    function calculate() {
        if (operator === '+') {
            let sum = parseFloat(keepNumber) + parseFloat(number);

            setNumber(sum);

        } else if (operator === '-') {
            let difference = parseFloat(keepNumber) - parseFloat(number);

            setNumber(difference);

        } else if (operator === '*') {
            let multiplication = parseFloat(keepNumber) * parseFloat(number);

            setNumber(multiplication);

        } else if (operator === '/') {
            if (keepNumber == 0 && number == 0) {
                setNumber('Undefined');

            } else {
                let division = parseFloat(keepNumber) / parseFloat(number);

                if (String(division).length >= 4) {
                    setNumber(division.toFixed(2));

                } else {
                    setNumber(division);
                }
            }
            // One number
        } else if (operator === '**') {
            let squareRoot = Math.sqrt(parseFloat(keepNumber));

            if (String(squareRoot).length >= 4) {
                setNumber(squareRoot.toFixed(2));

            } else {
                setNumber(squareRoot);
            }

            // One number
        } else if (operator === '%') {
            let percentage = parseFloat(keepNumber) / 100;

            setNumber(percentage);

            // One number
        } else if (operator === 'cbrt') {
            let cubeRoot = Math.cbrt(parseFloat(keepNumber));

            if (String(cubeRoot).length >= 4) {
                setNumber(cubeRoot.toFixed(2));

            } else {
                setNumber(cubeRoot);
            }
        }
    }

    function clearScreen() {
        setNumber(0);
        setKeepNumber(0);
    }


    return(
        <div className="container">
            <h1>Calculadora</h1>

            <div className="calc">
                <div className="screen">{number}</div>

                <div className="keyboard">
                    <table>
                        <tbody> 
                            <tr>
                                <td><button onClick={clearScreen}>C</button></td>
                                <td><button onClick={operations} value="**">√</button></td>
                                <td><button onClick={operations} value="%">%</button></td>
                                <td><button onClick={operations} value="/">/</button></td>
                            </tr>
                        </tbody>

                        <tbody>
                            <tr>
                                <td><button onClick={addNumber} value={7}>7</button></td>
                                <td><button onClick={addNumber} value={8}>8</button></td>
                                <td><button onClick={addNumber} value={9}>9</button></td>
                                <td><button onClick={operations} value="*">X</button></td>
                            </tr>
                        </tbody>

                        <tbody>
                            <tr>
                                <td><button onClick={addNumber} value={4}>4</button></td>
                                <td><button onClick={addNumber} value={5}>5</button></td>
                                <td><button onClick={addNumber} value={6}>6</button></td>
                                <td><button onClick={operations} value="-">-</button></td>
                            </tr>
                        </tbody>

                        <tbody>
                            <tr>
                                <td><button onClick={addNumber} value={1}>1</button></td>
                                <td><button onClick={addNumber} value={2}>2</button></td>
                                <td><button onClick={addNumber} value={3}>3</button></td>
                                <td><button onClick={operations} value="+">+</button></td>
                            </tr>
                        </tbody>

                        <tbody>
                            <tr>
                                <td><button onClick={operations} value="cbrt">∛</button></td>
                                <td><button onClick={addNumber} value={0}>0</button></td>
                                <td><button onClick={addNumber} value={"."}>.</button></td>
                                <td><button onClick={calculate}>=</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}