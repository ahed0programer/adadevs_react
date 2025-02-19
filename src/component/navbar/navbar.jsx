import { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Button } from "react-bootstrap";
import { HiOutlineBars3CenterLeft, HiOutlineBars3 } from "react-icons/hi2";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import logo from "./logo.png";
import "./navbar.css";
import ThemeToggler from "../themeToggler/themeToggler";

export default function MyNavbar() {
  const [show, setShow] = useState(false);
  const [hover, setHover] = useState(false);

  return (
    <>
      <Navbar className="mynav">
        <div className="navcontainer">
          <Navbar.Brand as={Link} to="#home">
            <img
              src={logo}
              alt="logo"
              className="logo pe-5 img-fluid"
              width={250}
            />
          </Navbar.Brand>
          <Button
            className="menu-button d-md-none ps-5"
            onClick={() => setShow(true)}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <div className="icon-container">
              <HiOutlineBars3CenterLeft
                className={`icon ${hover ? "hidden" : "visible"}`}
                size={35}
              />
              <HiOutlineBars3
                className={`icon ${hover ? "visible" : "hidden"}`}
                size={35}
              />
            </div>
          </Button>
          <Nav className="me-auto d-none d-md-flex ps-5">
            <Nav.Item>
              <Link to="#home" className="nav-link">
                Home
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="#features" className="nav-link">
                Features
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="#pricing" className="nav-link">
                Pricing
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="#contact" className="nav-link">
                Contact
              </Link>
            </Nav.Item>
            <ThemeToggler />
          </Nav>
        </div>
      </Navbar>

      {/* Sidebar (Offcanvas) */}
      <Offcanvas show={show} onHide={() => setShow(false)} placement="start">
        <Offcanvas.Header closeButton>
          <div className="offcanvas-header-content">
            <img src={logo} alt="logo" className="logo img-fluid pt-4" />
          </div>
        </Offcanvas.Header>
        <Offcanvas.Body className="flex-column">
          <Nav className="flex-column">
            <Nav.Item>
              <Link
                to="#home"
                className="nav-link"
                onClick={() => setShow(false)}
              >
                Home
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link
                to="#features"
                className="nav-link"
                onClick={() => setShow(false)}
              >
                Features
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link
                to="#pricing"
                className="nav-link"
                onClick={() => setShow(false)}
              >
                Pricing
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link
                to="#contact"
                className="nav-link"
                onClick={() => setShow(false)}
              >
                Contact
              </Link>
            </Nav.Item>
          </Nav>

          <span className="line-divider" />

          {/* Social media icons */}
          <div className="d-flex justify-content-between">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaFacebookSquare />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaGithub />
            </a>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
