import React from "react";
import { Component } from "react";

export default class ItemListContainer extends Component {
    render() {
        return (
            <div>
                Bienvenidos {this.props.nombre} a {this.props.app}
            </div>
        )
    }
}