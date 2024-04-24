import React from 'react';

const Resume = () => {
  return (
    <div>
      <h1>Resume</h1>
      <p>Link to download my resume and a list of my proficiencies.</p>
      <a href="/path-to-resume.pdf" download>Download Resume</a>
      <ul>
        <li>Proficiency 1</li>
        <li>Proficiency 2</li>
        <li>Proficiency 3</li>
      </ul>
    </div>
  );
};

export default Resume;
