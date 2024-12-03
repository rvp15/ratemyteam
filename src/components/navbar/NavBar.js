import React from "react";
import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import SearchAutoComplete from "./SearchAutoComplete";
import teamData  from "../../assets/mockData/teamDataJson.json";

const NavBar = () => {
  const teams = teamData["Team and Age"]; 
 
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiar nav-bar">
        <Container fluid className="container">
          <Navbar.Brand href="#">RateMySport</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 nav-link"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav href="#action1">Search Teams</Nav>
              <Nav href="#action1">Write a Review</Nav>
              <Nav href="#action2">About Us</Nav>
            </Nav>
            <SearchAutoComplete
              placeholder={"Search your sport"}
              staticData={teams}
              dataKey={"Team"}
              customeLoading={<>Loading...</>}
              onSelect={(res) => console.log(res)}
              onChange={(input)=>{}}
              onBlur={(e)=>{}}
              onFocus={(e)=>{}}
              
            />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
