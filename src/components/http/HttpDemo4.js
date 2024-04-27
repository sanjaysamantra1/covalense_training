import React, { useEffect, useState } from 'react'
import axios from 'axios';
import useFetch from '../../util/useFetch';

export default function HttpDemo4() {
    // const [users, setUsers] = useState([]);

    // useEffect(() => {
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //         .then(response => response.json())
    //         .then(result => setUsers(result));
    // }, []);
    const users = useFetch("https://jsonplaceholder.typicode.com/users")
    return (
        <div>
            <table className='table table-bordered table-striped table-responsive'>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>email</th>
                        <th>phone</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, ind) => {
                        return (
                            <tr>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );

}
