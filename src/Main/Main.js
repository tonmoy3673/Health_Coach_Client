import React from 'react';

import { Outlet } from 'react-router-dom';
import Footer from '../Layout/Footer/Footer';
import Header from '../Layout/Header/Header';
import useTitle from '../Hooks/useTitle';

const Main = () => {
    useTitle('Home')
    return (
        <div>
            <Header></Header>
            
            <Outlet></Outlet>
            
            <Footer></Footer>
        </div>
    );
};

export default Main;