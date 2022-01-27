import React, { useEffect } from "react";
import ItemList from "./ItemList";
import { Stack } from 'react-bootstrap';
import { useParams } from "react-router-dom";


export default function ItemListContainer() {

    const { categoryId } = useParams();

    useEffect(() => {
        console.log(categoryId);
    }, [categoryId])

    return (
        <>
            <br></br>
            Estoy en la categoría {categoryId}

            <Stack direction="horizontal" gap={3}>
                <ItemList categoryId={categoryId}></ItemList>
            </Stack>

        </>
    )
}
