import React from "react";
import { NavLink } from "react-router-dom";

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

    return (
        <nav className="navBar">
            <ul>
                {
                    links.map(link => {
                        return (
                            <li key={link.id}>
                                <NavLink to={link.path}>{link.text}</NavLink>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    );
};
export default Navbar;
