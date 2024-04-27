import React, { useState } from 'react'
import ChildA from './ChildA'
import ChildB from './ChildB'
import ChildC from './ChildC';

export default function Parent() {
  const [a, setA] = useState(10);
  const [b, setB] = useState(20);
  const [c, setC] = useState(30);

  return <>
    <h1>I am parent component</h1>

    <ChildA a={a} />
    <ChildB b={b} />
    <ChildC />

    <button onClick={() => { setA(a + 1) }}>Update A</button>
    <button onClick={() => { setB(b + 1) }} className='mx-1'>Update B</button>
    <button onClick={() => { setC(c + 1) }}>Update C</button>
  </>
}
