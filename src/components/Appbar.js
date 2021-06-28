import React from 'react';
import {Menu, MenuItem, Fade} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../images/logo.jpg';
import {Link} from "react-router-dom";
import About from './About'




export default function Appbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div id="head" >
      <img src={logo} style={{ width: 90, height: 90, margin: 25 }} />
      <MenuIcon style={{ margin: '30 40', position: 'fixed', right: 20 }} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} />
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {/* <Fade in={"active"} timeout={3000}> */}
        <a  href="#head"><MenuItem onClick={handleClose}>Home</MenuItem></a>
        <a href="#about" style={{scrollBehavior: "smooth"}} ><MenuItem onClick={handleClose}>About Us</MenuItem></a>
        <a href="#imployers"><MenuItem onClick={handleClose}>Employers</MenuItem></a>
        <a href="#executives"><MenuItem onClick={handleClose}>Executives</MenuItem></a>
        <a href="#clients"><MenuItem onClick={handleClose}>Client Testimonials</MenuItem></a>
        <a href="#articles"><MenuItem onClick={handleClose}>News & Articles</MenuItem></a>
        <a href="#contact"><MenuItem onClick={handleClose}>Contact Us</MenuItem></a>
        {/* </Fade> */}
      </Menu>
      <h2 style={{ padding: '100px 100px', color: "white"}}><strong>L-il is a boutique executive search firm that specializes in targeted acquisition and headhunting of top talent candidates for our clients.
      Our expertise is recruiting C-level and key executives in the Biotech, High Tech, and other industries, providing personalized end-to-end
    retained search and executive placement services since 2008.</strong></h2>
    <h1 style={{ padding: '200px 300px', textAlign:"center", fontWeight:'900', fontSize: '30px', color: "lightBlue" }} >In a competitive global business environment, top talent
acquisition is the winning strategy</h1>
    </div>
  );
}
