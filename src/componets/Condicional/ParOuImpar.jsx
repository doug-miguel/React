import React from 'react'

export default props => {
    const ispar = props.numero % 2 === 0
    return (
        <div>
            { ispar ? 
                <span>Par</span> : 
                <span>Impar</span> 
            }
        </div>
    )
}