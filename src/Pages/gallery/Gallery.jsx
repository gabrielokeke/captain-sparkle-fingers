import React from "react";
import './gallery.css'; // Make sure this file exists

const images = [
  { src: "/fist.jpg", title: "Fist Power" },
  { src: "/girl.jpg", title: "Beautiful Girl" },
  { src: "/girl.jpg", title: "Lovely Smile" },
  { src: "/girl.jpg", title: "Graceful Pose" },
  { src: "/girl.jpg", title: "Charming Look" },
  { src: "/girl.jpg", title: "Sunshine Mood" },
  { src: "/girl.jpg", title: "Casual Style" },
  { src: "/fist.jpg", title: "Strength Symbol" },
  { src: "/fist.jpg", title: "Determined" },
  { src: "/fist.jpg", title: "Power Move" },
  { src: "/fist.jpg", title: "Bold Statement" },
  { src: "/fist.jpg", title: "Unstoppable" },
  { src: "/fist.jpg", title: "Fearless" },
  { src: "/fist.jpg", title: "Victory" },
];

const Gallery = () => (
  <div className="gallery-container">
    <h1 className="gallery-title">Jane's Gallery</h1>
    <div className="gallery-grid">
      {images.map(({ src, title }, i) => (
        <div key={i} className="gallery-item">
          <img src={src} alt={title} />
          <p className="image-title">{title}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Gallery;
