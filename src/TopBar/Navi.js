import React from "react";
import { Link } from "react-router-dom";
import "./Navi.css";
import {GrLanguage} from 'react-icons/gr';


function Navi(){
    return(
            <div className="navbar" >
                <img src= '/img/logo.svg'  alt="logo"/>
                <Link className="navbarMenu" to={'/workspace'}>Work Space</Link>
                <Link className="navbarMenu" to={'/sandbox'}>Sand Box</Link>
                <button><GrLanguage/></button>
                <button>Login</button>
            </div>
    );
}

export default Navi;