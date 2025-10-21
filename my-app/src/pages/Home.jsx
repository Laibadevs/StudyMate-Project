import React from "react";
import "../styles/Home.css";

function Home() {
  return (
    <section id="home" className="home">
      <h1>Welcome to StudyMate</h1>
      <p>Your personal AI-powered educational assistant.</p>

      <div id="about" className="about">
        <h2>About</h2>
        <p>StudyMate helps students learn through personalized AI and tutorials.</p>
      </div>

      <div id="services" className="services">
        <h2>Services</h2>
        <ul>
          <li>AI-Powered Explanations</li>
          <li>Book-based Learning</li>
          <li>Video Recommendations</li>
        </ul>
      </div>
    </section>
  );
}

export default Home;
