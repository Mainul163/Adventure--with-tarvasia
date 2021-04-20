
import React, { useEffect,useState  } from 'react';

import ManageInfo from '../ManageInfo/ManageInfo';

const Manage = () => {

    
    const [packageinfo,setPackageinfo]=useState([])

    const loadAllproducts=()=>{
        fetch('https://fierce-crag-88105.herokuapp.com/tourpackage')
       .then(res=>res.json())
       .then(data=>setPackageinfo(data))
    }
   useEffect(()=>{
       loadAllproducts();


   },[])
    return (
        <div>
            <table class="table">
            <thead>
            <tr>
            
            <th scope="col">Package Name</th>
            <th scope="col">Price</th>
            <th scope="col">Day</th>
            <th scope="col">Remove</th>
          </tr>
          </thead>
          <tbody>
            {
                packageinfo.map(info=><ManageInfo  loadAllproducts={loadAllproducts} info={info} ></ManageInfo>)
            }
             </tbody>
            
            </table>

           
        </div>
    );
};

export default Manage;