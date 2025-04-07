
import React from "react";
import "../index.css";
import profileImage from "../assets/profile.jpg";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="container">
      <div className="header">
        <div className="profile-header">
          <img src={profileImage} alt="Profile" className="profile-pic" />
          <div>
            <div>Hello, Welcome 🎉</div>
            <strong>John Weak</strong>
          </div>
        </div>
      </div>
      <h2>About Us</h2>
      <img src={profileImage} alt="John" style={{ width: "100%", borderRadius: "8px" }} />
      <p>
        We are a team of dedicated professionals driven by creativity, innovation, and a passion for exceptional design.
        With years of expertise in mobile application and website design, we specialize in transforming ideas into captivating
        digital experiences that seamlessly combine functionality and aesthetics. Our approach is centered on understanding
        the unique needs of each client, ensuring every project we undertake not only aligns with their vision but also elevates
        their brand in the digital space.
      </p>
      <p>
        At the core of our work is our mastery of modern design tools like Figma, which allows us to bring concepts to life with
        precision and style. We take pride in crafting user-centric designs that are intuitive, visually appealing, and optimized
        for performance. From creating sleek mobile applications to designing impactful websites, we aim to deliver solutions that
        resonate with users and leave a lasting impression.
      </p>
      <div className="navbar">
        <div>Home</div>
        <div>Compliance</div>
        <div>Eligibility</div>
        <div>Resource</div>
        <div><Link to="/contact" style={{ textDecoration: 'none', color: 'black' }}>
           Contact
        </Link></div>
      </div>
    </div>
  );
}

export default About;
