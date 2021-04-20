import React, { useEffect, useState } from 'react';
import './SpecialOffer.css'
import srilanka from '../../../image/shaun-salmon-PUBWWCbSqCc-unsplash.jpg'
import srilankaPic from '../../../image/srilanka.jpg'
 
const SpecialOffer = () => {

    return  (
       <section className='container margindiv d-flex justify-content-center'>
        <div className='row w-75'>
          <div className='col-sm-12 col-md-8'>
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src={srilanka} class="d-block w-100 img" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src={srilankaPic} class="d-block w-100 img" alt="..." />
                </div>

              </div>
            </div>


         </div>
         <div className='col-md-4 '>
            <h1 className='animation'>OUR SPECIAL <br/> SRILANKA TOUR <br/> PACKAGES ARE COMMING</h1>
         </div>
       </div>



    
       </section>
);
};

export default SpecialOffer;