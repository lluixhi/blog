import React from 'react';
import 'materialize-css';
import { Icon, Navbar } from "react-materialize";
import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

const Header = () => {
    return (
        <Navbar
            alignLinks='right'
            brand={<NavLink to='/'>CB</NavLink>}
            menuIcon={<Icon>menu</Icon>}>
                <NavHashLink to="/#projects">
                    Projects
                </NavHashLink>
                <NavHashLink to="/#contact">
                    Contact
                </NavHashLink>
        </Navbar>
    );
};

export default Header;