import React from "react";
import { Link } from "react-router-dom";
import "./NaviTwo.css";
import {GrLanguage} from 'react-icons/gr';


function NaviTwo(){
    return(
            <div className="navbar" >
                <Link className="navbarMenu" to={'/workspace'}>Work Space</Link>
                <Link className="navbarMenu" to={'/sandbox'}>Sand Box</Link>
                <button><GrLanguage/></button>
                <button>Logout</button>
            </div>
    );
}

export default NaviTwo;