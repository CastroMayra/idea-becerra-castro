import React, { useState } from "react";
import { Card, ButtonGroup, Button } from 'react-bootstrap';
import "./ItemCount.css";

export default function ItemCount({ stock, initial, onAdd, carrito }) {

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
            <Card style={{ width: '15rem', marginLeft: 'auto', marginRight: 'auto', borderStyle: 'none' }}>
                <ButtonGroup aria-label="Basic example">
                    <minus onClick={() => Restar()} class="minus"></minus>
                    <Card.Body style={{ textAlign: 'center', fontSize: 'x-large' }}>
                        {contador}
                    </Card.Body>
                    <plus onClick={() => Sumar()} class="plus"></plus>
                </ButtonGroup>
                <Button onClick={() => onAdd(contador)} variant="primary" style={{ marginTop: '2px', borderRadius: '15px' }}>
                    AGREGAR AL CARRITO
                </Button>
            </Card>
            <br />
        </>
    )
}
