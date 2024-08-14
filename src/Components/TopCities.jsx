import React from "react";
import "./CSS/TopCities.css";
import CityCard from "./CityCard";
import mumbai from '../Assets/mumbai.png';
import chennai from '../Assets/chennai.png';
import pondicherry from '../Assets/pondicherry.png';
import hyderabad from '../Assets/hyderabad.png';
import delhi from '../Assets/delhi.png';
import bangalore from '../Assets/bangalore.png';
import TopCitiesDescription from "./TopCitiesDescription";

// Updated cities array with job-related descriptions
const cities = [
  {
    name: "Mumbai",
    country: "India",
    population: "20,411,274",
    description:
      "The financial capital of India, Mumbai offers a plethora of job opportunities in finance, media, and technology sectors.",
    imageUrl: mumbai,
    coordinates: [19.0760, 72.8777],
  },
  {
    name: "Chennai",
    country: "India",
    population: "10,971,108",
    description:
      "Chennai is a major hub for the automotive, IT, and healthcare industries, offering numerous career opportunities in these fields.",
    imageUrl: chennai,
    coordinates: [13.0827, 80.2707],
  },
  {
    name: "Hyderabad",
    country: "India",
    population: "10,534,418",
    description:
      "Known as Cyberabad, Hyderabad is a booming center for IT, biotechnology, and pharmaceutical industries, attracting job seekers from across the nation.",
    imageUrl: hyderabad,
    coordinates: [17.3850, 78.4867],
  },
  {
    name: "Bangalore",
    country: "India",
    population: "12,765,000",
    description:
      "Often referred to as the Silicon Valley of India, Bangalore is renowned for its thriving tech industry, offering abundant opportunities in software development, startups, and research.",
    imageUrl: bangalore,
    coordinates: [12.9716, 77.5946],
  },
  {
    name: "Delhi",
    country: "India",
    population: "31,181,376",
    description:
      "The capital city of India, Delhi is a major hub for government jobs, consulting, education, and real estate sectors.",
    imageUrl: delhi,
    coordinates: [28.6139, 77.2090],
  },
  {
    name: 'Pondicherry',
    country: 'India',
    population: '250,000',
    description:
      'Pondicherry offers unique opportunities in tourism, hospitality, and education, with its blend of cultural heritage and modern amenities.',
    imageUrl: pondicherry,
    coordinates: [11.9416, 79.8083],
  },
];

const TopCities = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <div className="top-cities">
        <h1 className="title">Top Cities in India for Job Opportunities</h1>
        <TopCitiesDescription/>
        <div className="city-list">
          {cities.map((city) => (
            <CityCard key={city.name} city={city} />
          ))}
        </div>
      </div>
      {/* <Footer/> */}
    </div>
  );
};

export default TopCities;
