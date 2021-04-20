import React from 'react';
import Footer from '../../SameComponent/Footer/Footer';
import Navbar from '../../SameComponent/Navbar/Navbar';
import LoginDetails from '../LoginDetails/LoginDetails';


const Login = () => {
    return (
        <div>
         <Navbar></Navbar>
         <LoginDetails></LoginDetails>
         <Footer></Footer>
        </div>
    );
};

export default Login;