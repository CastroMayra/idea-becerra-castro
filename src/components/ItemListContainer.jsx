import React from "react";
import { Component } from "react";
import ItemCount from "./ItemCount";


export default class ItemListContainer extends Component {
    render() {
        return (
            <>
                <div>
                    Bienvenidos {this.props.nombre} a {this.props.app}
                </div>
                <ItemCount stock="10" initial="1" />
            </>
        )
    }
}