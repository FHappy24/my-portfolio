//Name: Farzana Akter Happy
//Student Id: 302340972
//COMP229– Web Application Development
//Assignment_1

import React from 'react';

const About = () => {
  return (
    <div>
      <h1>About Me</h1>
      <img src="/me.jpeg" alt="My photo" style={{ width: '200px', borderRadius: '50%' }} />
      <p>Hi, I’m Farzana Akter Happy. I’m studying Software Engineering Technology at Centennial College...</p>
      <a href="/resume.pdf" download>Download My Resume (PDF)</a>
    </div>
  );
};

export default About;