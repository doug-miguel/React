import React, { useState } from 'react'
import IndiretaFilho from './IndiretaFilho'

export default props => {
    //const [a, b] = [1, 2]
    const [nome, setnome] = useState('?')
    const [idade, setidade] = useState(0)
    const [nerd, setnerd] = useState(false)

    function fornecerinfo(nome, idade, nerd) {
        setnome(nome)
        setidade(idade)
        setnerd(nerd)
    }

    return (
        <div>
            <div>
                <span>{nome} </span>
                <span><strong> {idade}</strong></span>
                <span> {nerd ? 'Verdadeiro' : 'Falso'}</span>
            </div>
            <IndiretaFilho clicar={fornecerinfo}></IndiretaFilho>
        </div>
    )
}