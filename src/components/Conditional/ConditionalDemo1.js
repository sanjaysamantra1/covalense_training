import React from 'react'

export default function ConditionalDemo1() {
    let n = 5;

    return <h1>
        {n} is  {n % 2 === 0 ? 'Even Number' : 'Odd Number'}
    </h1>
}

