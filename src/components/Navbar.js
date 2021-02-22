import React, { Component } from 'react';
import './Navbar.css'
import logo from '../images/logo.jpg'

class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar">
                <div class="container flex">
                    {/* <h1 class="logo">L-il</h1>
                    <div className="logo">
                    </div> */}
                    <img src={logo} style={{width: 90, height: 90, position: 'flex', top: 10, right: 10, margin: 5}}/>
                    {/* <nav>
                        <ul>
                            <li><a href="#" >Home</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Employers</a></li>
                            <li><a href="#">Executives</a></li>
                            <li><a href="#">Client Testimonials</a></li>
                            <li><a href="#">News & Articles</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </nav> */}
                </div>
            </div>
        );
    }
}

export default Navbar;

