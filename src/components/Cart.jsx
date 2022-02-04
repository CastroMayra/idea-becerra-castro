import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { cartContext } from "../context/CartContext";


export default function Cart() {

    const { carrito, setCarrito, clear } = useContext(cartContext);

    return (
        <>
            {carrito.map(producto => {
                return <>
                    <div className="bg-light border">
                        <p>{producto.item.title}</p>
                        <p>{producto.cantidad}</p>
                    </div>

                </>

            })}
            <Button onClick={() => clear()}>ELIMINAR CARRITO</Button>

        </>
    )

}