import React from "react";
import { Component } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import { Stack } from 'react-bootstrap';


export default class ItemListContainer extends Component {
    render() {
        return (
            <>
            
                <div>
                    Bienvenidos {this.props.nombre} a {this.props.app}
                </div>
                <div>
                    <ItemCount stock="10" initial="1" />
                </div>
                <Stack direction="horizontal" gap={3}>
                    <ItemList></ItemList>
                </Stack>

            </>
        )
    }
}