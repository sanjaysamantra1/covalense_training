import React from 'react'
import client from '../../util/client'


export default function HttpDemo3() {
    const fetchData = async () => {
        const response = await client.get('posts')
        console.log(response.data)
    }
    return <>
        <h1>Http demo 3 comp</h1>
        <button onClick={fetchData}>click</button>
    </>

}
