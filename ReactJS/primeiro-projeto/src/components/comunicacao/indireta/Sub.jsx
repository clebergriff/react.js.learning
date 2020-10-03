import React from 'react'
import './Sub.css'

export default (props) => {

    function acao() {
        props.onClicar(Math.random(), 'New')
    }

    return(
        <div>
            <div className="multi-button">
                <button onClick={acao}>Alterar</button>
                <button onClick={acao}>Manter</button>
            </div>
        </div>
    )
};