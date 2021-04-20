
import React from 'react';


const ManageInfo = ({info, loadAllproducts}) => {
   
    const deletebtn=(id)=>{
        console.log(id)
        fetch(`https://fierce-crag-88105.herokuapp.com/delete/${id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=> loadAllproducts())
    }
    return (
       
       
          <tr>
            
            <td>{info.name}</td>
            <td>{info.price}</td>
            <td>{info.day}</td>
            <td><button type="button" onClick={()=>deletebtn(info._id)} class="btn btn-danger">Remove</button></td>
          </tr>
         
       
    );
};

export default ManageInfo;