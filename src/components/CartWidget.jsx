import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../context/CartContext";

export default function CartWidget() {

  const { carrito } = useContext(cartContext);


  function cantidad() {
    let cantidad = 0;
    carrito.forEach(element => {
      cantidad += Number(element.quantity)

    });
    return cantidad
  }


  return (
    <>
      <Link to={"/cart"}>
        <img src='/img/cart.png' width="35" height="35" />
      </Link>
      <p>{cantidad()}</p>
    </>
  )
}