import React from 'react'
import produtos from '../../Data/produtos'
import './TabelaProdutos.css'

export default props => {
    function getLinhas() {
        return produtos.map((produtos, i) => {
             return (
                 <tr key={produtos.id} 
                 className={i % 2 === 0 ? 'par' : 'imp'}>
                     <td>{produtos.id}</td>
                     <td>{produtos.nome}</td>
                     <td>R$ {produtos.preco.toFixed(2).replace('.', ',')}</td>
                 </tr>
             )
        })
    }

    return (
        <div className="tabelapreco">
            <table>
                <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Preço</th>
                </tr>
                <tbody>
                    {getLinhas()}
                </tbody>
            </table>
        </div>
    )
}