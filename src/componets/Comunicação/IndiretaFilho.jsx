import React from 'react'

export default props => {
    const cb = props.clicar
    const geraridade = () => parseInt(Math.random() * (20)) + 30
    const gerarnerd = () => Math.random() > 0.5

    return (
        <div>
            <div>Filho</div>
            <button onClick={_ => cb("Douglas", geraridade(), gerarnerd())}>
                Fornecer Informações
            </button>
        </div>
    )
}