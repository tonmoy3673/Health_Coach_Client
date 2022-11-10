import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Services = ({service}) => {
    const {title,image_url,price,rating,details,_id}=service;
    
    return (
        <div className='py-3'>
           <Col>
           <Card className='rounded'>
          

        <PhotoProvider>
          <PhotoView src={image_url}>
            <Card.Img className='rounded-2xl hover:scale-110 transition duration-300 ease-in-out block object-cover object-center' src={image_url} variant="top" alt="" />
              </PhotoView>
          </PhotoProvider>

        <Card.Body>
        <Card.Title className='banner-text fw-semibold'>{title}</Card.Title>
        <Card.Text className='text-secondary fw-semibold'>
          Price: {price} $
          <p>Rating: {rating}</p>
        </Card.Text>
        <Card.Text className='text-secondary fw-semibold'>
         {details.length > 300 ? details.slice(0, 100) + '...' : details}
        </Card.Text>
           <div className='text-center'>
            <Link to={`/service/${_id}`}>
            <Button className='btn1'>View Details</Button>

            </Link>
           
           </div>
        
       
      </Card.Body>
    </Card>
    </Col>
        </div>
    );
};

export default Services;