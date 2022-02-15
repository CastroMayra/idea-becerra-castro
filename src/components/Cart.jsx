import React, { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { cartContext } from "../context/CartContext";
import "./Cart.css";
import { Link } from "react-router-dom";


export default function Cart() {

    const { carrito, removeItem, clear, isEmpty } = useContext(cartContext);
    const [actualizarCarrito, setActualizarCarrito] = useState(false);

    function total() {
        let total = 0;
        carrito.forEach(element => {
            total = total + (element.item.price * element.quantity)
        });
        return total;
    }

    useEffect(() => {
        setActualizarCarrito(!actualizarCarrito);
    })


    return (
        <>
            {(isEmpty()) ?
                <>
                    <br></br>
                    <div style={{ color: 'gray', fontSize: '20px', textTransform: 'none' }}>Ehmm... parece que no hay productos en el Carrito!</div>
                    <br />
                    <Link to={"/"} style={{ textDecoration: 'none', color: 'whitesmoke', backgroundColor: '#457D9B', textTransform: 'uppercase', padding: '10px', borderRadius: '15px' }}>Elegir productos</Link>
                </>
                :
                <>
                    <div className="grid-container">
                        <div className="grid-header">Producto</div>
                        <div className="grid-header">Cantidad</div>
                        <div className="grid-header">Precio</div>
                        <div className="grid-header">Eliminar</div>
                        {carrito.map(producto => {
                            return <>
                                <div className="grid-item">{producto.item.title}</div>
                                <div className="grid-count">{producto.quantity}</div>
                                <div className="grid-price">{producto.item.price * producto.quantity}</div>
                                <div onClick={() => removeItem(producto.item.id)} className="grid-delete">
                                    <img className="img-delete" src='/img/remove.png' width="25" height="30" />
                                </div>
                            </>

                        })}
                        <div className="grid-total">TOTAL</div>
                        <div className="grid-suma">{total()}</div>
                        <div style={{ backgroundColor: 'white' }}>
                            <div className="btn-grad" onClick={() => clear()}>
                                VACIAR CARRITO
                            </div>
                        </div>
                    </div >
                    <br />


                </>
            }


        </>
    )

}