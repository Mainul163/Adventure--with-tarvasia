
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { createContext, useState } from 'react';
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login/Login';

import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import DashBoard from './Components/DashBoard/Dashboard/DashBoard';



export const UserContext=createContext()
function App() {
  const[loginUser,setLoginUser] =useState({})
  return (
<UserContext.Provider value={[loginUser,setLoginUser]}>

 <Router>
   <Switch>
     <Route exact path='/home'>
       <Home></Home>
     </Route>

     <Route path='/login'>
     <Login></Login>
     </Route>

    

     <PrivateRoute path='/dashbboard'>
    <DashBoard></DashBoard>
     </PrivateRoute>
       
     <Route exact path='/'>
         <Home></Home>
    </Route>

    

   </Switch>
 </Router>


   </UserContext.Provider>
  );
}

export default App;
