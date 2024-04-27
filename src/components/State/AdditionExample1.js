import React, { useState } from 'react'

export default function AdditionExample1() {
    const [num1, setNum1] = useState(10)
    const [num2, setNum2] = useState(20)

    const updateNum1 = function (e) {
        console.log('Event handler called')
        setNum1(e.target.value);
    }
    const updateNum2 = function (e) {
        console.log('Event handler called')
        setNum2(e.target.value);
    }
    return <>
        <input type="number" onChange={updateNum1} value={num1} />
        <input type="number" onChange={updateNum2} value={num2} />

        <h2>Addition of {num1} and {num2} is {+num1 + +num2}</h2>
    </>
}
