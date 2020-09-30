import React from 'react'
import './App.css'

import Primeiro from './Primeiro'
import Card from './layout/Card'
import ComParametro from './ComParametro'
import ComFilhos from './ComFilhos'
import Repeticao from './Repeticao'
import HeaderFooter from './layout/HeaderFooter'
import Condicional from './Condicional'
import CondicionalComIf from './CondicionalComIf'
import Pai from './comunicacao/direta/Pai'
import Super from './comunicacao/indireta/Super'

export default (props) => (
    <div className="App"> 
        <HeaderFooter> Cabeçalho </HeaderFooter>

        <Card titulo="Primeiro Componente" color='#011f4b'>
            <Primeiro></Primeiro>   
        </Card>
        
        <Card titulo="2o. Teste Componente Layout" color='#03396c'>
            Novo conteúdo 2
        </Card>

        <Card titulo="Com Filhos" color='#005b96'>
            <ComFilhos>
                <p>Ana</p>
                <p>Beatriz</p>
                <p>Cleber</p>
                <p>Edilson</p>
            </ComFilhos>
        </Card>
        
        <Card titulo="Com Parametros" color='#6497b1'>
            <ComParametro titulo = "Novo Título"
                subtitulo = "Novo subtítulo"></ComParametro> 
            <ComParametro titulo = "Novo Título 2"
                subtitulo = "Novo subtítulo 2"></ComParametro>
        </Card>

        <Card titulo="JSON Produtos dinâmico" color='#b3cde0'>
            <Repeticao />    
        </Card>

        <Card titulo="Condicional">
            <Condicional numero={3} />    
        </Card>

        <Card titulo="Condicional com If">
            <CondicionalComIf numero={6} />    
        </Card>

        <Card titulo="Comunicação Direta">
            <Pai sobrenome='Freitas' />    
        </Card>

        <Card titulo="Comunicação Indireta">
            <Super />    
        </Card>

        <HeaderFooter />
    </div>
)