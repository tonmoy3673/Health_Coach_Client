import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

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
       
        
       
      </Card.Body>
    </Card>
    </Col>
        </div>
    );
};

export default AllActivity;