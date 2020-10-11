import React from 'react'
import './App.css'

import Header from './layout/header/Header'
import Footer from './layout/Footer'
import ApiAnuncios from './comunicacao/api/ApiAnuncios'

export default (props) => ( 
    <div className="App">
        <Header titulo = "Página Amarela" />        
        <ApiAnuncios />  
        <Footer /> 
    </div>
)