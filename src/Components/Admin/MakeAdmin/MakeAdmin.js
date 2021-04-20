
import React, { useContext,useState  } from 'react';

import { UserContext } from '../../../App';

const MakeAdmin = () => {
    const [emails,setEmails]=useState({})

    const[loginUser,setLoginUser]=useContext(UserContext)


    const emailField=(e)=>{
      const emailinfo={
          
           }
      emailinfo[e.target.name]=e.target.value;
      setEmails(emailinfo)
    }
    const addAdmin=(e)=>{
        const allinfo={...emails,...loginUser}
        
        fetch('https://fierce-crag-88105.herokuapp.com/addadmin',{
            method:'POST',
            headers:{'Content-Type':'application/json'}, 
            body:JSON.stringify(allinfo)
        })

        e.preventDefault()
    }
    
    console.log('email',loginUser.email)
    return (
   <form onSubmit={addAdmin}>
       <div class="mb-3 row margindiv ">
                <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-10">
                    <input type="text" readonly class="form-control-plaintext" onBlur={emailField} name='email'  />
                </div>
            </div>
            <div class="mb-3 row  d-flex justify-content-end">
                
                <div class="col-sm-10">
                <button type="submit"  class="btn btn-info">Add Admin</button>
                </div>
            </div>

   </form>
    );
};

export default MakeAdmin;