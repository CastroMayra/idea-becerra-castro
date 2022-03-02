import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { getFirestore } from "../firebase/firebase";
import "./LoadingSpinner.css"
import "./ItemListContainer.css"

export default function ItemListContainer() {

    const { categoryId } = useParams();

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
                    <div className="grillaProductos">
                        {itemList.map(producto => {
                            return <>
                                <ItemList producto={producto} />
                            </>
                        })}
                    </div>
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
