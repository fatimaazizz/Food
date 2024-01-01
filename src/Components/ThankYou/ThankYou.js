

import React from 'react';
import './ThankYou.css'
import Backbutton from '../Backbutton/Backbutton';
import { useNavigate } from 'react-router-dom';
// Functional Component
const ThankYou = (props) => {
    const navigate=useNavigate();
    const obj={heading:undefined,product:false,liked:false}
    const handHome=()=>{
       navigate("/");
     }
  return (
    <div className='Thank-you'>
  
     <Backbutton data={obj}/>

        <h1 className='Thank-you-name'>"Congratulations! Your   Order Has Been Placed!"
        </h1>

      <div className='Thank-you-img-container'>
        <img src={"./images/rider.png"}/>
      </div>
       
            <p className='Thank-you-price'>Thank you for choosing our services! Your order has been successfully placed and is now being processed. We appreciate your trust in us and look forward to serving you.</p> 
            <button className="orange-btn" onClick={handHome}>Return Home</button>
        </div>


  );
};

export default ThankYou;
