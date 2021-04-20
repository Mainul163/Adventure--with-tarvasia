import React, { useEffect,useState } from 'react';

import image from '../../../image/review.jpg'
import Reviewinfo from '../Reviewinfo/Reviewinfo';

const Review = () => {
    const[review,setReview]=useState([])
 useEffect(()=>{
     fetch('https://fierce-crag-88105.herokuapp.com/showreview')
     .then(res=>res.json())
     .then(data=>setReview(data))
 },[])

    return (
        <section className='text-center margindiv'>
            <h1 className='header-text'> Tourist Review </h1><br/><br/>
            <div>
                <div className='row'>
                   {
                       review.map(info=>  <Reviewinfo info={info}></Reviewinfo>)
                   }
                </div>
            </div>
        </section>
    );
};

export default Review;