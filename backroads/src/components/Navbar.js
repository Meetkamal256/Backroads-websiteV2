import React from "react";
import logo from "../images/logo.svg";
import { pageLinks } from "../data";

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <a href="#">
          <img src={logo} alt="" />
        </a>
      </div>
      <ul className="nav-links">
        {pageLinks.map((link) => {
          return (
            <li key={link.id}>
              <a href={link.href} className="nav-items">
                {link.text}
              </a>
            </li>
          );
        })}
      </ul>

      <ul className="nav-icons">
        <li>
          <a
            href="https://www.twitter.com"
            target="_blank"
            className="nav-icon"
          >
            <i className="fab fa-facebook"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.twitter.com"
            target="_blank"
            className="nav-icon"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.twitter.com"
            target="_blank"
            className="nav-icon"
          >
            <i className="fab fa-squarespace"></i>
          </a>
        </li>
      </ul>
      {/* <!-- Hamburger button --> */}
      <button id="menu-btn" className="hamburger" type="button">
        <span className="hamburger-top"></span>
        <span className="hamburger-middle"></span>
        <span className="hamburger-bottom"></span>
      </button>
      {/*       
      <!-- Mobile Menu --> */}
      <div className="mobile-menu" id="menu">
        <ul className="mobile-nav-links">
          <li>
            <a href="#home" className="nav-items">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="nav-items">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="nav-items">
              Services
            </a>
          </li>
          <li>
            <a href="#tours" className="nav-items">
              Tours
            </a>
          </li>
        </ul>
        <ul className="nav-icons">
          <li>
            <a
              href="https://www.twitter.com"
              target="_blank"
              className="nav-icon"
            >
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.twitter.com"
              target="_blank"
              className="nav-icon"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.twitter.com"
              target="_blank"
              className="nav-icon"
            >
              <i className="fab fa-squarespace"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
