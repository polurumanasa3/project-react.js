import React, { useState } from "react";
import "../App.css";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      alert("Account created successfully for " + formData.name);
      setFormData({ name: "", email: "", password: "", confirmPassword: "" });
    } catch (error) {
      alert("Signup failed: " + error.message);
    }
  };

  return (
    <div className="app-container page page-signup">
      <h2 className="page-title">🎉 Sign Up</h2>
      <form onSubmit={handleSubmit} className="form-container-horizontal">
        <label className="form-label-horizontal">
          Name
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="input-field-horizontal"
          />
        </label>
        <label className="form-label-horizontal">
          Email
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="input-field-horizontal"
          />
        </label>
        <label className="form-label-horizontal">
          Password
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="input-field-horizontal"
          />
        </label>
        <label className="form-label-horizontal">
          Confirm Password
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            className="input-field-horizontal"
          />
        </label>
        <button type="submit" className="nav-button btn-signup-horizontal">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
