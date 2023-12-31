import React, { useEffect, useState } from "react";
import "./CheckoutPage.css";
import Backbutton from "../../Components/Backbutton/Backbutton";
import { useNavigate } from "react-router-dom";
import DeliveryDetail from "../../Components/Details/DeliveryDetail";
import OrderDetails from "../../Components/Details/OrderDetails"
function CheckoutPage() {
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
    const obj={heading:"Checkout",product:false,liked:false}
    const handlePayNow=()=>{
       navigate("/thankyou");
     }
  return (
    <div className="cart-container">
     <Backbutton data={obj}/>
    
    <DeliveryDetail/>
    <OrderDetails data={cart}/>
     <div className="bottom-container">
      <div className="product-price-container">
        <span className="product-price-title">Total</span>
          <h5 className="product-price-Amount">{cart.reduce((acc,cv)=>acc+cv.quantity*cv.price,0)} <span className="product-currency-container">$</span></h5>
          </div>
        <button className="orange-btn"  onClick={handlePayNow}>Pay Now</button>
      </div>
    </div>
  );
}

export default CheckoutPage;
