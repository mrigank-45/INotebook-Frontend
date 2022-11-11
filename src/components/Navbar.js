import React from 'react'
import '../App.css';
import '../tooplate_style.css';

const Navbar = () => {
   
    const handleLogout = () => {
        var z = window.confirm("Are you sure you want to Logout?");
        if (z === true) {
            localStorage.removeItem('token');
        } else {
            window.location.reload();
        }

    }

    return (
        <div id="tooplate_sidebar">

            <div id="header">
                <h1>iNotebook</h1>
            </div>

            <div id="menu">
                <ul class="navigation">
                    <li><a href="/" class="selected menu_01" onClick={onclick} >Home</a></li>
                    <li><a href="/notes" class="menu_03">Your Notes</a></li>
                    <li><a href="/about" class="menu_02">About Us</a></li>
                    <li><a href="/contact" class="menu_05">Contact Us</a></li>
                    {!localStorage.getItem('token') ?
                        <div>
                            <li><a href="/login" class="menu_05" role="button">Login</a></li>
                            <li><a href="/signup" class="menu_05" role="button">Signup</a></li>
                        </div> : <li><a href="/login" class="menu_05" role="button" onClick={handleLogout}>  Logout </a></li>}
                </ul>
            </div>
        </div>
    )
}

export default Navbar
