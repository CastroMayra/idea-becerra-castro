import React from "react";
import { Link } from "react-router-dom";
import Item from "./Item";
import { Container } from 'react-bootstrap';

export default function ItemList({ producto }) {


    return (
        <>
            <Container fluid>
                <Link to={"/item/" + producto.id} style={{ textDecoration: 'none' }}>
                    <Item producto={producto} />
                </Link>
            </Container>
        </>
    )
}