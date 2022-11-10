import React, { useContext, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { context } from '../../Context/AuthContext/AuthContext';
import Lottie from 'lottie-react';
import lottie from '../Lottie/lottie.json';
import useTitle from '../../Hooks/useTitle';

const Register = () => {
    const navigate=useNavigate();
    const {createUser,updateUserProfile}=useContext(context);
    const [error,setError]=useState('');
    useTitle('Register')
    const handleForm=(event)=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const photoURL=form.photoURL.value;
        const email=form.email.value;
        const password=form.password.value;
        
        createUser(email,password)
        .then(result=>{
          const user=result.user;
          console.log(user);
          form.reset();
          handleUpdateProfile(name,photoURL);
          navigate('/login')
        })
        .catch(error=>{
          console.error(error);
          setError(error.message);
        })
       
        const handleUpdateProfile=(name,photoURL)=>{
            const profile={
                displayName:name,
                photoURL:photoURL
            }
            updateUserProfile(profile)
            .then(()=>{})
            .catch(error=>console.error(error))
        }
    }

    return (
        <div className='py-5 container'>
            <h5 className='text-center fw-semibold all-text pt-5'>Registration Form</h5>
            <Form.Text >
          <h5 className="text-danger text-center mx-auto fw-bold">{error}</h5>
        </Form.Text>
            <Row xs={1} md={2} className='align-item-center py-2'>
                <Col lg='6'>

                <Lottie animationData={lottie} loop={true}></Lottie>
                
                </Col>
                <Col lg='6'>
                <Form onSubmit={handleForm} className='w-75 mx-auto login p-3'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='text-secondary fw-semibold'>Your Full Name</Form.Label>
        <Form.Control type="text" name='name' placeholder="Enter email" />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='text-secondary fw-semibold'>Your Photo URL</Form.Label>
        <Form.Control type="text" name='photoURL' placeholder="Enter email" />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='text-secondary fw-semibold'>Your Email Address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" required/>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='text-secondary fw-semibold'>Your Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" required />
      </Form.Group>
      
      <Button type="submit" className='mb-3 btn1 fw-semibold'>
       Register
      </Button>
      <p className='text-start'><small>Already have an account ? Please <Link to='/login'>Login</Link></small></p>
    </Form>
                </Col>
            </Row>
        </div>
    );
};

export default Register;