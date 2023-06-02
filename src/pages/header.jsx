import React from "react";
import './header.css'
import { NavLink } from "react-router-dom";


const Header = () =>{
    return(
        <div className="header">
            <h4>FakeStore</h4>
                <ul>
                    <li><NavLink to='/' style={({ isActive, isPending }) => {
                    return {
                            fontWeight: isActive ? "bold" : "",
                            color: isPending ? "red" : "black",
                                                            } } }>Home</NavLink></li>
                    <li><NavLink to= '/about' style={({ isActive, isPending }) => {
                    return {
                            fontWeight: isActive ? "bold" : "",
                            color: isPending ? "red" : "black",
                                                            } } }>About</NavLink></li>
                    <li><NavLink to='/contact-us' style={({ isActive, isPending }) => {
                    return {
                            fontWeight: isActive ? "bold" : "",
                            color: isPending ? "red" : "black",
                                                            } } }>Contact</NavLink></li>
                    <li><NavLink to='/join-us' style={({ isActive, isPending }) => {
                    return {
                            fontWeight: isActive ? "bold" : "",
                            color: isPending ? "red" : "black",
                                                            } } }>Join us</NavLink></li>
                </ul>
        </div>
    )
}

export default Header

