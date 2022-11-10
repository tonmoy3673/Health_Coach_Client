import React, { useContext, useEffect, useState } from 'react';
import { context } from '../../Context/AuthContext/AuthContext';
import ReviewRow from '../ReviewRow/ReviewRow';

const MyReview = () => {
    const {user}=useContext(context);
    const [myreview,setMyreview]=useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/review?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>setMyreview(data))
    },[user?.email])
    return (
        <div>

   <div className='container py-5 mt-5'>
            {
               myreview?.map(reviewRow=><ReviewRow key={reviewRow._id} reviewRow={reviewRow}></ReviewRow>)
            }
        </div>
        </div>
    );
};

export default MyReview;