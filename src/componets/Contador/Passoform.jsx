import React from "react"

export default props => {
    return (
        <div>
            <label htmlFor="passoinput">Passo: </label>
            <input type="number" id="passoinput" 
            value={props.passo} 
            onChange={e => props.setpasso(+e.target.value)}/>
        </div>
    )
}