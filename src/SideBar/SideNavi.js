import React from "react";
import './SideNavi.css';
import {Nav, Navbar, NavDropdown, Container} from'react-bootstrap';
import {FiSettings} from 'react-icons/fi';

function SideNavi(){

return(
     <div className="sidebar">
      <div>
        <FiSettings classnName="icon" color="grey" /> 
        {/* 환경설정 아이콘 */}
      </div>
      <img src="/img/profile.svg" alt="profile"/>
      {/* 프로필 아이콘 */}
      <div className="name"> Kaffeine</div>
      <hr/>
      <Navbar.Collapse id="responsive-navbar-nav">
        {/* 설문조사 함들 */}
        <Nav className="me-auto">
          <Nav.Link href="/gps설문함">GPS 설문함</Nav.Link>
          {/* 드롭다운 메뉴 */}
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
  );
}

export default SideNavi;