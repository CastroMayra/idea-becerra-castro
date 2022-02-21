import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getFirestore } from "../firebase/firebase";

export default function ItemDetailContainer() {

    const { itemId } = useParams();
    const [productoEncontrado, setProductoEncontrado] = useState(false);
    const [itemDetail, setItemDetail] = useState({});

    useEffect(() => {
        const db = getFirestore();

        const itemCollection = db.collection("ItemCollection");
        const miItem = itemCollection.doc(itemId);

        miItem.get()
            .then((doc) => {
                if (!doc.exists) {
                    // alert("No existe ese producto")
                    return
                }
                setItemDetail({ id: doc.id, ...doc.data() });
                setProductoEncontrado(true);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [itemId])

    return (
        <>
            <Link to={"/"} style={{ textDecoration: 'none', color: 'black' }}>
                Volver
            </Link>
            {(productoEncontrado) ?
                <>
                    <ItemDetail producto={itemDetail} />
                </>
                :
                <>Loading...</>
            }
        </>
    )
}