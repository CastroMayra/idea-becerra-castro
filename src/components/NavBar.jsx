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
                        <Link to={"/"} class="navBrand">
                            Tienda para Mascotas
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link>
                                <Link to={"/"} class="navLink" >
                                    INICIO
                                </Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to={"/contacto"} class="navLink">
                                    CONTACTO
                                </Link>
                            </Nav.Link>
                            {/* <Nav.Link href="#contacto">CONTACTO</Nav.Link>*/}
                            <NavDropdown title="MASCOTAS" id="basic-nav-dropdown">
                                <NavDropdown.Item>
                                    <Nav.Link>
                                        <Link to={"/categoria/gatos"} class="navLink">
                                            GATOS
                                        </Link>
                                    </Nav.Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Nav.Link>
                                        <Link to={"/categoria/perros"} class="navLink">
                                            PERROS
                                        </Link>
                                    </Nav.Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Nav.Link>
                                        <Link to={"/categoria/aves"} class="navLink">
                                            AVES
                                        </Link>
                                    </Nav.Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Nav.Link>
                                        <Link to={"/categoria/roedores"} class="navLink">
                                            ROEDORES
                                        </Link>
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