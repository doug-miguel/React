import Input from './Input.css'
import React, { useState } from 'react';

export default props => {
    const [valor, setvalor] = useState("Inicial")

    function quandomudar (e) {
        setvalor(e.target.value)
    }

    return (
        <div className="caixa">
            <h2>{valor}</h2>
            <div style={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                <input value={valor} onChange={quandomudar} />{/*Evento de manipulação do estado*/}
                <input value={valor} readOnly/> {/*Evento sem manipulação do estado*/}
                <input value={undefined}/> {/*Evento não controlado*/}
            </div>
        </div>
    )
}