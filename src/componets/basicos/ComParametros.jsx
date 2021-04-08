import React from 'react'

export default function ComParametro(props) {
    const status = props.nota >= 7 ? 'Aprovado' : 'Reprovado'
    const notaInt = Math.ceil(props.nota)
    return (
        <div>
            <h2> {props.Title} </h2>
            <p>
                <strong>{props.aluno} </strong>
                tem nota
                <strong> {notaInt} </strong>
                e esta
                <strong> {status} </strong>!
            </p>
        </div>
    )

}