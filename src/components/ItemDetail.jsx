import React from "react";
import { Card } from 'react-bootstrap';
import img from './img/NutriqueHealty2k.jpg';



export default function ItemDetail({ producto }) {
    
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} style={{width:200, height:260, marginLeft: "auto", marginRight:"auto"}}/>
                <Card.Body>
                    <Card.Title>{producto.Title}</Card.Title>
                    <Card.Text>
                        {producto.description}
                    </Card.Text>
                    <Card.Subtitle className="mb-2 text-muted">{producto.price}</Card.Subtitle>
                </Card.Body>
            </Card>
        </>
    )

}