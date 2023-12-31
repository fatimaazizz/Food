

import React from 'react';
import './DeliveryDetail.css'

// Functional Component
const CartItem = (props) => {
  

    

  return (

        <div className='Detail-item-description'>
            <h3 className='Detail-item-name'>Order details</h3>
            <ul>
            {props.data.map(item=><li className="Detail-item-quantity">
                  {item.quantity} X {item.name}
                </li>)}
            </ul>    
                
        </div>
  );
};

export default CartItem;
