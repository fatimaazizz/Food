

import React, { useState,useEffect } from 'react';

import './Greeting.css'
const Greeting = (props) => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [mealTime, setMealTime] = useState('');
    useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentTime(new Date());
        }, 1000);
    
        return () => clearInterval(intervalId);
      }, []);
      useEffect(() => {
        decideMealTime();
      }, [currentTime]);
      
  const decideMealTime = () => {
    const currentHour = currentTime.getHours();

    if (currentHour >= 5 && currentHour < 11) {
      setMealTime('Breakfast');
    } else if (currentHour >= 11 && currentHour < 16) {
      setMealTime('Lunch');
    } else if (currentHour >= 16 && currentHour < 20) {
      setMealTime('Dinner');
    } else {
      setMealTime('Late Night Munching');
    }
  };
  return (
  
    <section> 
       <div className='Greeting-heading'>
        <h1 className='main-heading'>Hey Danyal👋</h1>
        <button className='btn'>
            <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 23.71L21.8 21.51M12.45 22.61C13.8223 22.61 15.1812 22.3397 16.449 21.8145C17.7169 21.2893 18.8689 20.5196 19.8393 19.5492C20.8096 18.5789 21.5794 17.4269 22.1045 16.159C22.6297 14.8912 22.9 13.5323 22.9 12.16C22.9 10.7876 22.6297 9.42877 22.1045 8.16092C21.5794 6.89307 20.8096 5.74107 19.8393 4.7707C18.8689 3.80032 17.7169 3.03058 16.449 2.50542C15.1812 1.98026 13.8223 1.70996 12.45 1.70996C9.67849 1.70996 7.02049 2.81094 5.06073 4.7707C3.10098 6.73045 2 9.38845 2 12.16C2 14.9315 3.10098 17.5895 5.06073 19.5492C7.02049 21.509 9.67849 22.61 12.45 22.61Z" stroke="var(--btn-stroke-color)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
       </button>
       </div>  
       <p className='timing'>It's {mealTime} time</p> 
    </section>
  );
};

export default Greeting;
