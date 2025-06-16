import React from "react";
import { FiBell } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import "./header.css";

export default function Header() {
  return (
    <header className="home-header">
      <div className="logo">MyApp</div>
      <div className="search-container">
        <input className="search-input" type="text" placeholder="Search..." />
        <button className="search-btn">Search</button>
      </div>
      <div className="header-icons">
        <div className="header-icon" title="Notifications">
          <FiBell size={22} />
        </div>
        <div className="header-icon" title="Profile">
          <FaRegUser size={22} />
        </div>
      </div>
    </header>
  );
}
