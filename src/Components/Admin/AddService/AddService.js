import React, { useContext, useState } from 'react';

import { UserContext } from '../../../App';
const AddService = () => {
    const [file,setFile]=useState(null)
    const [data,setData]=useState({})

    const[loginUser,setLoginUser]=useContext(UserContext)
console.log(loginUser.email)
    const handleBlur = e => {
      const newInfo = { ...data };
      newInfo[e.target.name] = e.target.value;
      setData(newInfo);
  }
 
    const handleSubmit = (e) => {
        const formData = new FormData()
        console.log(data)
        formData.append('file', file)
        formData.append('name', data.name)
        formData.append('description', data.description)
        formData.append('day', data.day)
        formData.append('price', data.price)
        formData.append('email', loginUser.email)
      
        fetch('https://fierce-crag-88105.herokuapp.com/addpackage', {
          method: 'POST',
          body: formData
        })
        .then(response => response.json())
        .then(data => {
          console.log(data)
        })
        .catch(error => {
          console.error(error)
        })
       
        e.preventDefault();
    }
  
  const handleFileChange=(e)=>{
   const newfile=e.target.files[0]
   setFile(newfile)

  }
  console.log(file)
    return (
      <div>
          <h3 className='header-text text-center pt-5 padding'>Add Service</h3>
            <div className='d-flex justify-content-center '>
                
                <form onSubmit={handleSubmit}>
               
                    <input  onBlur={handleBlur} name='name' placeholder='package name'   /> <br /><br />
                    <input  onBlur={handleBlur} name='description' placeholder='description' /> <br /><br />
                    <input  onBlur={handleBlur} type='number' name='day' placeholder='day'  /> <br /><br />
                    <input  onBlur={handleBlur} type='number' name='price' placeholder='price'   /> <br /><br />
                   

                    <input type='file'  onChange={handleFileChange} placeholder='package name' /> <br /><br />


                    <input type="submit" />

                    
                </form>
               
        
            </div>
      </div>
    );
};

export default AddService;