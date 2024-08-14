import React from "react";
import "./CSS/TopCitiesDescription.css";
// import cityImage from "../Assets/topcities.jpg"; // Update with your image path

const TopCitiesDescription = () => {
  return (
    <div className="top-cities-container">
      {/* <div className="top-cities-image-container">
        <img src={cityImage} alt="Top Cities Home Tuition" className="top-cities-image" />
      </div> */}
      <div className="top-cities-content-container">
        <h2>Discover Premier Job Opportunities in India’s Most Dynamic Cities!</h2>
        <p>
        Unlock the best of your career potential with our expert job portal, now available in Mumbai, Delhi, Bangalore, Chennai, Hyderabad, and Pondicherry. Our platform connects you with top employers and tailored job listings that match your skills and aspirations. Whether you’re a seasoned professional or just starting out, our local job opportunities are designed to help you achieve your career goals. Experience the convenience of finding the perfect job right where you live, and watch your career take off!
        </p>
      </div>
    </div>
  );
};

export default TopCitiesDescription;
