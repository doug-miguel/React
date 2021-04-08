import "./Card.css"
import React from "react"

export default props => {

    const estilo = {
        backgroundColor: props.color || "#f00",
        borderColor: props.color || "#f00",
    }

    return (
        <div className="card" style={estilo}>
            <div className="title"> {props.title} </div>
            <div className="conteu">
                {props.children}
            </div>
        </div>
    )
}
