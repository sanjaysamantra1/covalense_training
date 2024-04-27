import React from 'react'
import axios from 'axios';

export default function HttpDemo2() {
    let users = ['sanjaysamantra1', 'abraham', 'google']

    const fetchUsers = async () => {
        let urls = users.map(user => {
            return axios.get(`https://api.github.com/users/${user}`);
        })
        let responses = await axios.all(urls);
        console.log(responses)
    }

    return <>
        <button onClick={fetchUsers}>click</button>
    </>

}
