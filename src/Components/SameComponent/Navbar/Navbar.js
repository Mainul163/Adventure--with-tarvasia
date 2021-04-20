import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const Navbar = () => {
  const[loginUser,setLoginUser]=useContext(UserContext)
    return (
        <div>
            
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Travasia</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item me-5">
        <Link to='/home' class="nav-link active " aria-current="page">Home</Link>
        </li>
        <li class="nav-item me-5">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item me-5">
          <a class="nav-link " href="#">Blog</a>
        </li>
        <li class="nav-itemme me-5">
        <Link to='/dashbboard' class="nav-link active" aria-current="page">DashBoard</Link>
        </li>
        <li class="nav-item me-5">
        <Link to='/login' class="nav-link active" aria-current="page">Login</Link>
        </li>
        <li class="nav-item me-5">
        <Link to='/login' class="nav-link active" aria-current="page">{loginUser.name}</Link>
         
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Navbar;