import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import './certificates.css'
export default function Certificates() {
  return (
   <div>
       
    <div className='div1' >
      
      <Carousel>
        <Carousel.Item interval={3000}>
          <img 
            className="d-block w-100 img1"
src="images/7.jpg"
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img 
            className="d-block w-100 img1"
src="images/8.jpg"
            alt=""
          />
        </Carousel.Item>
        </Carousel>
    </div>
   </div>
  
  );
}