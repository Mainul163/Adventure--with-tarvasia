import React, { useEffect, useContext, useState  } from 'react';

import { UserContext } from '../../../App';
import BookingInfo from '../BoookingInfo/BookingInfo';

const BookingList = () => {
    const[loginUser,setLoginUser]=useContext(UserContext)
    const[bookind,setBooking]=useState([])
    useEffect(()=>{
        fetch(`https://fierce-crag-88105.herokuapp.com/userbooklist?email=${loginUser.email}`)
        .then(res=>res.json())
        .then(data=>setBooking(data))
    },[])
    console.log(loginUser.email)
    return (
        <div>
            <table class="table">

                <thead>
                    <tr>
                       
                        <th className='header-text' scope="col">Package name</th>
                        <th className='header-text' scope="col">Payment Method</th>
                        <th className='header-text' scope="col">Payment Status</th>
                        
                    </tr>
                </thead>
                <tbody>
                
                    {
                        bookind.map(info => <BookingInfo info={info}></BookingInfo>)
                    }
                
                </tbody>

            </table>
        </div>
    );
};

export default BookingList;