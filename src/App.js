import './App.css';
import MainPage from './pages/MainPage/MainPage';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import FavouritePage from './pages/FavouritePage/FavouritePage';
import Product from './pages/ProductPage/Product';
import Navbar from './Components/Navbar/Navbar';
import CartPage from './pages/CartPage/CartPage';
import ThankYou from './Components/ThankYou/ThankYou';
import  CheckoutPage from './pages/CheckoutPage/CheckoutPage';

function App() {
  return (
    <div className="App">
    
      <BrowserRouter basename='/Food'>
      <Navbar></Navbar>
        <Routes>
          <Route  path="/Food"  element={<MainPage/>}></Route>
          <Route path="/favourite"  element={<FavouritePage/>}></Route>
          <Route path="/product/:productId" element={<Product/>}></Route>
          <Route path="/cart" element={<CartPage/>}></Route>
          <Route path="/checkout" element={<CheckoutPage/>}></Route>
          <Route path="/thankyou" element={<ThankYou/>}></Route>
        </Routes>

      </BrowserRouter>
  
    </div>
    
  );
}

export default App;
