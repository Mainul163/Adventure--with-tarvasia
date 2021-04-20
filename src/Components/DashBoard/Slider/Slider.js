import React, { useEffect ,useContext, useState} from 'react';
import { Link } from 'react-router-dom';

import { UserContext } from '../../../App';
import './Slider.css'
const Slider = () => {
    const[isadmin,setIsadmin]=useState(false)
    const[loginUser,setLoginUser]=useContext(UserContext)
//     const trueadmin=isadmin.filter(pd=>pd.email===loginUser.email)
//  console.log(trueadmin)
    const style = {
        backgroundColor:'#F91944',
        height:'550px',
       
        
    }
    useEffect(()=>{
        fetch('https://fierce-crag-88105.herokuapp.com/adminpage',{
            method:'POST',
            headers:{'Content-Type':'application/json'}, 
            body:JSON.stringify({email:loginUser.email})
        })
        .then(res=>res.json())
        .then(data=>setIsadmin(data))
    },[])
    console.log(isadmin)
    return (
        <div style={style} className='text-center '>
           <div className='pt-5'>
          {
              isadmin? <div>
              <Link to='/dashbboard/order' className='style text-style'>Order List</Link><br/>
               
               <Link to='/dashbboard/addservice' className='style text-style'>Add Service</Link><br/>
                           
               <Link to='/dashbboard/makeadmin' className='style text-style'>Make Admin</Link><br/>
               <Link to='/dashbboard/manageservice' className='style text-style'>Manage Service</Link><br/>
              </div>:
               <div>
               {/* <Link to='/dashbboard/book' className='style text-style'>Book</Link><br/> */}
               <Link to='/dashbboard/booklist' className='style text-style'>Book List</Link><br/>
               <Link to='/dashbboard/review' className='style text-style'>Review</Link><br/>
               </div>
          }
           </div>
           
        </div>
    );
};

export default Slider;