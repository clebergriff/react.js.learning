import React from 'react'

import './data/produtos'
import produtos from './data/produtos'

export default props => {

    function getProdutosListItem() {
        return produtos.map(prod => {
            return <li key={prod.id}>
                {prod.nome} >>> R${Number(prod.preco).toFixed(2)}
            </li>
        })
    }

    return (
        <div>
            <h2>Repetição</h2>
            <ul>
                {getProdutosListItem()}
            </ul>
        </div>
    )
}