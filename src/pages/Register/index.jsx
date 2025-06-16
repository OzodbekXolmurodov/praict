import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { Link } from "react-router-dom";
function Register() {
  const navigate = useNavigate();
  if (localStorage.getItem("token")) {
    return navigate("/");
  }
  const onSubmit = async (e) => {
    e.preventDefault();
    let newUser = {
      name: e.target[0].value,
      username: e.target[1].value,
      password: e.target[2].value,
    };
    let res = await axios.post(
      "https://nt-shopping-list.onrender.com/api/users",
      newUser
    );
    localStorage.setItem("token", res.data.token);
    console.log(res);
  };
  return (
    <div className="register">
      <form className="register-form" onSubmit={onSubmit}>
        <input
          className="register-input"
          type="text"
          placeholder="Name"
          required
        />
        <input
          className="register-input"
          type="text"
          placeholder="Username"
          required
        />
        <input
          className="register-input"
          type="password"
          placeholder="Password"
          required
        />
        <button className="register-btn" type="submit">
          Sign Up
        </button>
        <p>
          Already have an account?
          <Link to="/login" className="register-link">
            {" "}
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
