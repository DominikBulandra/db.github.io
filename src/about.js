import React from 'react';
import './style.css';
const About = () => {
 
  return (
    <div className="container">
      <h1>CV</h1>
      <p><img src={require('./cv.jpeg')} className="CV"></img></p>
    </div>
  );
}

export default About;
