import React, { useState } from 'react'
import EmployeeList from './EmployeeList'
import AddEmployee from './AddEmployee';
const initialEmployees = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
    { eId: 105, name: 'deepak', sal: 8000, gender: 'male' },
]

export default function EmployeeCRUD() {
    const [employees, setEmployees] = useState(initialEmployees);

    const deleteEmployee = (idToDelete) => {
        let filteredEmployees = employees.filter(emp => emp.eId !== idToDelete);
        setEmployees([...filteredEmployees])
    }
    const addEmployee = (emp) => {
        employees.push(emp);
        setEmployees([...employees]);
    }
    return <>
        <h1>This is Employee CRUD</h1>
        <div className='container'>
            <div className='row'>
                <div className='col-sm-8'>
                    <EmployeeList employees={employees} deleteEmployee={deleteEmployee} />
                </div>
                <div className='col-sm-4'>
                    <AddEmployee addEmployee={addEmployee} />
                </div>
            </div>
        </div>
    </>
}
