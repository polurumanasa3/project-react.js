import React, { useState } from "react";
import "../App.css";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrorMsg("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");
    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      alert("Logged in successfully as " + formData.email);
      setFormData({ email: "", password: "" });
    } catch (error) {
      setErrorMsg(error.message);
    }
    setLoading(false);
  };

  return (
    <div className="app-container page">
      <h2 className="page-title">🔐 Login</h2>
      <form onSubmit={handleSubmit} className="form-container">
        <label className="form-label">
          Email
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="input-field"
            disabled={loading}
          />
        </label>
        <label className="form-label">
          Password
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="input-field"
            disabled={loading}
          />
        </label>
        {errorMsg && <p className="error-message">{errorMsg}</p>}
        <button type="submit" className="nav-button btn-login" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
