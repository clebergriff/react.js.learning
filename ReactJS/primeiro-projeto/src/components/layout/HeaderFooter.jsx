import React from 'react'
import './HeaderFooter.css'

export default props => 
    <div className="HeaderFooter">
        <h1> {props.children} </h1>
    </div>