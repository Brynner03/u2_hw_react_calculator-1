import React, { useState } from "react";

const Calculator = () => {

    const [number1, setNumber1] = useState('')
    const [number2, setNumber2] = useState('')
    const [result, setResult] = useState('')   
    const setNum = (e, num) => {
        console.log(num)
        console.log(e.target.value)
        if (num === number1 && num !== number2){
            setNumber1(e.target.value)
        } else {
            setNumber2(e.target.value)
        }
    }

    const handleSolution = () => {
        if (number1 !== '' && number2 !=='') {
            setResult(parseInt(number1) + parseInt(number2))
            setNumber1('')
            setNumber2('')
        }
    }

return (
        <div className="container">
        <div className="add">          
            <input type="text" placeholder="Enter a number" value={number1} onChange={(e) => setNum(e, number1)}/>
            <span>+</span>
            <input type="text" placeholder="Enter a number" value={number2} onChange={(e) => setNum(e, number2)}/>
            <button onClick={handleSolution}>=</button>
        </div>
        <h3 className="results">{result}</h3>
        </div>
    )
}

export default Calculator