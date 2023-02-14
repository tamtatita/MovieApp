import React from "react";
import banner from "../assets/banner.jpg";
import cinematic from '../assets/CINEMATIC.png'

const LandingPage = () => {
  return (
    <div className="h-[100vh] w-[100%] flex relative">
      <div className="h-[100vh] w-[100%] flex relative">
        <div className="bg-black h-full w-full backdrop-blur-xl"></div>
        <img className="h-full w-[80%] object-cover" src={banner} alt="" />
      </div>

      <div className="absolute">
        <div className="absolute top-10 translate-x-[10%]  w-[590px] z-100">
         <h4 className="logo">CINEMATIC</h4>

         <h5 className="text-white text-xl max-w-[400px]">Book Your Movie Tickets Online - Secure and Convenient Booking</h5>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
