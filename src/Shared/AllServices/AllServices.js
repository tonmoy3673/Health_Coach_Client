import React from 'react';
import { Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Service from '../Service/Service';


const AllServices = () => {
    const services=useLoaderData();
    return (
        <div className='py-5 container'>
            <Row xs={1} md={3} className="g-4 py-5">
           {
          services.map(service=><Service key={service._id} service={service}></Service>)
        }
        </Row>
        </div>
    );
};

export default AllServices;