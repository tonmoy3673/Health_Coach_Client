import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import './ServiceDetails.css';
import { context } from '../../Context/AuthContext/AuthContext';

const ServiceDetails = () => {
    const {title,image_url,price,rating,details,activities,role,_id}=useLoaderData();
    const {user}=useContext(context);

    const handleReview=event=>{

        event.preventDefault();
        const form=event.target;
        const name=`${form.name.value}`;
        const email=user?.email || 'unregistered';
        const message=form.message.value;
        

        const review={
            service:_id,
            serviceName:title,
            price,
            customer:name,
            email,
          
            message
        }

        fetch('http://localhost:5000/review',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(review)

        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if (data.acknowledged) {
                alert('Review has been posted successfully')
                form.reset();
            }
        })
        .catch(err=>console.error(err))
        
    }


    return (
        <div className='py-5 container'>
           <Col className='py-3'>
           <Card className='rounded bg-light'>
        <Card.Img variant="top" src={image_url} className='bg-dark img-fluid'/>
        <Card.Body>
        <Card.Title className='fw-semibold text-center banner-text'><h4>{title}</h4></Card.Title>
        <Card.Text className=''>
          <span className='card-text fw-semibold'>Price:</span>
           <span className='text-danger fw-semibold'>{price} $</span>
          <div className='text-dark'>
          <span className='card-text fw-semibold'>Rating:</span> {rating}
          </div>
        </Card.Text>
        <Card.Text className='text-dark'>
        <span className='card-text fw-semibold'>Role:</span> {role}
        <p  className='pt-2'> <span className=' card-text fw-semibold'>Activities:</span> {activities}</p>
        </Card.Text>
        <Card.Text className='text-secondary'>
         <span className='card-text fw-semibold'>Descriptions</span>: {details}
        </Card.Text>
           <div className='text-center'>
           <Link to=''>
           <Button className='btn1 text-white fw-semibold'>Add Review</Button>
           </Link>
           </div>
        
       
      </Card.Body>
    </Card>
    </Col>


    <Form onSubmit={handleReview} className='w-75 mx-auto py-4'>
      <div className='d-flex'>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name='email' placeholder="Your Email Address" defaultValue={user?.email} readOnly/>
      </Form.Group>
      <Form.Group className="ms-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name='name' placeholder="Your Name" />
      </Form.Group>
      

      </div>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Write a review</Form.Label>
        <Form.Control as="textarea" name='message' rows={3} placeholder='Message...' />
        <div className='py-2'>
        <Button type='submit' className='btn1 text-white fw-semibold'>Submit</Button>
        </div>
      </Form.Group>
    </Form>


        </div>
    );
};

export default ServiceDetails;