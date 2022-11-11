import React, { useContext, useEffect, useState } from 'react';
import { context } from '../../Context/AuthContext/AuthContext';
import ReviewRow from '../ReviewRow/ReviewRow';

const MyReview = () => {
    const {user}=useContext(context);
    const [myreview,setMyreview]=useState([]);
    useEffect(()=>{
        fetch(`https://health-coach-server-self.vercel.app/review?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>setMyreview(data))
    },[user?.email])

    const [reviews,setReviews]=useState([]);
    useEffect(()=>{

      fetch(`https://health-coach-server-self.vercel.app/review?`)
      .then(res=>res.json())
      .then(data=>setReviews(data))

    },[])
    const handleDelete=id=>{
        const proceed=window.confirm('Are you sure, you want to delete this review')

        if(proceed){
          fetch(`https://health-coach-server-self.vercel.app/review/${id}`,{
            method:'DELETE'
          })
          .then(res=>res.json())
          .then(data=>{
            if (data.acknowledged===true) {
              alert('Review has been deleted successfully')
            const remaining=reviews.filter(rd=>rd._id!==id);
            setReviews(remaining);
            
            }
            console.log(data);
          })
        }

      }


    return (
        
                
   <div className='container py-5 mt-5'>

      <h4 className='all-text py-4 text-center'>My Review </h4>

            {
               myreview?.map(reviewRow=><ReviewRow key={reviewRow._id} reviewRow={reviewRow} handleDelete={handleDelete}></ReviewRow>)
            }
        </div>
        
    );
};

export default MyReview;