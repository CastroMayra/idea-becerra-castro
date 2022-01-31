import React from "react";
import { Navbar, Container, NavDropdown, Nav, Row, Col } from 'react-bootstrap';
import CartWidget from "./CartWidget";
import { Link } from 'react-router-dom';
import "./NavBar.css";


export default function NavBar() {

    return (
        <>

            <Navbar bg="#BFE4FC" expand="lg" style={{ backgroundColor: '#BFE4FC' }}>
                <Container>
                    <Navbar.Brand>
                        <Link to={"/"} style={{ textDecoration: 'none' }}>Tienda para Mascotas</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link>
                                <Link to={"/"} style={{ textDecoration: 'none' }}>INICIO</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to={"/contacto"} style={{ textDecoration: 'none' }}>CONTACTO</Link>
                            </Nav.Link>
                            {/* <Nav.Link href="#contacto">CONTACTO</Nav.Link>*/}
                            <NavDropdown title="MASCOTAS" id="basic-nav-dropdown">
                                <NavDropdown.Item>
                                    <Nav.Link>
                                        <Link to={"/categoria/gatos"} style={{ textDecoration: 'none' }}>GATOS</Link>
                                    </Nav.Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Nav.Link>
                                        <Link to={"/categoria/perros"} style={{ textDecoration: 'none' }}>PERROS</Link>
                                    </Nav.Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Nav.Link>
                                        <Link to={"/categoria/aves"} style={{ textDecoration: 'none' }}>AVES</Link>
                                    </Nav.Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Nav.Link>
                                        <Link to={"/categoria/roedores"} style={{ textDecoration: 'none' }}>ROEDORES</Link>
                                    </Nav.Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                    <CartWidget />
                </Container>
            </Navbar>



        </>

    )
}