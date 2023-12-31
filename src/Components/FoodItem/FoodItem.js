

import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './FoodItem.css'

// Functional Component
const FoodItem = (props) => {
  
    const { Image, liked, name ,price,id} = props.food;
    const [isliked, setIsliked] = useState(liked===true?true:false);
    const handleClick = (event) => {
       setIsliked(!isliked);
      };
    

  return (
    <div className='Food-item'>
    <Link to={`/product/${id}`}>
    <div className='Food-item-img-container'>
    <img src={Image}/>
    </div>
    </Link>
    <div className='Food-item-description'>
        <h3 className='Food-item-name'>{name}</h3>
        <div className='Food-item-container'>
            <p className='Food-item-price'><span className='Food-item-currency'>$</span> {price}</p>
            <button aria-label={isliked ? 'remove dish from your favourite list' : 'add dish to favourite list'} className={`Food-item-like ${isliked ? 'liked' : ''}`} onClick={handleClick}>
                <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.496 15.9242C9.224 16.0253 8.776 16.0253 8.504 15.9242C6.184 15.0899 1 11.6096 1 5.71067C1 3.10674 2.992 1 5.448 1C6.904 1 8.192 1.74157 9 2.88764C9.41102 2.3027 9.94638 1.8273 10.5632 1.4995C11.18 1.17171 11.8611 1.00064 12.552 1C15.008 1 17 3.10674 17 5.71067C17 11.6096 11.816 15.0899 9.496 15.9242Z" stroke="var(--stroke-color)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="var(--heart-fill-color)"/>
                </svg>
</button>
        </div>
    </div>

    </div>
  );
};

export default FoodItem;
