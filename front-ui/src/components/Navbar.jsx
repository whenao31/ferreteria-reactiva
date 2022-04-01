import React from "react";
import { Link } from "react-router-dom";
import Logo from '../assets/img/logo.png'


const Navbar = () => {
    return(
        <nav className="navbar fixed-top navbar-light" >
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={Logo} alt="" width="25" height="21" className="d-inline-block align-text-middle"/>
                <Link className="navbar-brand" to="/dashboard">Tablero de control</Link>
                <Link className="navbar-brand" to="/">Login</Link>
                <Link className="navbar-brand" to="/register">SignUp</Link>
                </a>
            </div>
        </nav>
    )
}

export default Navbar;