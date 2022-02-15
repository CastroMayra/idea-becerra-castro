import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../context/CartContext";

export default function CartWidget() {

  const { carrito } = useContext(cartContext);
  const [cartCount, setCartCount] = useState();

  /* 
    function cantidad() {
      let cantidad = 0;
      carrito.forEach(element => {
        cantidad += Number(element.quantity)
  
      });
      return cantidad
    } */

  useEffect(() => {
    let cantidad = 0;
    carrito.forEach(element => {
      cantidad += Number(element.quantity)

    });
    setCartCount(cantidad)
  }, [carrito])


  return (
    <>
      <Link to={"/cart"}>
        <img src='/img/cart.png' width="35" height="35" />
      </Link>
      <p>{cartCount}</p>
    </>
  )
}