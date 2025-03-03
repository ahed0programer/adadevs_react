import "./contact.css";
import { FaLocationDot, FaPhone, FaEnvelope } from "react-icons/fa6";

export default function Contact() {
  return (
    <div className="contact-section">
      <div className="contact-container">
        <div className="row">
          {/* Contact Info */}
          <div className="col-12 col-md-6 contact-info">
            <div className="contact-item d-flex">
              <div className="ps-4">
                <FaLocationDot className="info-icon" />
              </div>
              <div>
                <h3>Address</h3>
                <p>Yennora, Sydney NSW 2161 Australia</p>
              </div>
            </div>
            <div className="contact-item d-flex">
              <div className="ps-4">
                <FaPhone className="info-icon" />
              </div>
              <div>
                <h3>Phone</h3>
                <p>1300 682 387 | 0452 060 000</p>
              </div>
            </div>
            <div className="contact-item d-flex">
              <div className="ps-4">
                <FaEnvelope className="info-icon" />
              </div>
              <div>
                <h3>Support</h3>
                <p>info@m4gates.com.au</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-12 col-md-6 contact-form">
            <form>
              <input type="text" placeholder="Name" className="form-control" />
              <input type="text" placeholder="Phone" className="form-control" />
              <input
                type="email"
                placeholder="Email"
                className="form-control"
              />
              <input
                type="text"
                placeholder="Post Code"
                className="form-control"
              />
              <textarea
                placeholder="Message"
                className="form-control"
                rows={4}
              />
              <button className=" btn-primary custom-btn" type="submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
