import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/header";
import "./style.css";

function Home() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    } else {
      const userData = localStorage.getItem("currentUser");
      if (userData) {
        setUser(JSON.parse(userData));
      }
    }
  }, [navigate]);

  const logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  return (
    <div className="home-container">
      <Header />
      <div className="home-content">
        <button className="logout-btn" onClick={logOut}>
          Log out
        </button>
        {user && (
          <div className="user-info">
            <h2>Welcome, {user.name}!</h2>
            <p>
              <b>Username:</b> {user.username}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
