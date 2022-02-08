import React from "react";
import { Link } from "react-router-dom";

export default function CartWidget() {
  return (
    <>
      <Link to={"/cart"}>
        <img src='/img/cart.png' width="35" height="35" />
      </Link>
    </>
  )
}