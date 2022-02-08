import React, { createContext, useState } from "react";

export const cartContext = createContext();

export default function CartContext({ children }) {

    const [carrito, setCarrito] = useState([]);

    function addItem(item, quantity) {
        const agregarItem =
        {
            item: item,
            quantity: quantity
        };
        if (isInCart(item.id)) {
            alert("El producto ya se encuentra en el Carrito")
        }
        else {
            setCarrito([...carrito, { item: item, quantity: quantity }])
            /*   carrito.push(agregarItem);
            /*    (Estos 3 Puntos se llama Spread y trae lo que ya tiene previamente cargado el Array)     
   setCarrito([...carrito, {item:item, cantidad: quantity}]) */
            alert("Se agregaron " + quantity + " " + item.title + " al carrito");
        }
    }

    function removeItem(itemId) {
        const removeItem = (carrito.findIndex(producto => producto.item.id == itemId))
        if (removeItem >= 0) {
            const itemEliminado = carrito.splice(removeItem, 1);
            alert("Se ha eliminado " + itemEliminado[0].item.title + " del carrito");

        } else {
            alert("El producto no está en el carrito");
        }

    }

    function clear() {
        setCarrito([])
        alert("Se han eliminado todos los productos del carrito")
    }

    function isInCart(itemId) {
        const isInCart = (carrito.findIndex(producto => producto.item.id == itemId))
        return isInCart >= 0
    }

    function isEmpty() {
        return carrito.length == 0
    }

    return (
        <>
            <cartContext.Provider value={{ carrito, setCarrito, addItem, removeItem, clear, isInCart, isEmpty }}>
                {children}
            </cartContext.Provider>
        </>
    )




}