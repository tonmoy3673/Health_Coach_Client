import React from 'react';
import { Col, Row } from 'react-bootstrap';

import Carousel from 'react-bootstrap/Carousel';

const AllTestimonial = ({test}) => {
    const {img,person,title,des}=test;
  

    return (
        
     <div>
        <Row xs={1} md={3} lg={3}>
        <Col>
        <Carousel >
          <Carousel.Item>
            <div>

              <img
                className="d-block w-75"
                src={img}

                alt="First slide"
              />
            </div>
            <Carousel.Caption>
              <h2 className='text-dark'>{person}</h2>
              <p className='text-dark'>{title}</p>
            </Carousel.Caption>

          </Carousel.Item>

         
        </Carousel>
        </Col>
        </Row>
     </div>
        
    );
};

export default AllTestimonial;