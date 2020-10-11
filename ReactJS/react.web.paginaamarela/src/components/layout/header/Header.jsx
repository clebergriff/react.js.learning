import React from 'react';
import { 
    Navbar, Nav, Form,
    FormControl, Button } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import './Header.css';

function buscarAnuncio() {
    {console.log("Click")}
}

function Header(props) {
    return (
        <Navbar expand="lg">
        <Navbar.Brand href="#home"> {props.titulo} </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
            <Nav.Link href="#home">Login</Nav.Link>
            <Nav.Link href="#link">Categorias</Nav.Link>

            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown> */}

        </Nav>
        <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2 SearchBox" />
            <Button className="SearchButton" onClick={buscarAnuncio}> Buscar </Button>
        </Form>
        </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;