import React, { useContext } from 'react';
import { Button, Container, Image} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';
import { Link } from 'react-router-dom';
import { context } from '../../Context/AuthContext/AuthContext';
import { FaUser } from 'react-icons/fa';

const Header = () => {
  const {user,logOut}=useContext(context);
  const handleLogOut=()=>{
    logOut()
    .then(()=>{})
    .catch(error=>console.error(error));
  }
    return (
        
              <div className='mb-4'>
            <Navbar bg="white" expand="lg" fixed='top'>
      <Container>
        
        <Navbar.Brand as={Link} to ={"/"}><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAzQdXJKtKVAjc1LztNEaA29R_vK5fZF18og&usqp=CAU' alt='logo' className='logo'></img> <span className='band fw-semibold'>Health <span className='text-secondary coach'>Coach</span></span></Navbar.Brand>
       
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto menu">
            <Nav.Link as={Link} to ={"/home"} className='menu-bar'>Home</Nav.Link>
            
            <Nav.Link as={Link} to ={"/blog"} className='menu-bar' >Blog</Nav.Link>
            
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
             
                {
                   user?.uid ?
                   <>
                   
                   
                   <Button onClick={handleLogOut} className='btn1 me-2'>Logout</Button>
                   <Button className='btn1 me-2'>My reviews</Button>
                   <Button className='btn1'>Add service</Button>
                   </>
                  :
                  <>
                  <Link to='/login'><Button variant="" className=' fw-semibold me-1 btn1'>Login</Button></Link>
                  
                  <Link to='/register'><Button variant="outline-success" className='fw-semibold btn2'>Register</Button></Link>
                  </>
                }
             
            
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            {user?.photoURL ?
              <Image title={user?.displayName} style={{height:'30px'}} roundedCircle src={user?.photoURL}></Image>
             

              : <FaUser></FaUser>
              }
            
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;