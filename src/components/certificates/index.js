import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import './Certificates.css'
import Picture2 from "./../../Images/7.jpg"
import Picture3 from "./../../Images/8.jpg"
export default function Certificates() {
  return (
   <div>
       
    <div className='div1' >
      
      <Carousel>
        <Carousel.Item interval={3000}>
          <img 
            className="d-block w-100 img1"
src={Picture2}
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img 
            className="d-block w-100 img1"
src={Picture3}
            alt=""
          />
        </Carousel.Item>
        </Carousel>
    </div>
   </div>
  
  );
}