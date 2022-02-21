import React, { useContext, useState } from "react";
import { Card, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { cartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";

export default function ItemDetail({ producto }) {

    const { addItem, removeItem, isInCart } = useContext(cartContext);

    const pictureUrl = '/img/' + producto.imageId;
    let [agregarCarrito, setAgregarCarrito] = useState(false);

    function onAdd(contador) {
        setAgregarCarrito(!agregarCarrito);
        addItem(producto, contador)
    }

    function onRemove(itemId) {
        setAgregarCarrito(!agregarCarrito);
        removeItem(itemId)
    }

    return (
        <>
            <Card style={{ width: '18rem', marginLeft: "auto", marginRight: "auto", borderRadius: '15px' }}>
                <Card.Img variant="top" src={pictureUrl} style={{ width: 200, height: 250, marginLeft: "auto", marginRight: "auto" }} />
                <Card.Body>
                    <Card.Title>{producto.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{producto.price}</Card.Subtitle>
                    <Card.Text>
                        {producto.description}
                    </Card.Text>
                    <Card.Text >Stock disponible: {producto.stock}</Card.Text>
                    {(isInCart(producto.id)) ?
                        <>
                            <Card style={{ width: '15rem', marginLeft: 'auto', marginRight: 'auto', borderStyle: 'none' }}>
                                <Button variant="primary" style={{ borderRadius: '15px' }}>
                                    <Link to={"/cart"} style={{ textDecoration: 'none', color: 'white' }}>
                                        FINALIZAR
                                    </Link>
                                </Button>
                                <Button onClick={() => onRemove(producto.id)} variant="secondary" style={{ marginTop: '2px', borderRadius: '15px' }}>
                                    ELIMINAR DEL CARRITO
                                </Button>
                            </Card>
                        </>
                        :
                        <>
                            <ItemCount stock={producto.stock} initial="1" onAdd={onAdd}></ItemCount>
                        </>
                    }
                </Card.Body>
            </Card>
        </>
    )
}