

import React from 'react';
import './NavItem.css'
import { Link ,useLocation} from 'react-router-dom';

// Functional Component
const NavItem = (props) => {
  const {url,label,title,iconId}=props.navitem;
  const location = useLocation();
  const isHomeActive = location.pathname === url;
  return (
     <li className={`navItem-list `}>
        <Link to={url} aria-label={label} title={title} className={`navItem ${isHomeActive ? 'active' : ''}`}>
          <svg className="icon">
            <use xlinkHref={`./images/navMenu.svg#${iconId}`}></use>
          </svg>
        </Link>
    </li>
  );
};

export default NavItem;
