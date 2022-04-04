import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from '../assets/img/logo.png'
import { navItems } from './navItems'
import '../assets/styles/temporary/navbar.css'


const Navbar = () => {

    const [dropdown, setDropdown] = useState(false);

    return (
        <>
            <nav className="navbar" >

                <ul className="nav-items">
                    <li>
                        <Link to='/inventario' className="navbar-logo">
                            {/* <a className="navbar-brand" href="#"> */}
                            <img src={Logo} alt="" width="80" height="40" className="d-inline-block align-text-middle" />
                            {/* </a> */}
                        </Link>
                    </li>
                    {
                        navItems.map((item) => {
                            return (
                                <li key={item.id} className={item.cName}>
                                    <Link to={item.path}>{item.title}</Link>
                                </li>
                            );
                        })
                    }
                </ul>
            </nav>
        </>

    )
}

export default Navbar;