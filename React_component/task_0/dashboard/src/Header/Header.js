import React from 'react';
import logo from "../assets/logo.jpg"
import './Header.css'

function Header() {
    return (
        <>
            <div className="header">
                <img src={logo} alt="" />
                <h1>School dashboard</h1>
            </div>
            <hr/>
        </>
    )
}

export default Header