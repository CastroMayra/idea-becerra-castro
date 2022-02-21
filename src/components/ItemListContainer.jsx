import React from "react";
import ItemList from "./ItemList";
import { Stack } from 'react-bootstrap';
import { useParams } from "react-router-dom";

export default function ItemListContainer() {

    const { categoryId } = useParams();

    return (
        <>
            <Stack direction="horizontal" gap={3}>
                <ItemList categoryId={categoryId}></ItemList>
            </Stack>
        </>
    )
}
