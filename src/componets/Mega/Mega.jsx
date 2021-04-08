import React, { useState } from 'react'
import "./Mega.css"

export default props => {

    function gerarnumeronaocontido(min, max, array) {
        const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min
        return array.includes(aleatorio) ?
            gerarnumeronaocontido(min, max, array) :
            aleatorio
    }

    function gerarnumero(qtde) {
        const numero = Array(qtde)
            .fill(0)
            .reduce((nums) => {
                const novonumero = gerarnumeronaocontido(1, 60, nums)
                return [...nums, novonumero]
            }, [])
            .sort((n1, n2) => n1 - n2)

        return numero
    }

    const [qtde, setqtde] = useState(props.qtde || 6)
    const numeroinicial = Array(qtde).fill(0)
    const [numeros, setnumeros] = useState(numeroinicial)

    return (
        <div>
            <h2>Mega</h2>
            <h3>{ numeros.join(' ') }</h3>
            <div className="mega">
                <label>Qtde de Números: </label>
                <input 
                    min="1"
                    max="30"
                    type="number" 
                    value={qtde}
                    onChange={(e) => {
                        setqtde(+e.target.value)
                        setnumeros(gerarnumero(+e.target.value))
                    }}
                />
            </div>
            <button onClick={_ => setnumeros(gerarnumero(qtde))}>
                Gerar Números
            </button>
        </div>
    )
}