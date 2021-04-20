import React, { useEffect,useState  } from 'react';


import OrderlistInfo from '../OrderlistInfo/OrderlistInfo';
const Orderlist = () => {
    const[bookinglist,setBookinglist]=useState([])
   useEffect(()=>{
       fetch('https://fierce-crag-88105.herokuapp.com/adminbooklist')

       .then(res=>res.json())
        .then(data=>setBookinglist(data))
   },[])

    return (
        <div>
          <table class="table">
                <thead>
                    <tr>
                        
                        <th scope="col">Email</th>
                        <th scope="col">Package Name</th>
                        <th scope="col">Payment Method</th>
                        <th scope="col">Status Update</th>
                    </tr>
                </thead>
               <tbody>
                    {
                        bookinglist.map(info => <OrderlistInfo info={info}></OrderlistInfo>)
                    }

               </tbody>
            </table>
        </div>
    );
};

  

export default Orderlist;