//Name: Farzana Akter Happy
//Student Id: 302340972
//COMP229– Web Application Development
//Assignment_1
//Date: May21,2025

import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to My Portfolio</h1>
      <p>I’m Farzana Akter Happy, a software developer passionate about web technologies.</p>
      <p>My mission is to build responsive and user-friendly applications.</p>
      <Link to="/about"><button>Learn More About Me</button></Link>
    </div>
  );
};

export default Home;