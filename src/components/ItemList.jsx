import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Item from "./Item";
import { Container } from 'react-bootstrap';
import { getFirestore } from "../firebase/firebase";
import "./LoadingSpinner.css"

export default function ItemList({ categoryId }) {

    const [loading, setLoading] = useState(false);
    const [itemList, setItemList] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        setLoading(true);

        var itemCollection;
        if (categoryId) {
            itemCollection = db.collection("ItemCollection")
                .where("categoryId", "==", categoryId)
        } else {
            itemCollection = db.collection("ItemCollection")
        }

        itemCollection.get()
            .then((querySnapShot) => {
                if (querySnapShot.empty) {
                    alert("No existe esa colección")
                    return
                }
                setItemList(querySnapShot.docs.map((doc) => {
                    return { id: doc.id, ...doc.data() }
                }));

            })
            .catch((err) => {
                console.log(err);
            })
        const arrayList = itemList;
        if (categoryId > "") {
            setItemList(arrayList.filter(producto => producto.categoria == categoryId))
        }
    }, [categoryId])

    return (
        <>
            {(loading) ?
                <>
                    {itemList.map(producto => {
                        return <>
                            <div className="bg-light border">
                                <Link to={"/item/" + producto.id} style={{ textDecoration: 'none' }}>
                                    <Container fluid>
                                        <Item producto={producto} />
                                    </Container>
                                </Link>
                            </div>

                        </>

                    })}
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