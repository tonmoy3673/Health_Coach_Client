import React from 'react';
import './Join.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Company from '../Company/Company';

const Join = () => {
    return (
        <div className='container py-4'>
            
            <div className="row text-center rounded-2 pb-4 mb-2">
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

          {/* ============ Company Section ========== */}

          <Company/>

        {/* =========== Join US Form =========== */}
        <div className='row py-5 mt-3 rounded-2 d-flex justify-content-center align-items-center back'>
        <div class="col-lg-6">
              <h2 class="fw-bold text-white">Ready to join?</h2>
              <p class="text-light">To enroll in, attend, and work toward the completion of this online course</p>
            </div>
            <div className='col-lg-4 text-center'>
              <Link to={'/register'}>
              <Button type="button" variant="outline-light btn-lg fw-semibold " className="btn ">
                    Join Us
                  </Button>
              </Link>
            
            </div>

        </div>

        </div>
    );
};

export default Join;