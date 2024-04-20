import React from 'react';
import users from './users.json';
import UserCard from './UserCard';

export default function UserList() {
    return <>
        <div className='container'>
            <div className='row'>
                {users.map(user => {
                    return <UserCard user={user} />
                })}
            </div>
        </div>
    </>
}
