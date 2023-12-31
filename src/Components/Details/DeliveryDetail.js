

import React from 'react';
import './DeliveryDetail.css'

// Functional Component
const DeliveryDetail = (props) => {
  return (

        <div className='Detail-item-description'>
            <h3 className='Detail-item-name'>Delivery details</h3>
                <p className="Detail-item-quantity">
                789 Maple Street, Los Angeles,<br/>
                CA 90001<br/>
                (888) 987-6543
                </p>
        </div>
  );
};

export default DeliveryDetail;
