
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  const handleNavbar = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    setToggleMenu(false);
  }, [location]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleResize = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  return (
    <>
      {isMobile && (
        <div
          className="sidebar"
          style={{
            position: "fixed",
            top: 0,
            left: toggleMenu ? 0 : "-250px",
            height: "100%",
            width: "250px",
            backgroundColor: "#ffcb05",
            color: "#222",
            padding: "1rem",
            transition: "left 0.3s ease-in-out",
            zIndex: 1000,
          }}
        >
          <button
            onClick={handleNavbar}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              background: "transparent",
              border: "none",
              fontSize: "2.5rem",
              fontWeight: "bold",
              color: "#222",
              cursor: "pointer",
            }}
            aria-label="Close menu"
          >
            &times;
          </button>
          <h4 style={{ marginTop: "60px", marginBottom: "30px" }}>Jane's Menu</h4>
          <nav className="d-flex flex-column gap-3">
            <Link className="text-dark" style={{ textDecoration: "none", fontWeight: "bold" }} to="/">Home</Link>
            <Link className="text-dark" style={{ textDecoration: "none", fontWeight: "bold" }} to="/gallery">Gallery</Link>
            <Link className="text-dark" style={{ textDecoration: "none", fontWeight: "bold" }} to="/about">About</Link>
            <Link className="text-dark" style={{ textDecoration: "none", fontWeight: "bold" }} to="/contact">Contact</Link>
          </nav>
        </div>
      )}

      <header className="d-flex justify-content-between align-items-center w-auto px-5" style={{ backgroundColor: '#ffcb05', height: '60px' }}>
        {isMobile && (
          <button
            type="button"
            onClick={handleNavbar}
            style={{ background: "transparent", border: "none" }}
          >
            <HiOutlineMenuAlt3 size={30} style={{ color: "#222" }} />
          </button>
        )}

        <h1 style={{color: 'black', fontSize: '25px', fontWeight: "600"}}>JB's Porfolio</h1>
        {!isMobile && (
          <nav className="d-flex gap-4">
            <Link className="px-3 py-1 text-dark" style={{ textDecoration: "none", fontWeight: "600" }} to="/">Home</Link>
            <Link className="px-3 py-1 text-dark" style={{ textDecoration: "none", fontWeight: "600" }} to="/gallery">Gallery</Link>
            <Link className="px-3 py-1 text-dark" style={{ textDecoration: "none", fontWeight: "600" }} to="/about">About</Link>
            <Link className="px-3 py-1 text-dark" style={{ textDecoration: "none", fontWeight: "600" }} to="/contact">Contact</Link>
          </nav>
        )}
      </header>
    </>
  );
}

export default Navbar;
