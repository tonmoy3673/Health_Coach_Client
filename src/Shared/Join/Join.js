import React from 'react';
import './Join.css';

const Join = () => {
    return (
        <div className='container py-4'>
            
            <div className="row text-center rounded-2">
            <div className="col-4">
              
                <h1 className="fw-bold join text-capitalize">1K+</h1>
                <h4 className='text-secondary'>Online Course</h4>
              
            </div>
            <div className="col-4">
              
              <h1 className="fw-bold join text-capitalize">2.5K+</h1>
              <h4 className='text-secondary'>
                Active Users
              </h4>
            
          </div>
          <div className="col-4">
              
            <h1 className="fw-bold join text-capitalize">500<span>K</span>+</h1>
            <h4 className='text-secondary'>Rating & Review</h4>
          
        </div>
        
          </div>

          
        </div>
    );
};

export default Join;