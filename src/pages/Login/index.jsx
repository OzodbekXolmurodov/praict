import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./style.css";

function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/");
    }
  }, [navigate]);

  const onSubmit = async (e) => {
    e.preventDefault();
    const user = {
      username: e.target[0].value,
      password: e.target[1].value,
    };

    try {
      const res = await axios.post(
        "https://nt-shopping-list.onrender.com/api/auth",
        user
      );

      if (res.status === 200) {
        localStorage.setItem("token", res.data.token);

        if (res.data.user) {
          localStorage.setItem(
            "currentUser",
            JSON.stringify({
              name: res.data.user.name,
              username: res.data.user.username,
            })
          );
        } else {
          localStorage.setItem(
            "currentUser",
            JSON.stringify({ username: user.username })
          );
        }

        navigate("/");
      }
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="login">
      <form onSubmit={onSubmit}>
        <input className="input1" type="text" placeholder="username" required />
        <input
          className="input2"
          type="password"
          placeholder="password"
          required
        />
        <button className="btnlogin" type="submit">
          Sign Up
        </button>
        <p>
          No account yet?
          <Link to="/register" className="register-link">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
