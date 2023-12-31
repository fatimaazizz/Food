import React, { useEffect, useState } from "react";
import "./CartPage.css";
import CartItem from "../../Components/CartItem/CartItem";
import Backbutton from "../../Components/Backbutton/Backbutton";
import { useNavigate } from "react-router-dom";

function CartPage() {
    const [cart, setCart] = useState([]);
    const navigate=useNavigate();
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
            }
          } catch (error) {
            console.error('Error fetching or parsing data:', error);
          }
        };
    
        fetchData();
      }, []);
    const obj={heading:"My Bucket",product:false,liked:false}
    const handCheckout=()=>{
        navigate("/checkout");
    }
     
  return (
    <div className="cart-container">
     <Backbutton data={obj}/>
     {cart.map(cartItem=> <CartItem data={cartItem} key={cartItem.id}/>)}
     <div className="bottom-container">
      <div className="product-price-container">
        <span className="product-price-title">Total</span>
          <h5 className="product-price-Amount">{cart.reduce((acc,cv)=>acc+cv.quantity*cv.price,0)} <span className="product-currency-container">$</span></h5>
          </div>
        <button className="orange-btn" onClick={handCheckout}>Checkout</button>
      </div>
    </div>
  );
}

export default CartPage;
