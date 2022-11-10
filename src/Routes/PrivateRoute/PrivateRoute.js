import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import DotLoader from 'react-spinners/DotLoader';
import { context } from '../../Context/AuthContext/AuthContext';


const PrivateRoutes = ({ children }) => {

    const { user, loading } = useContext(context);
    const location = useLocation();

    if (loading) {
        return <DotLoader color={'#47E0C4'} loading={loading} ></DotLoader>
    }

    if (user) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace ></Navigate>

};

export default PrivateRoutes;