import React from 'react'
import './App.css'

import Card from './layout/Card'
import HeaderFooter from './layout/HeaderFooter'
import ApiAnuncios from './comunicacao/api/ApiAnuncios'

export default (props) => ( 

    <div className="App"> 
        <HeaderFooter> Página Amarela </HeaderFooter>

        <div>
            <ApiAnuncios />        
        </div>

        <HeaderFooter />
    </div>
)