import React, { useState } from 'react';
import axios from 'axios';
import './CSS/ContactUs.css'; // Import the CSS file

const ContactUs = () => {
  const [formData, setFormData] = useState({
    topic: '',
    name: '',
    email: '',
    mobile: '',
    location: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/contact', formData);
      alert(response.data);
    } catch (error) {
      console.error('There was an error submitting the form!', error);
      alert('There was an error submitting the form.');
    }
  };

  return (
    <div>
      <div className="contact-container">
        <div className="contact-form-box">
          <h1 className="contact-form-heading">Contact Us</h1>
          <form onSubmit={handleSubmit}>
            <div className="contact-form-field">
              <label htmlFor="topic">Choose Topic</label>
              <select id="topic" name="topic" value={formData.topic} onChange={handleChange} required>
                <option value="">Choose Topic</option>
                <option value="general">General Inquiry</option>
                <option value="support">Technical Support</option>
                <option value="business">Business Inquiry</option>
                <option value="feedback">Feedback</option>
              </select>
            </div>

            <div className="contact-form-field">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>

            <div className="contact-form-field">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>

            <div className="contact-form-field">
              <label htmlFor="mobile">Mobile</label>
              <input type="tel" id="mobile" name="mobile" value={formData.mobile} onChange={handleChange} />
            </div>

            <div className="contact-form-field">
              <label htmlFor="location">Location</label>
              <select id="location" name="location" value={formData.location} onChange={handleChange}>
                <option value="">Select Location</option>
                <option value="chennai">Chennai</option>
                <option value="mumbai">Mumbai</option>
                <option value="delhi">Delhi</option>
                <option value="hyderabad">Hyderabad</option>
                <option value="puducherry">Puducherry</option>
              </select>
            </div>

            <div className="contact-form-field">
              <label htmlFor="message">Your Message</label>
              <textarea id="message" name="message" placeholder="Write your message" value={formData.message} onChange={handleChange} required></textarea>
            </div>

            <button type="submit" className="contact-form-button">Send Message</button>
          </form>

          <div className="contact-info">
            <p>Contact With Us:</p>
            <p>General Inquiry: support@jobportal.com</p>
            <p>Business Inquiry: business@jobportal.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
