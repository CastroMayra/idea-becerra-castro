import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Item from "./Item";
import { Container } from 'react-bootstrap';
import { getFirestore } from "../firebase/firebase";


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


    /* const productoEnStock = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {
                    id: 1,
                    categoria: "gatos",
                    title: "Nutrique",
                    description: "Alimento para Gatos 2Kg",
                    price: 2000,
                    stock: 5,
                    pictureUrl: "NutriqueHealty2k.jpg"
                },
                {
                    id: 2,
                    categoria: "perros",
                    title: "Dog Chow",
                    description: "Alimento para Perros 5Kg",
                    price: 3000,
                    stock: 10,
                    pictureUrl: "DogChow2k.jpg"
                },
                {
                    id: 3,
                    categoria: "aves",
                    title: "Alpiste",
                    description: "Alimento para Aves 1Kg",
                    price: 500,
                    stock: 30,
                    pictureUrl: "Alpiste.jpg"
                },
                {
                    id: 4,
                    categoria: "gatos",
                    title: "Felix",
                    description: "Alimento húmedo para gatos",
                    price: 150,
                    stock: 13,
                    pictureUrl: "FelixPouch.jpg"
                },
                {
                    id: 5,
                    categoria: "roedores",
                    title: "Conejin",
                    description: "Alimento para conejos 1Kg",
                    price: 350,
                    stock: 18,
                    pictureUrl: "Conejin.jpg"
                }
            ]);
        }, 2000);
    });

    useEffect(() => {
        productoEnStock
            .then(res => {
                setPromesaCompleta(true);
                setItemList(res);
                if (categoryId > "") {
                    setItemList(res.filter(producto => producto.categoria == categoryId))
                }
            }, [categoryId])
            .catch(err => {
                console.log(err);
            });
    }) */




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
                <>Loading...</>

            }
        </>
    )


}