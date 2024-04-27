import React from 'react'
import { useParams } from 'react-router-dom';

export default function UserDetails() {
    const { id } = useParams();

    return <h1>This is the details of User - {id}</h1>
}
