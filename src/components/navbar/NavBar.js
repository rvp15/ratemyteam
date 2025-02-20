import React from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import './navbar.css'

const NavBar = () => {
 
  return (
            <Nav className="nav-links navbar">
              <Nav.Item> <Link to='/home' className="no-underline" >RateMyTeam</Link></Nav.Item>
            <Nav.Item> <Link to='/searchteams' className="no-underline"><span>Search Teams</span></Link></Nav.Item>
             <Nav.Item> <Link to='/reviewpage' className="no-underline review-link">Submit Your Feedback</Link></Nav.Item>
             <Nav.Item> <Link to='/anonymousreview' className="no-underline review-link">Submit an Anonymous Review</Link></Nav.Item>
             <Nav.Item> <Link className="no-underline aboutus-link" href="#action2">About Us</Link></Nav.Item>
             
            </Nav>
  );
};

export default NavBar;
