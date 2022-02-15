import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getFirestore } from "../firebase/firebase";



export default function ItemDetailContainer() {

    const { itemId } = useParams();
    const [promesaCompleta, setPromesaCompleta] = useState(false);
    const [itemDetail, setItemDetail] = useState({});

    useEffect(() => {
        const db = getFirestore();

        const itemCollection = db.collection("ItemCollection");
        const miItem = itemCollection.doc(itemId);

        miItem.get()
            .then((doc) => {
                if (!doc.exists) {
                    alert("No existe ese producto")
                    return
                }
                console.log("item found");
                setItemDetail({ id: doc.id, ...doc.data() });
                setPromesaCompleta(true);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])


    /*    const getItem = new Promise((resolve, reject) => {
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
                       description: "Alimento para Aves 1 Kg",
                       price: 500,
                       stock: 30,
                       pictureUrl: "Alpiste.jpg"
                   },
                   {
                       id: 4,
                       categoria: "gatos",
                       title: "Felix",
                       description: "Alimento húmedo para gatos Felix",
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
           getItem
               .then(res => {
                   setPromesaCompleta(true);
                   setItemDetail(res.find(producto => producto.id == id))
               }, [id])
               .catch(err => {
                   console.log(err);
               });
       }, [])
       // Como coloco el array de dependencias vacio??? */


    return (
        <>
            <Link to={"/"} style={{ textDecoration: 'none', color: 'black' }}>
                Volver
            </Link>
            {(promesaCompleta) ?
                <>
                    <ItemDetail producto={itemDetail} />
                </>
                :
                <>Loading...</>
            }

        </>
    )
}