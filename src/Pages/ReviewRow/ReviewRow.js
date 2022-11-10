import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

import Card from 'react-bootstrap/Card';
import useTitle from '../../Hooks/useTitle';
const ReviewRow = ({reviewRow}) => {

    useTitle('My Review');
    const [orderService,setOrderService]=useState([]);
    const {serviceName,price,customer,service,message,photoURL,_id}=reviewRow;
   
 
   
  
        useEffect(()=>{
            fetch(`http://localhost:5000/services/${service}`)
            .then(res=>res.json())
            .then (data=>setOrderService(data))
        },[service])

        const handleDelete=id=>{
          const proceed=window.confirm('Are you sure, you want to delete this review')

          if(proceed){
            fetch(`http://localhost:5000/services/${id}`,{
              method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
              console.log(data)
            })
          }

        }
            
    return (
        <div className='pt-4'>
            <Card className='mb-3'>
        {   
            orderService?.image_url &&
            <Card.Img style={{ width: '10rem'}} variant="top" src={orderService?.image_url}/>
        }
        <Card.Body>
          <Card.Title>Service Name : <span className='card-text'>{serviceName}</span></Card.Title>
          <Card.Text>
          <Card.Img style={{ width: '2rem'}} variant="top" src={photoURL} roundedCircle/>
         <span className='text-secondary fw-semibold ms-3'>{customer}</span>
            <p className='pt-3'>Price : {price} $</p>
          </Card.Text>
          <Card.Text>
           <span className='text-secondary'>Feedback</span> {message}
          </Card.Text>
        </Card.Body>
        <Card.Footer> 
        <div className='py-2'>
      
        <Button  type='submit' className='btn1 text-white fw-semibold' onClick={()=>handleDelete(_id)}>
      Delete
      </Button>
        </div>
        
        <Button className='btn1 fw-semibold'>Edit</Button>
        </Card.Footer>
      </Card>
        </div>
    );
};

export default ReviewRow;