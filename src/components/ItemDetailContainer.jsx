import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getFirestore } from "../firebase/firebase";
import "./ItemDetail.css";
import "./LoadingSpinner.css"

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

            {(productoEncontrado) ?
                <>
                    <Link to={"/"} style={{ textDecoration: 'none', color: 'black' }}>
                        <button className="btn-confirmar">
                            Volver
                        </button>
                    </Link>
                    <ItemDetail producto={itemDetail} />
                </>
                :
                <>
                    <div class="center">
                        <div class="loadingSpinner" >
                            <div>
                                Loading
                            </div>
                        </div>
                    </div>
                </>
            }
        </>
    )
}