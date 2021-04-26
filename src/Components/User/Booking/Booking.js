import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router';

import PaymentCard from '../PaymentCard/PaymentCard';


const Booking = () => {
    const{packageKey}=useParams();
   const[showcard,setShowCard]=useState(false)
    const [packageinfo,setPackageinfo]=useState([])
    const pc = packageinfo.find(pd=>pd._id===packageKey)
    useEffect(()=>{
        fetch('https://fierce-crag-88105.herokuapp.com/tourpackage')
        .then(res=>res.json())
        .then(data=>setPackageinfo(data))
    },[])
    console.log(pc)
    return (
  
        <div className='d-flex justify-content-center'>
             {
                 showcard ?  
                 <PaymentCard pc={pc}></PaymentCard>:
                  
                   <div class="card " style={{width: "18rem"}}>
               
                 <img style={{height: '200px'}}  class="card-img-top" src={`data:image/png;base64,${pc?.img.img}`}/>
  
                 <div class="card-body text-center">
                     <h5 class="card-title text-style">{pc?.name}</h5>
                     <p class="card-text">{pc?.description}</p>
  
                     <small>Day: {pc?.day}</small><br/>
                    
                     <small>Price: {pc?.price}</small><br/>
  
                     {/* <a href="#" class="btn btn-primary">Booking</a> */}
                     <button onClick={()=>setShowCard(true)} class="btn btn-primary">Booking</button>
                 </div>
                 
            </div>
           
             }
        </div>
    );
};

export default Booking;