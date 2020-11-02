import React from "react";
import n from './Navbar.module.css'
import {NavLink} from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className={n.nav}>
            <div className={`${n.item} ${n.active}`}><NavLink to='/profile' activeClassName={n.active}>Profile</NavLink>
            </div>
            <div className={n.item}><NavLink to='/dialogs' activeClassName={n.active}>Dialogs</NavLink></div>
            <div className={n.item}><NavLink to='/users' activeClassName={n.active}>Users</NavLink></div>
            <div className={n.item}><a>News</a></div>
            <div className={n.item}><a>Music</a></div>
            <div className={n.item}><a>Settings</a></div>

        </nav>
    );
}
export default Navbar;
