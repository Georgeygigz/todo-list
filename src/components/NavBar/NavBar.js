import React from 'react';
import { Link } from 'react-router-dom';

const NavBAR=()=>{
    return(
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>  
                    <li><Link to="/services">Services</Link></li> 
                </ul>
            </div>
        </nav>
    )
};
export default NavBAR;