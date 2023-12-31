

import React from 'react';
import './CategoryItem.css'

// Functional Component
const CategoryItem = (props) => {
  return (
    <div className={`category-item ${props.seeAll?'seeAll':''}`} style={{backgroundColor:props.bgColor,backgroundImage:`url(${props.bgImage})`}}>
      <h3 className='category-item-name'>{props.ciName}</h3>
    </div>
  );
};

export default CategoryItem;
