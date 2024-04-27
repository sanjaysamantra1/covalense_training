import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Careers() {
    return <>
        <h1>This is Careers Component</h1>

        <div className="courses-nav">
            <Link to="permanent" className='mx-2'>permanent</Link>
            <Link to="contract">Contract</Link>
        </div>
        <Outlet />
    </>
}
