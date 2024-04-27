import React, { useState } from 'react'

export default function AddEmployee({addEmployee}) {
    const initialEmp = { eId: '', name: '', sal: 0 }
    const [emp, setEmp] = useState(initialEmp);
    const changeHandler = (e) => {
        const { name, value } = e.target;
        setEmp({ ...emp, [name]: value })
    }
    return <>
        <p>eId : <input value={emp.eId} name='eId' onChange={(e) => changeHandler(e)} /></p>
        <p>Name : <input value={emp.name} name='name' onChange={(e) => changeHandler(e)} /></p>
        <p>Salary : <input value={emp.sal} name='sal' onChange={(e) => changeHandler(e)} /></p>
        <div className='text-center'>
            <button onClick={() => addEmployee(emp)} className='btn btn-primary'>Add Employee</button>
        </div>
    </>
}
