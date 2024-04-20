import React from 'react';
import './Categories.css';
import Category from './Category';

export default function Categories() {
  let categoriesArr = [
    { name: 'Grocery', 'image': 'https://rukminim2.flixcart.com/flap/72/72/image/29327f40e9c4d26b.png?q=100' },
    { name: 'Mobile', 'image': 'https://rukminim2.flixcart.com/flap/72/72/image/29327f40e9c4d26b.png?q=100' },
    { name: 'Accesasjlk', 'image': 'https://rukminim2.flixcart.com/flap/72/72/image/29327f40e9c4d26b.png?q=100' },
    { name: 'TwoWheeler', 'image': 'https://rukminim2.flixcart.com/flap/72/72/image/29327f40e9c4d26b.png?q=100' },
    { name: 'Grocery', 'image': 'https://rukminim2.flixcart.com/flap/72/72/image/29327f40e9c4d26b.png?q=100' },
    { name: 'Fashin', 'image': 'https://rukminim2.flixcart.com/flap/72/72/image/29327f40e9c4d26b.png?q=100' },
    { name: 'Grocery', 'image': 'https://rukminim2.flixcart.com/flap/72/72/image/29327f40e9c4d26b.png?q=100' },
    { name: 'Clothings', 'image': 'https://rukminim2.flixcart.com/flap/72/72/image/29327f40e9c4d26b.png?q=100' },
    { name: 'Grocery', 'image': 'https://rukminim2.flixcart.com/flap/72/72/image/29327f40e9c4d26b.png?q=100' },
  ]
  return <>
    <div className='container'>
      <div className='row'>
        {categoriesArr.map((category,ind) => {
          return <Category name={category.name} image={category.image} key={ind} />
        })}
      </div>
    </div>
  </>
}
