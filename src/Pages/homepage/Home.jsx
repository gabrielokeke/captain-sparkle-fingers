import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';

function Home() {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/gallery'); // Make sure your Route path is "/gallery"
  };

  return (
    <div id="header">
      <div className="header-text">
        <p>Fashion model, Content creator</p>
        <h1>
          Hi I'm <span>Jane</span> <br />
          A Run-away model who brings smiles to faces through my aesthetism
        </h1>
        <button onClick={handleRedirect}>Check out my work</button>
      </div>
    </div>
  );
}

export default Home;
