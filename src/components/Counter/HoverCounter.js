import React, { useState } from 'react'
import UpdatedComponent from './CounterHOC';

function HoverCounter(props) {

    return (
        <button onMouseOver={props.increment}> Clicked {props.count} Times</button>
    );
}
export default UpdatedComponent(HoverCounter)