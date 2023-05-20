import React from "react";
import './header.css'
import { Link } from "react-router-dom";


const Header = () =>{
    return(
        <div className="header">
            <h4>My new page</h4>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to= '/about'>About</Link></li>
                    <li><Link to='/contact-us'>Contact</Link></li>
                    <li><Link to='/join-us'>Join us</Link></li>
                </ul>
        </div>
    )
}

export default Header

