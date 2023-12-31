

import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './CartItem.css'

// Functional Component
const CartItem = (props) => {
  
    const { Image, name ,price,id,quantity} = props.data;
   
    

  return (
    <Link to={`/product/${id}`} className='no-anchr'>
    <div className='card-item'>
        <div className='card-item-img-container'>
        <img src={Image}/>
        </div>
        <div className='card-item-description'>
            <h3 className='card-item-name'>{name}</h3>
            <div className='card-item-container'>
                <p className="card-item-quantity">quantity {quantity}</p>
                <p className='card-item-price' ><span className='card-item-currency'>$</span> {price}</p>
            </div>
        </div>
    </div>
    </Link>
  );
};

export default CartItem;
