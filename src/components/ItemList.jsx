import React, { useEffect, useState } from "react";
import Item from "./Item";


export default function ItemList() {

    const [promesaCompleta, setPromesaCompleta] = useState(false);
    const [itemList, setItemList] = useState([]);
    const productoEnStock = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {
                    id: 1,
                    title: "Nutrique",
                    description: "Alimento para Gatos 2Kg",
                    price: 2000,
                    pictureUrl: ""
                },
                {
                    id: 2,
                    title: "Dog Chow",
                    description: "Alimento para Perros 2Kg",
                    price: 3000,
                    pictureUrl: ""
                },
                {
                    id: 3,
                    title: "Alpiste",
                    description: "Alimento para Aves",
                    price: 500,
                    pictureUrl: ""
                }]);
        }, 2000);
    });

    useEffect(() => {
        productoEnStock
            .then(res => {
                setPromesaCompleta(true);
                setItemList(res);
            })
            .catch(err => {
                console.log(err);
            });
    })

    return (
        <>
            {(promesaCompleta) ?
                <>
                    {itemList.map(producto => {
                        return <>
                            <div className="bg-light border">
                                <Item producto={producto} />
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