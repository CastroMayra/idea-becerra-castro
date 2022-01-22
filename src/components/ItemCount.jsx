import React, { useState } from "react";
import { Card, ButtonGroup, Button } from 'react-bootstrap';

export default function ItemCount({ stock, initial }) {

    let [contador, setContador] = useState(initial);

    function Sumar() {
        let aux = contador
        aux++
        if (aux <= stock) {
            setContador(aux)
        }
    }
    function Restar() {
        let aux = contador
        aux--
        (aux > 0) ? setContador(aux) : setContador(contador)
    }
    return (
        <>
        <br/>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title style={{ textAlign:'center'}}>Contador</Card.Title>
                </Card.Body>
                <ButtonGroup aria-label="Basic example">
                    <Button onClick={() => Restar()} variant="secondary">-</Button>
                    <Card.Body style={{ textAlign:'center'}}>{contador}</Card.Body>
                    <Button onClick={() => Sumar()} variant="secondary">+</Button>
                </ButtonGroup>
            </Card>
            <br/>
        </>
    )
}
