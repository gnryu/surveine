import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import {GrLanguage} from 'react-icons/gr';


function Nav(){
    return(        
        <div className="navbar"> 
        <div className="icon">
            {/* 로고쪽 색상 변경 */}
            <img className="logo" src= '/img/logo.svg'  alt="logo"/>
            {/* 사이트로고 */}
            </div>
            <div>
            <Link className="navbarMenu" to={'/workspace'}>Work Space</Link>
            <Link className="navbarMenu" to={'/sandbox'}>Sand Box</Link>
            </div>
            <div className="buttons">
                <button><GrLanguage/></button> 
                {/* 번역 아이콘 */}
                <button>Logout</button>
            </div>
        </div>
    );
}

export default Nav;