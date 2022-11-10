import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { ButtonGroup, Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { context } from '../../Context/AuthContext/AuthContext';
import { FaGoogle ,FaGithub,FaMailBulk} from "react-icons/fa";
import Lottie from 'lottie-react';
import lottie from '../Lottie/lottie.json';
import useTitle from '../../Hooks/useTitle';
import { toast } from "react-toastify";
const Login = () => {
    const [error,setError]=useState('');
    const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  useTitle('Login')

  const {signIn,logInWithGoogle,signInWithGithub}=useContext(context);
    const handleForm=(event)=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        signIn(email,password)
        .then(result=>{
          const user=result.user;
          console.log('sign in', user)
          form.reset();
          toast.success("Login Successfully Done");
          setError('');
          navigate(from, { replace: true });
        })
        .catch(error=>{
          console.error(error);
          setError(error.message);
        })
    }

 
  const googleProvider=new GoogleAuthProvider();
  const handleGoogleSignIn =()=>{
    logInWithGoogle(googleProvider)
    .then(result=>{
      const user=result.user;
      console.log(user);
    })
    .catch(error=>console.error(error))
  }
    const githubProvider=new GithubAuthProvider();
    const handleGithub=()=>{
      signInWithGithub(githubProvider)
      .then(result=>{
        const user=result.user;
        console.log(user);
      })
      .catch(error=>{
        console.error(error);
        
      })
        
       }
  
    

    return (
        <div className='py-5 container'>
            <h5 className='text-center all-text pt-5'>Please Login</h5>
            
            <Form.Text >
          <h5 className="text-danger text-center mx-auto fw-bold">{error}</h5>
        </Form.Text>

     <Row xs={1} md={2} className='align-item-center py-3'>
        <Col lg='6'>
        <Lottie animationData={lottie} loop={true}></Lottie>
        </Col>
        <Col lg='6'>
        <Form onSubmit={handleForm} className='w-50 mx-auto p-3 login'>
            
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className='text-secondary fw-semibold'>Enter Your Email Address</Form.Label>
              <Form.Control type="email" name='email' placeholder="Enter email" />
              
            </Form.Group>  
      
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className='text-secondary fw-semibold'>Enter Your Password</Form.Label>
              <Form.Control type="password" name='password' placeholder="Password" />
            </Form.Group>
            
            
              
            <ButtonGroup vertical className='text-end py-4 w-100'>
             <Button className='mb-3'variant="outline-success" type="submit"><FaMailBulk/>  Login with Email</Button>
              <Button onClick={handleGoogleSignIn} className='mb-3' variant="outline-primary"><FaGoogle/> Login with Google</Button>
              <Button onClick={handleGithub} variant="outline-dark"><FaGithub/> Login with GitHub</Button>
            </ButtonGroup>
      
            <p className='text-start'><small>Create a new account ? Please <Link to='/register'> Register</Link></small></p>
      
          </Form>
        </Col>
     </Row>
    
        </div>
    );
};

export default Login;