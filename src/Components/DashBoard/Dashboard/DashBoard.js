import React, { useEffect ,useContext, useState} from 'react';


import Navbar from '../../SameComponent/Navbar/Navbar';
import Slider from '../Slider/Slider';
import Orderlist from '../../Admin/Orderlist/Orderlist'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import AddService from '../../Admin/AddService/AddService';
import Manage from '../../Admin/Manage/Manage';
import MakeAdmin from '../../Admin/MakeAdmin/MakeAdmin';
import Booking from '../../User/Booking/Booking';
// import {  } from 'react/cjs/react.development';
import { UserContext } from '../../../App';
import BookingList from '../../User/BookingList/BookingList';
import UserReview from '../../User/UserReview/UserReview';


const DashBoard = () => {
  const[isadmin,setIsadmin]=useState(false)
  const[loginUser,setLoginUser]=useContext(UserContext)
  useEffect(()=>{
    fetch('https://fierce-crag-88105.herokuapp.com/adminpage',{
        method:'POST',
        headers:{'Content-Type':'application/json'}, 
        body:JSON.stringify({email:loginUser.email})
    })
    .then(res=>res.json())
    .then(data=>setIsadmin(data))
},[])
    return (
        <>
           <Navbar></Navbar>
           <div className='row'>
             <div className='col-md-2'>
              <Slider></Slider>
             </div>

            <div className='col-md-10'>
              
              
               <Switch>
                    

                      <Route path='/dashbboard/addservice'>

                      <AddService></AddService>
                      </Route>

                      <Route path='/dashbboard/manageservice'>
                        <Manage></Manage>
                      </Route>
                      <Route path='/dashbboard/makeadmin'>
                        <MakeAdmin></MakeAdmin>
                      </Route>

                      <Route path='/dashbboard/book/:packageKey'>
                        <Booking></Booking>
                      </Route>
                      <Route path= '/dashbboard/booklist'>
                       <BookingList></BookingList>
                       </Route>
                       <Route path= '/dashbboard/review'>
                         <UserReview></UserReview>
                       </Route>
                     {
                       isadmin? <Route exact='/'>
                       <Orderlist></Orderlist>
                       </Route>:
                       <Route exact= '/'>
                       <BookingList></BookingList>
                       </Route>
                     }
                      
               </Switch>

              
            </div>
 
            
            </div>
        </>
    );
};

export default DashBoard;