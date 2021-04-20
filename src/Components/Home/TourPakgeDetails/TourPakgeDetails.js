import React from 'react';
import { useHistory } from 'react-router';

const TourPakgeDetails = ({info}) => {
    const history=useHistory()
    const bookingInfo=(id)=>{

       
        const url=(`/dashbboard/book/${id}`)
        history.push(url)
    }
    return (
        <div className='col-md-4 pt-5'>


            <div class="card " style={{width: "18rem"}}>
               
                <img style={{height: '200px'}}  class="card-img-top" src={`data:image/png;base64,${info.img.img}`}/>

                <div class="card-body text-center">
                    <h5 class="card-title text-style">{info.name}</h5>
                    <p class="card-text">{info.description}</p>

                    <small>Day: {info.day}</small><br/>
                   
                    <small>Price: {info.price}</small><br/>

                    {/* <a href="#" class="btn btn-primary">Booking</a> */}
                    <button onClick={()=>bookingInfo(info._id)} class="btn btn-primary">Booking</button>
                </div>
            </div>
            
        </div>
    );
};

export default TourPakgeDetails;