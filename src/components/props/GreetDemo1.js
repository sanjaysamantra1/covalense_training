import React from 'react';
import PropTypes from 'prop-types'

export default function GreetDemo1({ name, msg = 'Good Morning',children }) {
    return <>
        <h2>Hello {name}, {msg}</h2>
        <h3>{children}</h3>
    </>
}
GreetDemo1.propTypes = {
    name: PropTypes.string.isRequired,
    msg: PropTypes.string
};	