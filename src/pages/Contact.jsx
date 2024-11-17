import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title">Need a Website Developed?</h2>
      <p className="contact-subtitle">Feel free to Contact Me</p>
      <div className="social-icons">
        <a href="https://github.com/farizks7575" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/fariz-k-s-454541326/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
        <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
        <a href="#" target="_blank" rel="noopener noreferrer"><i className="fas fa-envelope"></i></a>
      </div>
      <form className="contact-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Full Name </label>
            <input type="text" id="name" name="name" placeholder="Enter your Name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email </label>
            <input type="email" id="email" name="email" placeholder="Enter your Email Address" required />
          </div>
        </div>
        <div className="form-group full-width">
          <label htmlFor="message">Message </label>
          <textarea id="message" name="message" placeholder="Feel free to make your request" rows="4" required></textarea>
        </div>
        <button type="submit" className="submit-button">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
