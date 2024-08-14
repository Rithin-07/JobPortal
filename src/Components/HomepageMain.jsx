import React from 'react';
import './CSS/Home.css'; 
// import foodImage from '../assets/TutorTrackhomeimage.png';
// import SliderComponent from './SliderComponent';

const Home = () => {
    return (
        <div>
           
            <div className="home-container">
                <div className="content">
                    {/* <h1>Say goodbye to </h1> */}
                    <h1>Find your future, one job at a time.</h1>
                    <p>Where talent meets opportunity.</p>
                </div>
                {/* <div className="image">
                    <img src={foodImage} alt="Tutor" /> 
                </div> */}
            </div>
            {/* <SliderComponent /> */}
            <div className="new-content">
                <div className="new-image-container">
                    {/* <img src={CookingImage} alt="Cooking at Home" className="cooking-image" /> */}
                </div>
                <div className="new-text-container">
                    <h1>We offer a cutting-edge approach to career growth, with a futuristic job-matching model.</h1>
                    <p>
                    Our expertise in recruitment is unmatched, blending years of industry experience, a passion for helping job seekers, and personalized guidance to ensure every candidate succeeds.
                    </p>
                </div>
                <div className="pagination">
                    {/* <span className="page-number">1/2</span> */}
                </div>
                <div className="next-button">
                    {/* <button className="play-button">&#9654;</button> HTML entity for play icon */}
                </div>
            </div>
            <div className="new-content">
                <div className="new-image-container">
                    {/* <img src={PreOrderImage} alt="Pre-order Food" className="preorder-image" /> */}
                </div>
                <div className="new-text-container">
                    <h1>Register now and unlock exclusive job opportunities!! </h1>
                    <p>
                    We understand your time is valuable—schedule your job applications in advance. We’ll connect you with top employers, ensuring the right job finds you when you need it most.
                    </p>
                </div>
                <div className="pagination">
                    {/* <span className="page-number">2/2</span> */}
                </div>
                <div className="next-button">
                    {/* <button className="play-button">&#9654;</button> HTML entity for play icon */}
                </div>
            </div>
        </div>
    );
};

export default Home;
