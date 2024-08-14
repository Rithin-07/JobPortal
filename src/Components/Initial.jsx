import React from 'react';
import './CSS/Initial.css';
import learnerImage from '../Assets/limage.png'; // Update with actual image path
import teacherImage from '../Assets/limage.png'; // Update with actual image path
// import { Link } from 'react-router-dom';
import CardComponent from './CardInitial';

const Initial = () => {
  return (
    <div className="help-center">
      {/* <div className="links">
          <Link to="/" className="link">
            Home |
          </Link>
          <Link to="/help" className="link">
            Help 
          </Link>
        </div> */}
      <h1 className="page-title">Unlock Your Learning Potential with TutorTrack!</h1>
      <p className="description">
      Seamlessly connect with top educators and elevate your skills with personalized tutoring at your convenience.
      </p>
      <div className="cards-container">
        <CardComponent 
          image={learnerImage} alt='logo'
          title="User" 
          link="/signup"
        />
        <CardComponent 
          image={teacherImage} alt='logo'
          title="Admin" 
          link="/signup"
        />
      </div>
    </div>
  );
};

export default Initial;
