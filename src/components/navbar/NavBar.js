import React from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import './navbar.css'

const NavBar = () => {
 
  return (
            <Nav className="nav-links navbar">
              <Nav.Item> <Link to='/home' className="no-underline" >RateMyTeam</Link></Nav.Item>
            <Nav.Item> <Link to='/searchteams' className="no-underline"><span  >Search Teams</span></Link></Nav.Item>
             <Nav.Item> <Link  className="no-underline review-link"href="#action1">Write a Review</Link></Nav.Item>
             <Nav.Item> <Link className="no-underline aboutus-link" href="#action2">About Us</Link></Nav.Item>
             
            </Nav>
  );
};

export default NavBar;
