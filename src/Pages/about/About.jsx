import React, { useState, useEffect } from 'react';
import './about.css';

function About() {
  // State to track active tab: "skills", "experience", or "education"
  const [activeTab, setActiveTab] = useState('skills');

  // Handler for tab click
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    const sections = document.querySelectorAll('.vision-goals, .fun-facts');

    const observerOptions = {
      root: null, // viewport
      threshold: 0.3, // 30% visible triggers effect
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));

    // Cleanup on unmount
    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="about-col1">
            <img src="girl.jpg" alt="Jane Onyinyechi" />
          </div>
          <div className="about-col2">
            <h1 className="subtitle">Who I Am</h1>
            <p>
              I'm a professional fashion and commercial model with experience working on photo shoots, runway shows, and promotional events. 
              I have a strong presence in front of the camera, a versatile look, and a passion for bringing creative visions to life through modeling.
              I strive to combine confidence, style, and professionalism to deliver impactful and memorable performances.
            </p>

            <div className="tab-titles">
              <p 
                className={`tab-links ${activeTab === 'skills' ? 'active-link' : ''}`} 
                onClick={() => handleTabClick('skills')}
              >
                Skills
              </p>
              <p 
                className={`tab-links ${activeTab === 'experience' ? 'active-link' : ''}`} 
                onClick={() => handleTabClick('experience')}
              >
                Experience
              </p>
              <p 
                className={`tab-links ${activeTab === 'education' ? 'active-link' : ''}`} 
                onClick={() => handleTabClick('education')}
              >
                Education
              </p>
            </div>

            <div className={`tab-content ${activeTab === 'skills' ? 'active-tab' : ''}`} id="skills">
              <ul>
                <li><span>Runway Modeling</span><br />Confident walking and posing for live fashion shows</li>
                <li><span>Photo Shoots</span><br />Expressive posing and working with photographers</li>
                <li><span>Commercial Modeling</span><br />Promoting brands and products in advertising campaigns</li>
              </ul>
            </div>

            <div className={`tab-content ${activeTab === 'experience' ? 'active-tab' : ''}`} id="experience">
              <ul>
                <li><span>2024</span><br />Featured in local fashion shows and magazine editorials</li>
                <li><span>2023 - Present</span><br />Collaborated with photographers and brands for commercial campaigns</li>
                <li><span>2022</span><br />Participated in modeling workshops and training programs</li>
              </ul>
            </div>

            <div className={`tab-content ${activeTab === 'education' ? 'active-tab' : ''}`} id="education">
              <ul>
                <li><span>2023</span><br />Modeling Course at Fashion Academy</li>
                <li><span>2022</span><br />Workshops on runway techniques and portfolio building</li>
                <li><span>Self-taught</span><br />Online courses on posing and personal branding</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="vision-goals">
          <h2 className="subtitle">Vision & Goals</h2>
          <p>
            My goal is to become a top professional model recognized for versatility and professionalism, working with international brands and designers. 
            I aim to expand my portfolio across fashion, commercial, and editorial modeling while developing my personal brand and inspiring others through my work.
          </p>
        </div>

        <div className="fun-facts">
          <h2 className="subtitle">A Few Fun Facts</h2>
          <ul>
            <li>💃 I love dancing, which helps me stay graceful and confident on the runway.</li>
            <li>📸 I enjoy experimenting with different styles and looks for photoshoots.</li>
            <li>🌟 Modeling has taught me discipline, resilience, and the power of self-expression.</li>
            <li>🌍 I dream of walking in Paris Fashion Week and collaborating with global designers.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
