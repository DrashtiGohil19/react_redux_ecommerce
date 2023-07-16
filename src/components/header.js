import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from "react-bootstrap";
import { BsFillCartFill } from "react-icons/bs";
import { useSelector } from 'react-redux';

function Header() {
  const count = useSelector(state => state.product)
  return (
    <div>
      <Navbar bg="dark" variant="dark" fixed='top'>
        <Container>
          <Navbar.Brand>Navbar</Navbar.Brand>
          <Nav className="ms-5 me-auto">
            <Link to='/' className='nav-link' style={{ color: 'white' }}>Products</Link>
            <Link to='/cart' className='nav-link' style={{ color: 'white' }}>Cart</Link>
          </Nav>
          
          <Link to='/cart' className='navbar-brand'><BsFillCartFill />cart</Link>
          <Link to='/cart' className='btn btn-primary'>{count.length}</Link>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
