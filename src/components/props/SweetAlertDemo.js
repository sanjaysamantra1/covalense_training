import React from 'react';
import Swal from 'sweetalert2';

export default function SweetAlertDemo() {
    const openAlert = function () {
        Swal.fire(
            'Good job!',
            'You clicked the button!',
            'question'
        )
    }
    return <>
        <h1>Click the button to see sweetalert</h1>
        <button onClick={openAlert}>click me</button>
    </>
}
