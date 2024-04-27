import React, { useEffect, useState } from 'react'

export default function Counter() {
    // let count = 0;  Local variable
    let [count, setCount] = useState(0);
    const increment = function () {
        setCount(count + 1);
    }
    useEffect(() => {
        console.log('Component Loaded/State Updated')
        console.log(count);

        return ()=>{
            console.log('Component unmounting')
        }
    })
    return (
        <>
            <div>Count value is:: {count}</div>
            <button onClick={increment}>Increment</button>
        </>
    )
}
