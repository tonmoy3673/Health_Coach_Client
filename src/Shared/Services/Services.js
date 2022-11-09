import React from 'react';
// import { Button } from 'react-bootstrap';
// import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col';

const Services = ({service}) => {
    // const {title,image_url,price,rating}=service;
    console.log(service);
    return (
        <div className='py-3'>
           {/* <Col>
           <Card className='rounded'>
        <Card.Img variant="top" src={image_url} className='bg-dark'/>
        <Card.Body>
        <Card.Title className='text-primary'>{title}</Card.Title>
        <Card.Text className='text-secondary fw-semibold'>
            {price}
        </Card.Text>
        <Card.Text className='text-secondary fw-semibold'>
            Rating:{rating}
        </Card.Text>
       <Button className='btn1'>View Details</Button>
      </Card.Body>
    </Card>
    </Col> */}
        </div>
    );
};

export default Services;