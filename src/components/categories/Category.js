import React from 'react'

export default function Category(props) {
    return <div className='col'>
        <div className='category text-center'>
            <img src={props.image} alt='something' />
            <div>{props.name}</div>
        </div>
    </div>
}
