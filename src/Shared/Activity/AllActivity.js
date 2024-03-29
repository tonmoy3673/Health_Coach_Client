import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
const AllActivity = ({act}) => {
    const {img,info}=act;
   
    return (
        <div>
            <Col>
           <Card className='rounded'>
          

        <PhotoProvider>
          <PhotoView src={img}>
            <Card.Img className='rounded-2xl hover:scale-110 transition duration-300 ease-in-out block object-cover object-center' src={img} variant="top" alt="" />
              </PhotoView>
          </PhotoProvider>

        <Card.Body>
        <Card.Title className='banner-text fw-semibold text-center'>{info}</Card.Title>
       
      
           <div className='text-center py-1'>
            
           <Link to='/service'>
            <Button className='btn1 fw-semibold'>View Details <FaArrowRight /></Button>
          </Link>

          
           
           </div>
        
       
      </Card.Body>
    </Card>
    </Col>
        </div>
    );
};

export default AllActivity;