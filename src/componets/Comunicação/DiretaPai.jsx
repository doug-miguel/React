import React from 'react'
import DiretaFilho from './DiretaFilho'

export default props => {
    return (
        <div>
            <DiretaFilho nome="Pedro" idade={20} nerd={true}>
            </DiretaFilho>
            <DiretaFilho nome="Arthur" idade={17} nerd={false}>
            </DiretaFilho>
            <DiretaFilho nome="Vitor" idade={35} nerd={true}>
            </DiretaFilho>
        </div>
    )
}