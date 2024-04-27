import React, { useEffect, useState } from 'react'

export default function UseEffectDemo1() {
    const [a, setA] = useState(10);
    const [b, setB] = useState(20);
    const [c, setC] = useState(30);

    function callWhenAIsUpdated() {
        console.log('This logic should be called when a is updated')
    }

    useEffect(() => {
        console.log('Use Effect Called');
        callWhenAIsUpdated();
    },[a])

    return <>
        <h1>Useeffct demo</h1>
        <div>A value is {a}</div>
        <div>b value is {b}</div>
        <div>c value is {c}</div>

        <button onClick={() => { setA(a + 1) }}>Update A</button>
        <button onClick={() => { setB(b + 1) }} className='mx-1'>Update B</button>
        <button onClick={() => { setC(c + 1) }}>Update C</button>
    </>
}
