

import React, { useEffect, useState } from 'react';
import './Navbar.css'
import NavItem from '../NavItem/NavItem';
import navData from '../../Data/nav.json'
import { useLocation } from 'react-router-dom';

// Functional Component
const Navbar = (props) => {
  const locations=useLocation();
  const [showNavBar,setShowNavBar]=useState(true);
  useEffect(() => {
    locations.pathname==='/'|| locations.pathname==='/favourite'?setShowNavBar(true):setShowNavBar(false);
  }, [locations]);
  return (
  <>
 {showNavBar?
    <nav className="bottom-nav">
         <ul className="navUl">
          {navData.map(nav => (<NavItem  key={nav.id} navitem={nav}/> ))}
          </ul>
    </nav>:''}
    </>
  );
};

export default Navbar;
