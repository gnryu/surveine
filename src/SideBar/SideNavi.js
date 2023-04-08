import React, {useState} from "react";
import './SideNavi.css';
import {Nav, Navbar, NavDropdown, Container} from'react-bootstrap';
import {FiSettings} from 'react-icons/fi';
import {CgProfile} from 'react-icons/cg';

function SideNavi(){

return(
  <div className="container">
     <div className="navbar">
      <div>
      <img src= "/img/logo.svg"  alt="logo"/>
      </div>
      <div>
        <FiSettings classnName="icon" color="grey" />
      </div>
      <img src="/img/profile.svg" alt="profile"/>
      <div className="name"> Kaffeine</div>
      <hr/>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/gps설문함">GPS 설문함</Nav.Link>
          <NavDropdown 
          title="제작함" 
          id="produce-dropdown">
            <NavDropdown.Item href="/기본제작함">기본제작함</NavDropdown.Item>
            <br/>
            <NavDropdown.Item href="/차세대챗봇">차세대챗봇</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown 
            title="참여함" 
            id="response-dropdown">
            <NavDropdown.Item href="/기본참여함">기본참여함</NavDropdown.Item>
          </NavDropdown>
        </Nav>  
      </Navbar.Collapse>
      </div>
      </div>
  );
}

export default SideNavi;