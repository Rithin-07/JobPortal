import React from 'react';
import './CSS/FeatureSection.css'; // Import the CSS file for styling
import { Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';

const FeatureSection = () => {
  return (
    <div className="features-container">
      <div className="feature-module">
        <div className="feature-content">
          <h1>Find Jobs Anywhere</h1>
          <p>
            Thousands of employers are looking for talented candidates like you. Find the perfect job from the comfort of your home, no matter where you are.
          </p>
          <Link to="/register">
            <Button className="feature-button" variant="contained" endIcon={<ArrowForwardIcon />}>
              Sign Up Now
            </Button>
          </Link>
        </div>
      </div>

      <div className="feature-module reverse">
        <div className="feature-content">
          <h1>Flexible Work Hours</h1>
          <p>
            Set your work preferences and availability. Choose jobs that fit your schedule and lifestyle. Enjoy the flexibility of working on your terms.
          </p>
          <Link to="/register">
            <Button className="feature-button" variant="contained" endIcon={<ArrowForwardIcon />}>
              Sign Up Now
            </Button>
          </Link>
        </div>
      </div>

      <div className="feature-module">
        <div className="feature-content">
          <h1>Boost Your Career</h1>
          <p>
            Turn your passion into a profession. Create your free profile, showcase your skills, and connect with top employers. Start your career journey now!
          </p>
          <Link to="/register">
            <Button className="feature-button" variant="contained" endIcon={<ArrowForwardIcon />}>
              Sign Up Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
