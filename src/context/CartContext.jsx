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
        }
        else {
            setCarrito([...carrito, { item: item, quantity: quantity }])
        }
    }

    function removeItem(itemId) {
        const removeItem = (carrito.findIndex(producto => producto.item.id == itemId))
        if (removeItem >= 0) {
            carrito.splice(removeItem, 1);
            setCarrito([...carrito])
        }
    }

    function clear() {
        setCarrito([])
    }

    function isInCart(itemId) {
        const isInCart = (carrito.findIndex(producto => producto.item.id == itemId))
        return isInCart >= 0
    }

    function isEmpty() {
        return carrito.length == 0
    }

    function total() {
        let total = 0;
        carrito.forEach(element => {
            total = total + (element.item.price * element.quantity)
        });
        return total;
    }

    return (
        <>
            <cartContext.Provider value={{ carrito, setCarrito, addItem, removeItem, clear, isInCart, isEmpty, total }}>
                {children}
            </cartContext.Provider>
        </>
    )




}