import React from "react";
import firebase from "firebase";
import { useState } from "react";
import { useRef } from "react";
import { getFirestore } from "../firebase/firebase";
import { cartContext } from "../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import "./Order.css";
import { useEffect } from "react";

export default function Orders() {

    const { carrito, total, clear } = useContext(cartContext);
    const [orderId, setOrderId] = useState('');
    const [formCompleted, setFormCompleted] = useState(false)
    const [isValidName, setIsValidName] = useState(false)
    const [isValidPhone, setIsValidPhone] = useState(false)
    const [isValidEmail, setIsValidEmail] = useState(false)

    const nameRef = useRef();
    const phoneRef = useRef();
    const emailRef = useRef();

    function validacionNombre(formRef) {
        setIsValidName(!!formRef);
    };

    function validacionTelefono(formRef) {
        var regExp = /^\d+$/;
        setIsValidPhone(!!regExp.test(formRef));
    };

    function validacionEmail(formRef) {
        setIsValidEmail(!!formRef);
    };

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

    useEffect(() => {
        setFormCompleted(isValidName && isValidPhone && isValidEmail)
    }, [formCompleted, isValidName, isValidPhone, isValidEmail])

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
                    <div className="datosCompra">
                        <h3>Ingresa tus Datos</h3>
                        <br />
                        <input
                            onBlur={() => validacionNombre(nameRef.current.value)}
                            type="text"
                            name="name"
                            ref={nameRef}
                            placeholder="Nombre y Apellido"
                        />
                        {!isValidName && <span> El nombre es obligatorio </span>}
                        < br />
                        <input
                            onBlur={() => validacionTelefono(phoneRef.current.value)}
                            type="tel"
                            name="mobile"
                            ref={phoneRef}
                            placeholder="Número de celular"
                        />
                        {!isValidPhone && <span> El telefono es invalido </span>}
                        < br />
                        <input
                            onBlur={() => validacionEmail(emailRef.current.value)}
                            type="email"
                            name="email"
                            ref={emailRef}
                            placeholder="Tu email"
                        />
                        {!isValidEmail && <span> El email es obligatorio </span>}
                        < br />
                        {(formCompleted) ? <>
                            <button onClick={() => confirmarCompra()} className="btn-confirmar">
                                Confirmar
                            </button>
                        </>
                            :
                            <>
                                <button disabled className="btn-form-incomplete">
                                    Confirmar
                                </button>
                            </>
                        }
                    </div>
                </>
            }
        </>
    )
}