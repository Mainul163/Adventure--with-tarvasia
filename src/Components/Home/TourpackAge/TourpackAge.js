import React, { useEffect, useState } from 'react';
import './TourpackAge.css'
import nepal from '../../../image/nepal.jpg'
import Rotate from 'react-reveal/Rotate';
import {useSpring, animated} from 'react-spring'
import TourPakgeDetails from '../TourPakgeDetails/TourPakgeDetails';



const TourpackAge = () => {
   const [packageinfo,setPackageinfo]=useState([])
   useEffect(()=>{
       fetch('https://fierce-crag-88105.herokuapp.com/tourpackage')
       .then(res=>res.json())
       .then(data=>setPackageinfo(data))
   },[])

    return (
        <section className='text-center mt-5'>
             
        <Rotate top right cascade>
          <h1 className='text-style pt-5'>OUR TOUR PACKAGES</h1>
        </Rotate>
        
       <div className=' mt-5 d-flex justify-content-center'>
           <div className=' row pt-5 w-75'>
               {

                   packageinfo?.map(info=><TourPakgeDetails info={info}></TourPakgeDetails>)
               }
           </div>
       </div>
        


        </section>
    );
};

export default TourpackAge;