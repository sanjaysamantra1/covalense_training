import React, { useState } from 'react'
import UpdatedComponent from './CounterHOC';

function ClickCounter(props) {
    return (
        <button onClick={props.increment}> Clicked {props.count} Times</button>
    );
}
export default UpdatedComponent(ClickCounter)
