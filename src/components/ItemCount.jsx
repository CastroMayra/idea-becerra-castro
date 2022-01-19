import React, { useState } from "react";
import { Card, ButtonGroup, Button } from 'react-bootstrap';

export default function ItemCount(stock, initial) {

    const [contador, setContador] = useState(initial);

    function Sumar() {
        let aux = contador
        aux++
        if (aux <= stock) {
            setContador(aux)
        }
    }

    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Contador</Card.Title>
                </Card.Body>
                <ButtonGroup aria-label="Basic example">
                    <Button variant="secondary">-</Button>
                    {initial}
                    <Button onClick={() => Sumar()} variant="secondary">+</Button>
                </ButtonGroup>
            </Card>
        </>
    )
}
