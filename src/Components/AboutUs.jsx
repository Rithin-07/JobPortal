import React from 'react';
import './CSS/AboutUs.css'; // Import the CSS file
import { Button } from '@mui/material'; // Import Material UI Button
import { Link } from 'react-router-dom';
// import Footer from '../Footer/Footer';
// import Navbar from '../Navbar/Navbar';

const AboutUs = () => {
  return (
    <div>
      {/* <Navbar/> */}
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-heading">Connecting Talent with Opportunity</h1>
        <p className="about-text">
          At JobConnect, we are dedicated to bridging the gap between talented professionals and leading companies. Our platform is designed to simplify the job search process, providing users with a seamless experience whether they are looking for their next career opportunity or searching for the perfect candidate.
        </p>

        <h2 className="mission-heading">Our Mission</h2>
        <p className="mission-text">
          Our mission is to empower job seekers and employers alike by providing a robust platform that connects the right people with the right opportunities. We are committed to fostering professional growth and ensuring that every job search is a step towards a successful career.
        </p>

        <h2 className="why-choose-heading">Why Choose JobConnect?</h2>
        <ul className="why-choose-list">
          <li>
            <strong>Comprehensive Job Listings:</strong> Explore a wide range of job opportunities across various industries, tailored to your skills and career goals.
          </li>
          <li>
            <strong>User-Friendly Interface:</strong> Our platform is designed with simplicity in mind, making it easy for you to navigate and find what you're looking for quickly.
          </li>
          <li>
            <strong>Verified Employers:</strong> We work with trusted companies to ensure that every job listing on our platform is legitimate and up-to-date.
          </li>
          <li>
            <strong>Secure and Transparent:</strong> We prioritize your privacy and provide a secure environment where you can confidently apply for jobs and manage your career.
          </li>
        </ul>

        <div className="cta-buttons">
          <Link to='/becomet'><Button variant="contained" color="primary">
            Find Jobs
          </Button></Link>
          <Link to='/reqtut'><Button variant="contained" color="primary">
            Post a Job
          </Button></Link>
        </div>

        <p className="join-community">
          Join thousands of professionals and companies who trust JobConnect to make meaningful career connections. Whether you're advancing your career or looking for top talent, JobConnect is here to support your journey.
        </p>

        <p className="discover-future">
          Discover the future of job searching with JobConnect – where opportunity meets talent.
        </p>
      </div>
    </div>
      {/* <Footer/> */}
      </div>
  );
};

export default AboutUs;
