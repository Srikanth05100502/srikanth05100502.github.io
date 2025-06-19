import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <img src="/profile.jpg" alt="Profile" className="profile-pic" />
      <div>
        <h1>Srikant Bollikonda</h1>
        <p>Email: <a href="mailto:srikanthbollikonda0510@gmail.com">srikanthbollikonda0510@gmail.com</a></p>
        <p>Phone: +91 7095224310</p>
        <p>
          LinkedIn:{" "}
          <a href="https://www.linkedin.com/in/srikanth-bollikonda-b3a3a2145/" target="_blank" rel="noopener noreferrer">
            Profile
          </a>
        </p>
      </div>
    </header>
  );
}

export default Header;
