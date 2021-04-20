import React from 'react';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF,faInstagram } from '@fortawesome/free-brands-svg-icons' 


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
      <section className='margindiv d-flex justify-content-center'>
          <div className='row w-75 '>

           <div className='col-md-4 '>

             <div className='d-flex justify-content-center'>
            <div className='mt-3'>
            <FontAwesomeIcon  icon={faMapMarker} />
            </div>

             <div className='ps-3'>
             <p>merul badda <br/> Daka 1212</p>
             </div>
             </div>

           </div>

           <div className='col-md-4'>
            <p className='text-center'>Comapny</p>
            <p> Sadipscing eirmod gubergren elitr no amet et vero aliquyam sea rebum, diam amet invidunt amet 
                      sadipscing amet et sea.</p>

           </div>



           <div className='col-md-4'>
            <p className='text-center'>Social Media</p>

           <div className='d-flex justify-content-center'>

           <div >
            <FontAwesomeIcon  icon={faFacebookF} />
            </div>

             <div className='ps-3'>
             <FontAwesomeIcon  icon={faInstagram} />
             </div>


           </div>



           </div>
          </div>
      </section>
    );
};

export default Footer;