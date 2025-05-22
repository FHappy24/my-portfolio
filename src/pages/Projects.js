//Name: Farzana Akter Happy
//Student Id: 302340972
//COMP229– Web Application Development
//Assignment_1
//Date: May21,2025


/*import React from 'react';

const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>
      <div>
        <h3>Project 1: Student Portal</h3>
        <img src="/project1.png" alt="Project 1" width="300" />
        <p>I developed a student portal using React and MongoDB...</p>
      </div>
      <div>
        <h3>Project 2: HR Management System</h3>
        <img src="/project2.png" alt="Project 2" width="300" />
        <p>This system allows HR teams to manage employee data...</p>
      </div>
      <div>
        <h3>Project 3: Portfolio Site</h3>
        <img src="/project3.png" alt="Project 3" width="300" />
        <p>This portfolio itself is a project showcasing my skills in React!</p>
      </div>
    </div>
  );
};

export default Projects;*/


import React from 'react';

const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>
      
      <div>
        <h3>Project 1: Student Portal</h3>
        <img
          src={`${process.env.PUBLIC_URL}/images/project1.png`}
          alt="Project 1"
          width="300"
        />
        <p>I developed a student portal using React and MongoDB...</p>
      </div>

      <div>
        <h3>Project 2: HR Management System</h3>
        <img
          src={`${process.env.PUBLIC_URL}/images/project2.png`}
          alt="Project 2"
          width="300"
        />
        <p>This system allows HR teams to manage employee data...</p>
      </div>

      <div>
        <h3>Project 3: Portfolio Site</h3>
        <img
          src={`${process.env.PUBLIC_URL}/images/project3.png`}
          alt="Project 3"
          width="300"
        />
        <p>This portfolio itself is a project showcasing my skills in React!</p>
      </div>
    </div>
  );
};

export default Projects;
