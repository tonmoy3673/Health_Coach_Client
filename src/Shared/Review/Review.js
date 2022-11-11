import React from 'react';
import Card from 'react-bootstrap/Card';
const Review = ({review}) => {
  
  const {customer,message,photoURL}=review;
    return (
        <div>
          
            <Card>
            
        <Card.Body>
          <Card.Title>
          <Card.Img style={{ width: '2rem'}} variant="top" src={photoURL} roundedCircle/>
            <span className='me-3 text-secondary'> {customer}</span>
             </Card.Title>
          <Card.Text>
            {message}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          
        </Card.Footer>
      </Card>
        </div>
    );
};

export default Review;