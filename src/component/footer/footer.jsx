import logo from "./logo.png";
import "./footer.css";
import {
  FaFacebookF,
  FaLinkedin,
  FaGithub,
  FaGoogle,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-light py-5">
      <div className="container">
        <div className="row text-center text-md-start">
          {/* Logo & Slogan */}
          <div className="col-12 col-md-3 mb-4 mb-md-0">
            <img src={logo} alt="logo" className="img-fluid mb-2" width={180} />
            <p className="text-secondary">Your Best Software Choice</p>
          </div>

          {/* Column 1 */}
          <div className="col-12 col-md-3 mb-4 mb-md-0">
            <h6 className="fw-bold">WEEBLY THEMES</h6>
            <a
              href="#1"
              className="text-secondary text-decoration-none d-block"
            >
              Pre-Sale FAQs
            </a>
            <a
              href="#2"
              className="text-secondary text-decoration-none d-block"
            >
              Submit a Ticket
            </a>
          </div>

          {/* Column 2 */}
          <div className="col-12 col-md-3 mb-4 mb-md-0">
            <h6 className="fw-bold">SERVICES</h6>
            <a
              href="#3"
              className="text-secondary text-decoration-none d-block"
            >
              Theme Tweak
            </a>
          </div>

          {/* Column 3 */}
          <div className="col-12 col-md-3">
            <h6 className="fw-bold">ABOUT US</h6>
            <a
              href="#4"
              className="text-secondary text-decoration-none d-block"
            >
              Contact Us
            </a>
            <a
              href="#5"
              className="text-secondary text-decoration-none d-block"
            >
              Affiliates
            </a>
            <a
              href="#6"
              className="text-secondary text-decoration-none d-block"
            >
              Resources
            </a>
          </div>
        </div>

        {/* Divider Line */}
        <hr className="my-4 custom-hr" />

        {/* Social Icons & Copyright */}
        <div className="text-center">
          <div className="mb-3 d-flex justify-content-center gap-3">
            <a href="#7" className="text-light fs-5">
              <FaFacebookF />
            </a>
            <a href="#8" className="text-light fs-5">
              <FaLinkedin />
            </a>
            <a href="#9" className="text-light fs-5">
              <FaGithub />
            </a>
            <a href="#10" className="text-light fs-5">
              <FaGoogle />
            </a>
            <a href="#11" className="text-light fs-5">
              <FaInstagram />
            </a>
          </div>
          <p className="text-secondary m-0">
            &copy; {new Date().getFullYear()} Copyright. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
