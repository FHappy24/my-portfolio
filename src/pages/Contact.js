//Name: Farzana Akter Happy
//Student Id: 302340972
//COMP229– Web Application Development
//Assignment_1
//Date: May21,2025


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message submitted!");
    navigate('/');
  };

  return (
    <div>
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} required /><br />
        <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} required /><br />
        <input type="text" name="phone" placeholder="Phone Number" onChange={handleChange} required /><br />
        <input type="email" name="email" placeholder="Email Address" onChange={handleChange} required /><br />
        <textarea name="message" placeholder="Your Message" onChange={handleChange} required></textarea><br />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;