import React from "react"

export default props => {
    return (
        <div>
            <button onClick={props.oninc}>+</button>
            <button onClick={props.ondec}>-</button>
        </div>
    )
}