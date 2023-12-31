

import React, { useState } from 'react';
import './Category.css'
import CategoryItem from '../CategoryItem/CategoryItem';
import categoriesData from '../../Data/category.json';
// Functional Component
const Category = (props) => {
    const [seeAll, setSeeAll]=useState(false);
    const handleClick = (event) => {
        setSeeAll(!seeAll);
       };
  return (
  
    <section> 
       <div className='category sub-heading'>
        <h2 className='heading'>Categories</h2>
        <button className='btn' onClick={handleClick}>{seeAll?"See Less":"See All"}</button>
       </div>
       <ul className={`categories  ${seeAll?'categories-all':''}`}>
         {categoriesData.map(category => (
         <li className='category-item-parent' key={"li"+category.id}> 
           <CategoryItem  key={category.id} bgColor={category.bgColor} bgImage={category.bgImage} ciName={category.name} seeAll={seeAll}></CategoryItem>
         </li>
        ))}
        </ul> 
         
    </section>
  );
};

export default Category;
