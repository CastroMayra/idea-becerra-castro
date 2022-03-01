import React from "react";
import { Card } from 'react-bootstrap';


export default function Item({ producto }) {

    const pictureUrl = '/img/' + producto.imageId;

    return (
        <>
            <Card className="card-item" style={{ width: '15rem', marginLeft: "auto", marginRight: "auto" }}>
                <Card.Img variant="top" src={pictureUrl} style={{ width: 200, height: 260, marginLeft: "auto", marginRight: "auto" }} />
                <Card.Body>
                    <Card.Title>
                        {producto.title}
                    </Card.Title>
                    <Card.Text>
                        {producto.description}
                    </Card.Text>
                    <Card.Subtitle className="mb-2 text-muted">{producto.price}</Card.Subtitle>
                </Card.Body>
            </Card>
        </>
    )

}