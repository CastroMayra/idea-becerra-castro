import React from "react";
import { Navbar, Container, NavDropdown, Nav, Row, Col } from 'react-bootstrap';
import CartWidget from "./CartWidget";

export default function NavBar() {
    return (
        <>
            <Navbar bg="#BFE4FC" expand="lg" style={{backgroundColor:'#BFE4FC'}}>
                <Container>
                    <Navbar.Brand href="#inicio">Tienda de Mascotas</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#inicio">INICIO</Nav.Link>
                            <Nav.Link href="#contacto">CONTACTO</Nav.Link>
                            <NavDropdown title="MASCOTAS" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">GATOS</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">PERROS</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">AVES</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">EXÓTICOS</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                    <CartWidget/>
                </Container>
            </Navbar>


        </>

    )
}