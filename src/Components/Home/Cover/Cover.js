import React from 'react';
import nepal from '../../../image/nepal.jpg'
import maldip from'../../../image/bhutan.jpg'
import lahdak from '../../../image/ladakh.jpg'
import './Cover.css'
const Cover = () => {
   
    return (
        <div id="carouselExampleControls"  class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">

    <div class="carousel-item active ">
    <img src={maldip} style={{height:"550px",width:'100%'}} alt="..."/>

    <div className='position-btn'>
       <h1 style={{fontSize: '150px'}}>Bhutan</h1>
      </div>

      <div className='position-text'>
      <p>Et sit et diam et voluptua invidunt sit. <br/>
          Tempor est sit sanctus tempor justo diam,<br/> eos dolor erat invidunt et. </p>
      </div>

    </div>
    <div class="carousel-item ">
     
     <img src={nepal} style={{height:"550px",width:'100%'}} alt="..."/>
     
    <div className='position'>
       <h1 style={{fontSize: '150px'}}>Nepal</h1>
      </div>

      <div className='position-text'>
      <p>Et sit et diam et voluptua invidunt sit. <br/>
          Tempor est sit sanctus tempor justo diam,<br/> eos dolor erat invidunt et. </p>
      </div>

    </div>
    <div class="carousel-item">
    <img src={lahdak} style={{height:"550px",width:'100%'}} alt="..."/>

    <div className='position-btn'>
       <h1 style={{fontSize: '150px'}}>Ladakh</h1>
      </div>

      <div className='position-text'>
      <p>Et sit et diam et voluptua invidunt sit. <br/>
          Tempor est sit sanctus tempor justo diam,<br/> eos dolor erat invidunt et. </p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

        
    );
};

export default Cover;