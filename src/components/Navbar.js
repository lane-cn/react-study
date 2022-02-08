import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
    const links = [
        {
            id: 1,
            text: "Home",
            path: "/"
        },
        {
            id: 2,
            text: "About",
            path: '/about'
        },
        {
            id: 3,
            text: "Contact",
            path: '/about/contact'
        },
        {
            id: 4,
            text: "Company",
            path: '/about/company'
        },
    ];

    const [navOpen, setNavOpen] = useState(false);

    const handleToggle = (e) => {
        setNavOpen(!navOpen);
    };

    const hideMenu = (e) => {
        setNavOpen(false);
    };

    return (
        <nav className="navBar">
            <button onClick={handleToggle}>
                {navOpen ? (
                    <MdClose style={{color: "#fff", width: "40px", height: "40px"}}/>
                ) : (
                    <FiMenu style={{color: "#7b7b7b", width: "40px", height: "40px"}}/>
                )}
            </button>
            <ul className={`menuNav ${navOpen ? " showMenu" : ""}`}>
                {
                    links.map(link => {
                        return (
                            <li key={link.id}>
                                <NavLink onClick={hideMenu} to={link.path}>{link.text}</NavLink>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    );
};
export default Navbar;
