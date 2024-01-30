import React, { Component } from "react";
import logo from "../images/logo.svg";
import { pageLinks } from "../data";
import { socialLinks } from "../data";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobileMenuOpen: false,
    };
  }

  toggleMobileMenu = () => {
    this.setState((prevState) => ({
      isMobileMenuOpen: !prevState.isMobileMenuOpen,
    }));
  };

  closeMobileMenu = () => {
    this.setState({ isMobileMenuOpen: false });
  };

  render() {
    const { isMobileMenuOpen } = this.state;

    return (
      <nav>
        <div className="logo">
          <a href="#">
            <img src={logo} alt="" />
          </a>
        </div>
        <ul className="nav-links">
          {pageLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className="nav-items"
                onClick={this.closeMobileMenu}
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
        <ul className="nav-icons">
          {socialLinks.map((link) => (
            <li key={link.id}>
              <a href={link.href} target="_blank" className="nav-icon">
                <i className={link.icon}></i>
              </a>
            </li>
          ))}
        </ul>
        <button
          id="menu-btn"
          className={`hamburger ${isMobileMenuOpen ? "open" : ""}`}
          type="button"
          onClick={this.toggleMobileMenu}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
        <div
          className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}
          id="menu"
        >
          <ul className="mobile-nav-links">
            {pageLinks.map((link) => {
              const { id, href, text } = link;
              return (
                <li key={id}>
                  <a
                    href={href}
                    className="nav-items"
                    onClick={this.closeMobileMenu}
                  >
                    {text}
                  </a>
                </li>
              );
            })}
          </ul>

          <ul className="nav-icons">
            {socialLinks.map((link) => {
              const { id, href, icon } = link;
              return (
                <li key={id}>
                  <a href={href} target="_blank" className="nav-icon">
                    <i className={icon}></i>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
