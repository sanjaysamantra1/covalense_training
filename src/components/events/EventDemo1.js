import React from 'react'

export default function EventDemo1() {
    const f1 = function () {
        console.log('I am f1')
    }
    const add = function (a, b) {
        console.log(`Addition of ${a} and ${b} is ${a + b}`)
    }
    const changeHandler = (e) => {
        console.log(e.target.name, e.target.value)
    }

    return <>
        <button onClick={f1} className='btn mx-1'>f1</button>
        <button onClick={() => { add(10, 20) }}>add</button>

        <input name='name1' onChange={changeHandler} />
    </>
}
