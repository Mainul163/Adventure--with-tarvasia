

import React, { useEffect,useState  } from 'react';



const OrderlistInfo = ({info}) => {
    const[update,setUpdate]=useState({})
    const selectValue=(e)=>{
       setUpdate(e.target.value)
    }
    const handleSubmit=(id)=>{
        const status={
            status:update
        }

        
        console.log(status)
       fetch(`https://fierce-crag-88105.herokuapp.com/update/${id}`,{
        method:'PATCH', 
        headers:{'Content-Type':'application/json'},
         body:JSON.stringify(status) 
       })
       .then(res=>res.json())
       .then(result=>console.log(result))
    }

    return (
        <tr>
        <td>{info.email}</td>
      <td>{info.name}</td>
      <td>{info.card.brand}</td>
      <td className='d-flex'>
      <select onChange={selectValue} class="form-select sixe" aria-label="Default select example">
      <option value="Pending">Please Select Status</option>
  <option value="Pending">Pending</option>
  <option value="On-going">On-going</option>
  <option value="Done">Done</option>
</select>
<button onClick={()=>handleSubmit(info._id)} type="button" class="btn btn-warning">Update</button>
      </td>
      </tr>
    );
};

export default OrderlistInfo;