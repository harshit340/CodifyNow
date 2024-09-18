import React from 'react';
import '../style/MyServices.css';
import { HiCubeTransparent } from "react-icons/hi"

const MyServices = () => {
  return (
    <div className="services-container">
      <h2>Our <span>Services</span></h2>
      <p className="services-description">Unlock the full potential of your business with our tailored services.</p>
      <div className="services-cards">
        <div className="service-card">
          <div className="service-image">
          <HiCubeTransparent style={{fontSize:"50px"}}/>
          </div>
          <h3>App Development</h3>
          <p>
          Creating intuitive and dynamic mobile apps to elevate your business.
          </p>
         
        </div>
        <div className="service-card active">
          <div className="service-image">
          <HiCubeTransparent style={{fontSize:"50px"}}/>
          </div>
          <h3>Web Development</h3>
          <p>
          Building responsive and engaging websites to enhance your online presence.
          </p>
         
        </div>
        <div className="service-card">
          <div className="service-image">
          <HiCubeTransparent style={{fontSize:"50px"}}/>
          </div>
          <h3>Digit Marketing</h3>
          <p>
          Driving growth and visibility with innovative digital marketing strategies.
          </p>
         
        </div>
      </div>
    </div>
  );
};

export default MyServices;
