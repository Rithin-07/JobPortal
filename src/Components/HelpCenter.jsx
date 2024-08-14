import React from 'react';
import './CSS/HelpCenter.css';
import jobSeekerImage from '../Assets/jobseek.jpeg'; // Update with actual image path
import employerImage from '../Assets/employer.png'; // Update with actual image path
import CardComponent from './CardComponent';

const HelpCenter = () => {
  return (
    <div className="help-center">
      <h1 className="page-title">Help Center</h1>
      <p className="description">
        Choose a relevant category to find answers to some of the commonly asked questions
      </p>
      <div className="cards-container">
        <CardComponent 
          image={jobSeekerImage} 
          title="Job Seeker" 
          link="/jobseeker-help"
        />
        <CardComponent 
          image={employerImage} 
          title="Employer" 
          link="/employer-help"
        />
      </div>
    </div>
  );
};

export default HelpCenter;
