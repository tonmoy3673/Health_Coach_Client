import React from 'react';
import { Button, Container} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        
              <div className='py-4 mb-4'>
            <Navbar bg="light" expand="lg" className='py-3' fixed='top'>
      <Container>
        <Navbar.Brand as={Link} to ={"/home"}><img src='' alt='logo' className='logo'></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto menu">
            <Nav.Link as={Link} to ={"/"} className='menu-bar'>Home</Nav.Link>
            
            <Nav.Link as={Link} to ={"/blog"} className='menu-bar' >Blog</Nav.Link>
            
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
             
                <>
                <Link to='/login'><Button variant="" className=' fw-semibold me-1 btn1'>Login</Button></Link>
                
                <Link to='/register'><Button variant="outline-success" className='fw-semibold btn2'>Register</Button></Link>
                </>
             
            
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;