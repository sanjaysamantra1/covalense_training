import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Aboutus() {
    const navigate = useNavigate();

    const doSomethingAndGoToHome = function () {
        alert("do something");// logic
        navigate('/home');
    };
    return <>
        <h1>This is About Us Component</h1>

        <a href='/home'>Go To Home</a>
        <br /><br />
        <Link to="/home">Go TO Home</Link>
        <button onClick={doSomethingAndGoToHome}>Do Something and then go to Home</button>
    </>
}
