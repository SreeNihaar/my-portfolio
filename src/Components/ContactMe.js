import React from "react";
import "./ContactMe.css";

const ContactMe = () => {
  return (
    <>
    <h2 className="headings">Contact Me</h2>
    <div className="contact-container">
      <div className="contact-item">
        <h3>
          <i className="fas fa-envelope"></i> Email:
        </h3>
        <p>
          <a href="mailto:your.email@example.com">sreenihaarchaturvedula04@gmail.com</a>
        </p>
      </div>
      <div className="contact-item">
        <h3>
          <i className="fas fa-phone-alt"></i> Phone:
        </h3>
        <p>
          <a href="tel:+918247558584">+91 8247558584</a>
        </p>
      </div>
      <div className="contact-item">
        <h3>
          <i className="fas fa-home"></i> Home Address:
        </h3>
        <p>2/17 Brodipet, Guntur, Andhra Pradesh</p>
      </div>
      <div className="contact-item">
        <h3>
          <i className="fab fa-linkedin"></i> LinkedIn:
        </h3>
        <p>
          <a
            href="https://www.linkedin.com/in/sree-nihaar-chaturvedula"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/sree-nihaar-chaturvedula
          </a>
        </p>
      </div>
      <div className="contact-item">
        <h3>
          <i className="fab fa-github"></i> GitHub:
        </h3>
        <p>
          <a
            href="https://github.com/SreeNihaar"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/SreeNihaar
          </a>
        </p>
      </div>
      <div className="contact-item">
        <h3>
          <i className="fab fa-instagram"></i> Instagram:
        </h3>
        <p>
          <a
            href="https://www.instagram.com/sreenihaar"
            target="_blank"
            rel="noopener noreferrer"
          >
            instagram.com/sreenihaar
          </a>
        </p>
      </div>
    </div>
    </>
  );
};

export default ContactMe;
