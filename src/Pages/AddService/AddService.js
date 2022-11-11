import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import useTitle from '../../Hooks/useTitle';

const AddService = () => {

    useTitle('Add-Service')
    
       const handleSubmit=event=>{
        event.preventDefault();
        const form=event.target;
        const rating=form.rating.value;
        const price=form.price.value;
        const image_url=form.image_url.value;
        const role=form.role.value;
        const title=form.name.value;
        const activities=form.activities.value;
        const details=form.details.value;
        const uploadDate = new Date();

        const services={
            rating,
            price,
            image_url,
            role,
            title,
            activities,
            details,
            uploadDate


        }
        fetch('https://health-coach-server-self.vercel.app/services',{
            method:'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body:JSON.stringify(services)
        })
            .then(res=>res.json())
            .then(data=>{
                if(data.acknowledged){
                    form.reset();
                   }
            })
            .catch(error=>console.error(error))
       }
    return (
        <div className='container py-5 mt-4'>
            
            <h4 className='banner text py-4 mt-3 text-center all-text'>Please Fill-up mandatory field and add a service. </h4>

            <Form onSubmit={handleSubmit} className='w-75 mx-auto login p-3'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='text-secondary fw-semibold'>Service Name</Form.Label>
        <Form.Control type="text" name='name' placeholder="Enter Service name" required/>
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='text-secondary fw-semibold'>Photo URL</Form.Label>
        <Form.Control type="text" name='image_url' placeholder="Your Photo URL Link" required/>
        
      </Form.Group>
        
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='text-secondary fw-semibold'>Rating</Form.Label>
        <Form.Control type="number" name='rating' placeholder="Rating" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='text-secondary fw-semibold'>Price</Form.Label>
        <Form.Control type="number" name='price' placeholder="Price" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Write a Role</Form.Label>
        <Form.Control as="textarea" name='role' rows={3} placeholder='Role...' required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Write Activities</Form.Label>
        <Form.Control as="textarea" name='activities' rows={3} placeholder='Activities...' required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Write a Descriptions</Form.Label>
        <Form.Control as="textarea" name='details' rows={3} placeholder='Descriptions...' required/>
      </Form.Group>

      <Button type="submit" className='mb-3 btn1 fw-semibold'>
      Add Service
      </Button>
      
    </Form>
    
        </div>
    );
};

export default AddService;