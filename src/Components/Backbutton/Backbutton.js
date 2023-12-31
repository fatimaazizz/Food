

import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./Backbutton.css";
// Functional Component
const Backbutton = (props) => {
    const {heading,product,liked}=props.data;
    const [isliked, setIsliked] = useState(liked===true?true:false);
    const handleClick = (event) => {
       setIsliked(!isliked);
      };
 const navigate = useNavigate();
  return (
  
    
    <div className={`back-heading  ${heading?"heading-available":''}`}>
   
    <button className='btn'  onClick={() => navigate(-1)}>
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M15.95 9.88333L5.83331 20L15.95 30.1167M34.1666 20H6.11665" stroke="var(--btn-stroke-color)" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
   </button>
   {heading!==null ||heading!==undefined ?<h1 className='main-heading'>{heading}</h1>:''}
   {product? <button aria-label={isliked ? 'remove dish from your favourite list' : 'add dish to favourite list'} className={`Food-item-like ${isliked ? 'liked' : ''}`} onClick={handleClick}>
   <svg width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.7666 26.8238C15.2938 26.9988 14.5152 26.9988 14.0424 26.8238C10.0101 25.3803 1 19.3581 1 9.15105C1 4.64537 4.46222 1 8.7309 1C11.2615 1 13.5001 2.28317 14.9045 4.26625C15.6189 3.25412 16.5494 2.4315 17.6214 1.86431C18.6935 1.29711 19.8773 1.00111 21.0781 1C25.3468 1 28.809 4.64537 28.809 9.15105C28.809 19.3581 19.7989 25.3803 15.7666 26.8238Z" stroke="var(--stroke-color)" fill="var(--heart-fill-color)" strokeWidth="1.5" stroklinecap="round" strokeLinejoin="round"/>
</svg>
</button>:''}
   </div>  
     
         
   
  );
};

export default Backbutton;
