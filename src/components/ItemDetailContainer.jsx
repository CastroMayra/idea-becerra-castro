import React, { useState, useEffect } from "react";
import { Stack } from 'react-bootstrap';
import ItemDetail from "./ItemDetail";


export default function ItemDetailContainer() {

    const [itemDetail, setItemDetail] = useState({});
    const getItem = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(
                {
                    id: 1,
                    title: "Nutrique",
                    description: "Alimento para Gatos 2Kg",
                    price: "$2000",
                    pictureUrl: "NutriqueHealty2k.jpg"
                });
        }, 2000);
    });

    useEffect(() => {
        getItem
            .then(res => {
                setItemDetail(res);
            })
            .catch(err => {
                console.log(err);
            });
    })
    return (
        <>
            <Stack direction="horizontal" gap={3}>
                <ItemDetail producto={itemDetail} />
            </Stack>

        </>
    )
}