import React from 'react'
import './Header.css'

export default props => 
    <div className="Header">
        <h1> {props.children} </h1>
    </div>