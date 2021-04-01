import React from 'react';
import { Icon, Navbar, NavItem, Row } from "react-materialize";

const Header = () => {
    return (
        <Row>
            <Navbar
                menuIcon={<Icon>menu</Icon>}>
                    <NavItem href="">
                        Home
                    </NavItem>
                    <NavItem href="contact">
                        Contact
                    </NavItem>
                    <NavItem href="login">
                        Login
                    </NavItem>
            </Navbar>
        </Row>
    );
};

export default Header;