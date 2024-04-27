import React from 'react'
import { Link } from 'react-router-dom';

export default function UserCard({ user }) {
    let { id, username, name, email, phone, address } = user;
    return <div className='col-sm-3' key={id}>
        <div className="card text-center">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKu1w7TulWMUKGszjJlb7PDtn0LVSJgGnrog&s" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{username}</h5>
                <p className="card-text">{name}</p>
                <p className="card-text">{phone}</p>
                <p className="card-text">{email}</p>
                <p className="card-text">{address.city}</p>
                <Link to={`/userdetails/${id}`}> View Details</Link>
            </div>
        </div>
    </div>
}
