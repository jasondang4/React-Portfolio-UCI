import React from 'react';

const Resume = () => {
  return (
    <div>
      <h1>Resume</h1>
      <p>Link to download my resume and a list of my proficiencies.</p>
      <a href="/path-to-resume.pdf" download>Download Resume</a>
      <ul>
        <li>JavaScript</li>
        <li>Back-End with postgres and Mongo</li>
        <li>Front-End with React</li>
      </ul>
    </div>
  );
};

export default Resume;
