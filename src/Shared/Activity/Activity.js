import React from 'react';
import { Row } from 'react-bootstrap';
import AllActivity from './AllActivity';

const Activity = () => {
    const activity=[
        {
            img:'https://i.ibb.co/8NjhvrK/1.jpg',
            info:'Balance Body Mind',
            id:1
        },
        {
            img:'https://i.ibb.co/KwkVSfW/2.jpg',
            info:'Physical Activity',
            id:2
        },
        {
            img:'https://i.ibb.co/MVtZHJP/3.jpg',
            info:'Support & Motivation',
            id:3
        },
        {
            img:'https://i.ibb.co/2jT9j72/4.jpg',
            info:'Exercise Program',
            id:4
        }
    ]
    return (
        <div className='container py-5'>
             <h4 className='text-center fw-semibold style-text pe-5 me-5'>What We Do</h4>
        <h1 className='all-text text-center mb-4 ms-5'>Our Activities</h1>
        
            <Row xs={1} md={4} className="g-4 py-2">
                {
                    activity.map(act=><AllActivity 
                   act={act} key={act.id}>

                    </AllActivity>
                    )
                }
            </Row>
        </div>
    );
};

export default Activity;