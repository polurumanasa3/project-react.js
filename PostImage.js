import React, { useState } from "react";

const PostImage = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!image) {
      alert("Please select an image to upload.");
      return;
    }
    // Here you would handle the image upload logic, e.g., upload to Firebase or server
    alert("Image posted successfully!");
    setImage(null);
    setPreview(null);
  };

  return (
    <div className="app-container page">
      <h2 className="page-title">Post an Image</h2>
      <form onSubmit={handleSubmit} className="form-container">
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {preview && (
          <div style={{ marginTop: "1rem" }}>
            <img src={preview} alt="Preview" style={{ maxWidth: "100%", maxHeight: 300 }} />
          </div>
        )}
        <button type="submit" className="nav-button" style={{ marginTop: "1rem" }}>
          Post Image
        </button>
      </form>
    </div>
  );
};

export default PostImage;
