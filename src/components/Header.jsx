import React from "react";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";

function Header(props) {
  const logoSrc = props.navbarLogo;
  const altText = props.navbarLogoAlt;

  return (
    <header id="navbar" className="navbar">
      <div className="logo-container">
        <a aria-label="Claras' Kitchen & Co Logo" href="/">
          {logoSrc ? (
            <img className="dynamic-logo" src={logoSrc} alt={altText} />
          ) : (
            <div className="fallback-logo">
              {altText.charAt(0).toUpperCase()}
            </div>
          )}
        </a>
      </div>
      <nav className="main-nav">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <div className="secondary-nav">
        <Link to="/">
          <FacebookIcon />
        </Link>
        <Link to="/">
          <InstagramIcon />
        </Link>
        <Link to="/">
          <XIcon />
        </Link>
      </div>
    </header>
  );
}

export default Header;
