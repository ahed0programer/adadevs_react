import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Button } from "react-bootstrap";
import { HiOutlineBars3CenterLeft, HiOutlineBars3  } from "react-icons/hi2"; 
import logo from './logo.png';
import "./Navbar.css";

export default function MyNavbar() {
  const [show, setShow] = useState(false);
  const [hover, setHover] = useState(false); // State to track hover

  return (
    <>
      <Navbar className="mynav" >
        <div className="navcontainer">
          <Navbar.Brand href="#home">
            <img src={logo} alt="logo" className="logo pe-5" width={250}/>
          </Navbar.Brand>
          <Button
            className="menu-button d-md-none ps-5"
            onClick={() => setShow(true)}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <div className="icon-container">
              <HiOutlineBars3CenterLeft className={`icon ${hover ? "hidden" : "visible"}`} size={35} />
              <HiOutlineBars3  className={`icon ${hover ? "visible" : "hidden"}`} size={35} />
            </div>
          </Button>
          <Nav className="me-auto d-none d-md-flex ps-5" >
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </div>
      </Navbar>

      {/* Sidebar (Offcanvas) */}
      <Offcanvas show={show} onHide={() => setShow(false)} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>AdaDevs</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link href="#home" onClick={() => setShow(false)}>Home</Nav.Link>
            <Nav.Link href="#features" onClick={() => setShow(false)}>Features</Nav.Link>
            <Nav.Link href="#pricing" onClick={() => setShow(false)}>Pricing</Nav.Link>
            <Nav.Link href="#contact" onClick={() => setShow(false)}>Contact</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
