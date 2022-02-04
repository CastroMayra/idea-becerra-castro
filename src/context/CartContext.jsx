import React, { createContext, useState } from "react";

export const cartContext = createContext();

export default function CartContext({ children }) {

    const [carrito, setCarrito] = useState([]);

    function addItem(item, quantity) {
        const agregarItem =
        {
            item: item,
            cantidad: quantity
        };
        console.log(item.id)
        if (isInCart(item.id)) {
            alert("El producto ya se encuentra en el Carrito")
        }
        else {
            carrito.push(agregarItem);
            /*    (Estos 3 Puntos se llama Spread y trae lo que ya tiene previamente cargado el Array)     
setCarrito([...carrito, {item:item, cantidad: quantity}]) */
            alert("Se agregaron " + quantity + " " + item.title + " al carrito");
        }
    }

    function removeItem(itemId) {
        const removeItem = (carrito.findIndex(producto => producto.item.id == itemId))
        if (removeItem >= 0) {
            const itemEliminado = carrito.splice(removeItem, 1)
            alert("Se ha eliminado " + itemEliminado.item.title + " del carrito")
        } else {
            alert("El producto no está en el carrito")
        }

    }

    function clear() {
        setCarrito([])
    }

    function isInCart(itemId) {
        const isInCart = (carrito.findIndex(producto => producto.item.id == itemId))
        console.log("isInCart " + isInCart)
        return isInCart >= 0
    }

    return (
        <>
            <cartContext.Provider value={{ carrito, setCarrito, addItem, removeItem, clear, isInCart }}>
                {children}
            </cartContext.Provider>
        </>
    )




}