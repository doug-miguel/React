/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import alunos from '../../Data/alunos'

export default props => {
    const alunosli = alunos.map((aluno) => {
        return (
            <li key={aluno.id}>
                {aluno.id} - {aluno.nome} - {aluno.nota}
            </li>
        )
    })
    return (
        <ul style={{ listStyle: "none" }}>{alunosli}</ul>
    )
}