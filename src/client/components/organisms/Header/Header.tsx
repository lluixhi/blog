import React from 'react';
import { Icon, Navbar, Row } from "react-materialize";
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Row>
            <Navbar
                menuIcon={<Icon>menu</Icon>}>
                    <NavLink to="">
                        Home
                    </NavLink>
                    <NavLink to="contact">
                        Contact
                    </NavLink>
                    <NavLink to="login">
                        Login
                    </NavLink>
            </Navbar>
        </Row>
    );
};

export default Header;