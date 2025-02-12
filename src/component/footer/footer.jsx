import React from "react";
import logo from './logo.png';
import { FaFacebookF, FaLinkedin, FaGithub , FaGoogle, FaInstagram  } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5">
      <div className="container">
        <div className="row">
          {/* Logo & Slogan */}
          <div className="col-md-3">
            <img src={logo} alt="logo" className="img-fluid mb-2" width={200} />
            <p className="text-secondary">Your Best Software Choice</p>
          </div>

          {/* Column 1 */}
          <div className="col-md-3">
            <h6 className="fw-bold">WEEBLY THEMES</h6>
            <div><a href="#" className="text-secondary text-decoration-none d-block">Pre-Sale FAQs</a></div>
            <div><a href="#" className="text-secondary text-decoration-none d-block">Submit a Ticket</a></div>
          </div>

          {/* Column 2 */}
          <div className="col-md-3">
            <h6 className="fw-bold">SERVICES</h6>
            <div><a href="#" className="text-secondary text-decoration-none d-block">Theme Tweak</a></div>
          </div>

          {/* Column 3 */}
          <div className="col-md-3">
            <h6 className="fw-bold">ABOUT US</h6>
            <div><a href="#" className="text-secondary text-decoration-none d-block">Contact Us</a></div>
            <div><a href="#" className="text-secondary text-decoration-none d-block">Affiliates</a></div>
            <div><a href="#" className="text-secondary text-decoration-none d-block">Resources</a></div>
          </div>
        </div>

        {/* Divider Line */}
        <hr className="bg-secondary my-4" />

        {/* Social Icons & Copyright */}
        <div className="text-center">
          <div className="mb-3">
            <a href="#" className="text-light me-3 fs-5"><FaFacebookF /></a>
            <a href="#" className="text-light me-3 fs-5"><FaLinkedin /></a>
            <a href="#" className="text-light me-3 fs-5"><FaGithub /></a>
            <a href="#" className="text-light me-3 fs-5"><FaGoogle /></a>
            <a href="#" className="text-light me-3 fs-5"><FaInstagram /></a>
          </div>
          <p className="text-secondary m-0">&copy; Copyright. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
