import React from 'react'

export default function ListDemo1() {
    let cars = ['Tata', 'Honda', 'Maruti', 'Hundai', 'Toyota'];

    return <>
        <h1 className='text-center'>Car List</h1>
        <ul>
            {cars.map(car => {
                return <li>{car}</li>
            })}
        </ul>
    </>
}
