import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error=useRouteError();
    return (
        <div className='py-4 text-center'>
            <h2 className='text-danger fw-semibold py-3'>Oops! An Error Occurred 😢</h2>
            {error && (
          <div>
            <h5 className='text-secondary fw-semibold'>{error.statusText || error.message}</h5>
            <h5 className='text-secondary fw-semibold'>{error.status}</h5>
          </div>
        )}
        </div>
    );
};

export default ErrorPage;