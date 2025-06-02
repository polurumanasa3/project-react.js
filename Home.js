import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="app-container page">
      <h1 className="page-title">Welcome to Kids School!</h1>
      <p className="page-intro">
        We provide a fun and nurturing environment for children to learn and grow
      </p>
      <div className="features">
        <div className="feature-card">
          <h3>Interactive Classes</h3>
          <p>Engaging lessons with hands-on activities.</p>
        </div>
        <div className="feature-card">
          <h3>Experienced Teachers</h3>
          <p>Qualified and caring educators.</p>
        </div>
        <div className="feature-card">
          <h3>Fun Activities</h3>
          <p>Sports, arts, and music to inspire creativity.</p>
        </div>
      </div>
      <button
        onClick={() => navigate("/post-image")}
        className="nav-button"
        style={{ marginTop: "1rem" }}
      >
        Post Image
      </button>
    </div>
  );
};

export default Home;
