import React, { useState } from 'react'
import Sub from './Sub'

export default props => {

    const [label, setLabel] = useState('Vazio')
    const [num, setNum] = useState(0)

    function quandoClicar(valorGerado, texto) {
        setNum(valorGerado);
        setLabel(texto);

        console.log('Ação');
        console.log(label)
        console.log(num);
    }

    return (
        <div>
            <h4>Valor: {num} </h4>
            <h4>Texto: {label} </h4>
            <Sub onClicar={quandoClicar} />
        </div>
    )
}