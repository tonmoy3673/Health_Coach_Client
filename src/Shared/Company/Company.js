import React from 'react';

const Company = () => {
    return (
        <div>
            <div className="container py-5">
            <div className='me-5 pe-3'>
            <h4 className='text-center fw-semibold style-text pe-5 me-5'>Trusted by</h4>
            </div>
              <h1 className="text-secondary text-center mb-3 ms-5"> Over 500+ Companies</h1>
              <div className="row d-flex align-items-center justify-content-center py-4">
                <div className="col-lg-2 col-3">
                  <img src="https://i.ibb.co/mSdxjd8/company-1.png" className="img-fluid w-75" alt='company'/>
                </div>
                <div className="col-lg-2 col-3">
                  <img src="https://i.ibb.co/4pTr5SW/company-2.png" className="img-fluid w-75" alt='company'/>
                </div>
                <div className="col-lg-2 col-3">
                  <img src="https://i.ibb.co/hgFTPVn/company-3.png" className="img-fluid w-50" alt='company'/>
                </div>
                <div className="col-lg-2 col-3">
                  <img src="https://i.ibb.co/VC5ccCN/company-5.png" className="img-fluid w-75" alt='company'/>
                </div>
                <div className="col-lg-2 col-3">
                  <img src="https://i.ibb.co/nw0n5MG/company-4.png" className="img-fluid w-75" alt='company'/>
                </div>
                <div className="col-lg-2 col-3">
                  <img src="https://i.ibb.co/NrG8SHg/company-6.png" className="img-fluid w-75" alt='company'/>
                </div>
              </div>
            </div>
        </div>
    );
};

export default Company;