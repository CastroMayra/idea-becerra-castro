import React from "react";
import { Card, Button } from 'react-bootstrap';
import ItemCount from "./ItemCount";



export default function ItemDetail({ producto }) {

    console.log('./img/' + producto.pictureUrl)
    const pictureUrl = '/img/' + producto.pictureUrl;

    return (
        <>
            <Card style={{ width: '18rem', marginLeft: "auto", marginRight: "auto" }}>
                <Card.Img variant="top" src={pictureUrl} style={{ width: 200, height: 250, marginLeft: "auto", marginRight: "auto" }} />
                <Card.Body>
                    <Card.Title>{producto.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{producto.price}</Card.Subtitle>
                    <Card.Text>
                        {producto.description}
                    </Card.Text>
                    <Card.Text >Stock disponible: {producto.stock}</Card.Text>
                    <ItemCount stock={producto.stock} initial="1" ></ItemCount>
                </Card.Body>
            </Card>
        </>
    )

}