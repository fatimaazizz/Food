

import React, { useState } from 'react';
import './Food.css'
import FoodItem from "../FoodItem/FoodItem"
import foodData from '../../Data/FoodItem.json';
// Functional Component
const Food = (props) => {
    const [seeAll, setSeeAll]=useState(false);
    const handleClick = (event) => {
        setSeeAll(!seeAll);
       };
  return (
  
    <section> 
       <div className='category sub-heading'>
        <h2 className='heading'>Recommended Items</h2>
        <button className='btn'>Filter</button>
       </div>
       <div className='Food-caontainer'>
       {foodData.map(food => (
          <FoodItem  key={food.id} food={food}/> ))
       }
       </div>
         
    </section>
  );
};

export default Food;
