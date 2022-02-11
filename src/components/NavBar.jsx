import React, { useContext, useEffect, useState } from "react";
import { Navbar, Container, NavDropdown, Nav, Row, Col } from 'react-bootstrap';
import CartWidget from "./CartWidget";
import { Link } from 'react-router-dom';
import "./NavBar.css";
import { cartContext } from "../context/CartContext";


export default function NavBar() {
    const { carrito, isEmpty }
        = useContext(cartContext);

    const [carritoVacio, setCarritoVacio] = useState(false);

    useEffect(() => {
        (carrito.length > 0) ?
            setCarritoVacio(true)
            :
            setCarritoVacio(false)
    })

    return (
        <>

            <Navbar expand="lg" style={{ backgroundImage: `linear-gradient(to right, #43cea2 0%, #185a9d  71%, #43cea2  100%)`, }}>
                <Container>
                    <Navbar.Brand>
                        <Link to={"/"} class="navBrand">
                            Tienda para Mascotas
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" >
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
                                    <Nav.Link >
                                        <Link to={"/categoria/gatos"} class="navLink" style={{ color: 'black' }}>
                                            GATOS
                                        </Link>
                                    </Nav.Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Nav.Link>
                                        <Link to={"/categoria/perros"} class="navLink" style={{ color: 'black' }}>
                                            PERROS
                                        </Link>
                                    </Nav.Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Nav.Link>
                                        <Link to={"/categoria/aves"} class="navLink" style={{ color: 'black' }}>
                                            AVES
                                        </Link>
                                    </Nav.Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Nav.Link>
                                        <Link to={"/categoria/roedores"} class="navLink" style={{ color: 'black' }}>
                                            ROEDORES
                                        </Link>
                                    </Nav.Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                    <>
                        {(carritoVacio) ?
                            <>
                                <CartWidget />
                            </>
                            :
                            <>
                            </>

                        }
                    </>
                </Container>
            </Navbar>



        </>

    )
}