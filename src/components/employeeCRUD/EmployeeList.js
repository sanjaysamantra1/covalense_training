import React from 'react'

export default function EmployeeList({ employees, deleteEmployee }) {
    return <div>
        <table className='table table-bordered table-striped'>
            <tbody>
                {employees.map((emp, ind) => (
                    <tr key={emp.eId}>
                        <td>{ind}</td>
                        <td>{emp.eId}</td>
                        <td>{emp.name}</td>
                        <td>{emp.sal}</td>
                        <td>
                            <button onClick={() => deleteEmployee(emp.eId)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
}
