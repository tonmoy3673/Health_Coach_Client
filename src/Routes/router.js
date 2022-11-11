import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../ErrorPage/ErrorPage';
import Main from '../Main/Main';
import AddService from '../Pages/AddService/AddService';
import Blog from '../Pages/Blog/Blog';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import MyReview from '../Pages/MyReview/MyReview';
import Register from '../Pages/Register/Register';
import AllServices from '../Shared/AllServices/AllServices';
import ServiceDetails from '../Shared/ServiceDetails/ServiceDetails';
import PrivateRoutes from './PrivateRoute/PrivateRoute';

export const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/home',
                element:<Home></Home>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/service',
                loader:()=>fetch('https://health-coach-server-self.vercel.app/allServices'),
                element:<AllServices></AllServices>
            },
            {
                path:'/service/:id',
                element:<ServiceDetails></ServiceDetails>,
                loader:({params})=>fetch(`https://health-coach-server-self.vercel.app/services/${params.id}`)
            },
            {
                path:'/review',
                element:<PrivateRoutes>
                    <MyReview></MyReview>
                </PrivateRoutes>
            },
            {
                path:'/AddService',
                element:<PrivateRoutes>
                    <AddService>
                        </AddService>
                </PrivateRoutes>
            }

        ]
    }
])