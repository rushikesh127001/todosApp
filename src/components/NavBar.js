import React from "react"
import {Link, NavLink} from "react-router-dom";

const Navbar = () => {
    const links = [
        {
            id: 1,
            path: "/app",
            text: "Home",
        },
        {
            id: 2,
            path: "/",
            text: "SignIn",
        },
    ]
    return (
        <nav className="navBar">
        <ul>
            {links.map(link => {
                return <li key={link.id}>
                    <NavLink to={link.path} activeClassName="active-link">{link.text}</NavLink>
                </li>
            })}
        </ul>
    </nav>
    )
}
export default Navbar