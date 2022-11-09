import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';


const Service = ({service}) => {
    const {title,image_url,price,rating}=service;
    return (
        <div>
           <Col>
           <Card className='rounded'>
        <Card.Img variant="top" src={image_url} className='bg-dark'/>
        <Card.Body>
        <Card.Title className='text-secondary fw-semibold'>{title}</Card.Title>
        <Card.Text className='text-secondary fw-semibold'>
          Price: {price} $
          <p>Rating: {rating}</p>
        </Card.Text>
        
           <div className='text-center'>
           <Button className='btn1'>View Details</Button>
           </div>
        
       
      </Card.Body>
    </Card>
    </Col>
        </div>
    );
};

export default Service;