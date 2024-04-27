import React, { useState } from 'react'

export default function ShowHidePassword() {
    const [flag, setFlag] = useState(true);
    const [remaining, setRemaining] = useState(100);

    const keyUpHandler = (e) => {
        let msg = e.target.value;
        setRemaining(100 - msg.length);
    }

    return <>
        <input type={flag ? 'text' : 'password'} />
        <br />
        <button onClick={() => setFlag(!flag)}>SHOW/HIDE PASSWORD</button>
        <br />
        <hr />
        <textarea maxLength='100' onKeyUp={keyUpHandler}></textarea>
        <h3>remaining Characters: {remaining}</h3>
    </>
}
