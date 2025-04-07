import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="container">
      <div className="header">
        <div className="profile-header">
          <img src={require("../assets/profile.jpg")} alt="Profile" className="profile-pic" />
          <div>
            <div>Hello, Welcome 🎉</div>
            <strong>John Weak</strong>
          </div>
        </div>
      </div>
      <h2>Contact us</h2>
      <p><b>📧 Email</b><br />workforeign@gmail.com</p>
      <p><b>📞 Phone No.</b><br />+44 (0) XXXX XXX XXX</p>

      <form style={{ paddingRight: '16px' }}>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" placeholder="Jhon Weak" />

        <label htmlFor="email">Email</label>
        <input id="email" type="email" placeholder="john@example.com" />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          placeholder="Enter your query………"
          style={{ height: "120px" }}
        ></textarea>
      </form>

      <div className="navbar">
        <div>Home</div>
        <div>Compliance</div>
        <div>Eligibility</div>
        <div>Resource</div>
        <div><Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
          About
        </Link></div>
      </div>
    </div>
  );
}

export default Contact;
