import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import './Footer.css';



const Footer = () => {
    return (
        <div className='container-fluid text-center footer pt-5' fixed='bottom'>
            <Row className='pt-3'>
                
                <Col lg='4' className='text-light py-1'>
                <h5 className='menu-bar'>About Us</h5>
                I understand very well how lack of confidence can be an obstacle. That is why I dedicated myself to helping people overcome their fears and improve their looks - and their lives.
                </Col>
                <Col lg='4' className='text-white py-1'>
                <h5 className='menu-bar'> Quick Links</h5>
                
                    
                    <Nav.Link className='text-decoration-none' as={Link} to ="/home" >Home</Nav.Link>
                    
                    <Nav.Link className='text-decoration-none' as={Link} to ="/blog" >Blog</Nav.Link>
                                       
                    
                
                </Col>
                <Col lg='4' className='py-1'>
                <h5 className='menu-bar'>Contact Us</h5>
                <p className='text-white'>Office 41, Zawaya Buildin,<br/>
                  Ghala Muscat,<br/>
                  Sultanate of Oman<br/>
                  Privacy Ploicy | Terms of use

                
                </p>
                </Col>
                
            </Row>
        </div>
    );
};

export default Footer;