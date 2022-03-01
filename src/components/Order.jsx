import React from "react";
import firebase from "firebase";
import { useState } from "react";
import { useRef } from "react";
import { getFirestore } from "../firebase/firebase";
import { cartContext } from "../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import "./Order.css";

export default function Orders() {

    const { carrito, total, clear } = useContext(cartContext);
    const [orderId, setOrderId] = useState('');

    const nameRef = useRef();
    const phoneRef = useRef();
    const emailRef = useRef();

    function confirmarCompra() {
        const db = getFirestore();
        const orders = db.collection("Orders");

        const miOrden = {
            buyer: {
                name: nameRef.current.value,
                phone: phoneRef.current.value,
                email: emailRef.current.value,
            },
            items: carrito,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: total()
        }

        orders.add(miOrden)
            .then(({ id }) => {
                setOrderId(id);
                clear();

            })
            .catch((err) => {
                console.log(err);

            });
    }

    return (
        <>
            {(orderId) ?
                <>
                    <h1>Felicitaciones tu N° de Compra es: {orderId} </h1>
                    <Link to={"/"} style={{ textDecoration: 'none', color: 'whitesmoke', backgroundColor: '#457D9B', textTransform: 'uppercase', padding: '10px', borderRadius: '15px' }} >
                        Volver
                    </Link>
                </>
                :
                <>
                    <div>
                        <h3>Ingresa tus Datos</h3>
                        <br />

                        <input type="text" name="name" ref={nameRef} placeholder="Nombre y Apellido" />
                        < br />
                        <input type="tel" name="mobile" ref={phoneRef} placeholder="Número de celular" />
                        < br />
                        <input type="email" name="email" ref={emailRef} placeholder="Tu email" />
                        < br />
                        <button onClick={() => confirmarCompra()} className="btn-confirmar">
                            Confirmar
                        </button>
                    </div>
                </>
            }
        </>
    )
}