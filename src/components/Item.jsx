import React from "react";
import { Card, ButtonGroup, Button } from 'react-bootstrap';


export default function Item({ producto }) {
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{producto.Title}</Card.Title>
                    <Card.Text>
                        {producto.description}
                    </Card.Text>
                    <Card.Subtitle className="mb-2 text-muted">{producto.price}</Card.Subtitle>
                    <Button variant="primary">AGREGAR AL CARRO</Button>
                </Card.Body>
            </Card>
        </>
    )

}