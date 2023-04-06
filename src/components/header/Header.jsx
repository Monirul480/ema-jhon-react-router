import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <nav className='header'>
            <Link to="/">
                <img src={logo} alt="" />
            </Link>
            {/* a*4[href=$]{$} */}
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Order</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
            </div>
        </nav>
    );
};

export default Header;