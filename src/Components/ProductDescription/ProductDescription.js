

import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import './ProductDescription.css'
import Backbutton from '../Backbutton/Backbutton';

const ProuctDescription = (props) => {
    const{productImage,name,by,rating,description,price,liked,id}=props.product;
  
    const navigate = useNavigate()
  const [cart, setCart] = useState([]);
 
  const [quantity, setQuantity] = useState(1);
  // Load cart data from localStorage when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulating an asynchronous operation (e.g., fetching data)
        const savedCart = await new Promise(resolve => {
          setTimeout(() => {
            resolve(localStorage.getItem('cart'));
          }, ); // Simulating a delay
        });

        if (savedCart) {
          setCart(JSON.parse(savedCart));
          const existingDats = JSON.parse(savedCart);
          const existingItem = existingDats.find(item => item.id === id);
          if (existingItem) {
            setQuantity(existingItem.quantity);
          }
        }
      } catch (error) {
        console.error('Error fetching or parsing data:', error);
      }
    };

    fetchData();
  }, [id]);

 
  const handleAddToCart = () => {
    const existingItem = cart.find(item => item.id === id);
    let updatedCart;
   
    if (existingItem) {
      console.log(existingItem.quantity,quantity);
      
       updatedCart = cart.map(item =>
        item.id === existingItem.id ? { ...item, quantity:quantity } : item
      );
     ;
    } else {
      updatedCart=[...cart, { ...props.product, quantity: quantity }];
    }
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    navigate("/cart");
  };

    
  const handleIncrement = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

   const  handleRating=()=>{
      if(rating>4)
      {
        return "pr4"
      }
      else if(rating>3 && rating<=4)
      {
        return "pr3"
      }
      else if(rating>2 && rating<=3)
      {
        return "pr2"
      }
    
      return "pr1"
    }
    const obj={'product':true,'heading':undefined,'liked':liked};
  return (
  
   <div className='product-container'>
   <div className='product-content-container' >
  <Backbutton data={obj}/>
   <div className="product-image-container"> 
    <img alt="product image" src={productImage}></img>
   </div>
   <div className="product-details">
    <h1 className="main-heading">{name}</h1>
    <h2 className="product-resturant">by {by}</h2>
    <p className={`product-rating ${rating?handleRating():''}`}>
    <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.54894 0.927049C9.8483 0.0057385 11.1517 0.0057404 11.4511 0.927051L13.0819 5.9463C13.2158 6.35833 13.5997 6.63729 14.033 6.63729H19.3105C20.2792 6.63729 20.682 7.8769 19.8983 8.4463L15.6287 11.5484C15.2782 11.803 15.1315 12.2544 15.2654 12.6664L16.8963 17.6857C17.1956 18.607 16.1411 19.3731 15.3574 18.8037L11.0878 15.7016C10.7373 15.447 10.2627 15.447 9.91221 15.7016L5.64258 18.8037C4.85887 19.3731 3.80439 18.607 4.10374 17.6857L5.7346 12.6664C5.86847 12.2544 5.72181 11.803 5.37132 11.5484L1.10169 8.4463C0.317977 7.8769 0.720754 6.63729 1.68948 6.63729H6.96703C7.40026 6.63729 7.78421 6.35833 7.91809 5.9463L9.54894 0.927049Z" fill="var(--rating-fill-color)"/>
</svg>
    {rating}</p>
    <div className='quantity-button'>
        <button className="white-btn" aria-label="increase quantity" title="increase quantity" onClick={handleIncrement}><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
  <path d="M16 24H32M24 32V16M24 44C35 44 44 35 44 24C44 13 35 4 24 4C13 4 4 13 4 24C4 35 13 44 24 44Z" stroke="var(--qunantity-btn-stroke-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="var(--qunantity-btn-fill-color)"/>
</svg></button>
        <span className="quantity">{quantity}</span>
        <button className="white-btn" aria-label="Decrease quantity" onClick={handleDecrement} title="Decrease quantity"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="49" viewBox="0 0 48 49" fill="none">
  <path d="M15.84 24.1429H31.84M23.84 44.1429C34.84 44.1429 43.84 35.1429 43.84 24.1429C43.84 13.1429 34.84 4.14285 23.84 4.14285C12.84 4.14285 3.84003 13.1429 3.84003 24.1429C3.84003 35.1429 12.84 44.1429 23.84 44.1429Z" stroke="var(--qunantity-btn-stroke-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="var(--qunantity-btn-fill-color)"/>
</svg></button>

    </div>
    <h3 className="product-Descrption-title">Description</h3>
    <p className="product-Descrption">{description}</p>
    </div>
    </div>
    <div className="bottom-container">
      <div className="product-price-container">
        <span className="product-price-title">Price</span>
          <h5 className="product-price-Amount">{price} <span className="product-currency-container">$</span></h5>
          </div>
        <button className="orange-btn" onClick={handleAddToCart}> Add to Card</button>
      </div>
   </div>
  );
};

export default ProuctDescription;
