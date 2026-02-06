import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact({ isVisible }) {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });

  const contactDetails = [
    { icon: "📧", text: "sagargupta802213@gmail.com" },
    { icon: "📍", text: "Greater Noida, India - 201308" },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      // EmailJS configuration - Replace these with your actual EmailJS credentials
      const serviceId = "YOUR_SERVICE_ID"; // Get from EmailJS dashboard
      const templateId = "YOUR_TEMPLATE_ID"; // Get from EmailJS dashboard
      const publicKey = "YOUR_PUBLIC_KEY"; // Get from EmailJS dashboard

      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);

      setStatus({ submitting: false, submitted: true, error: null });
      setFormData({ name: "", email: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus({ submitting: false, submitted: false, error: null });
      }, 5000);
    } catch (error) {
      setStatus({
        submitting: false,
        submitted: false,
        error: "Failed to send message. Please try again.",
      });
    }
  };

  return (
    <section
      id="contact"
      className={`contact ${isVisible ? "animate-in" : ""}`}
    >
      <div className="section-header">
        <h2>Get In Touch</h2>
        <div className="section-line"></div>
      </div>
      <div className="contact-content">
        <div className="contact-info">
          <h3>Let's work together!</h3>
          <p>
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
          <div className="contact-details">
            {contactDetails.map((item) => (
              <div key={item.text} className="contact-item">
                <span className="contact-icon">{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
        <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <span className="input-highlight"></span>
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <span className="input-highlight"></span>
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <span className="input-highlight"></span>
          </div>

          {status.submitted && (
            <div className="form-success">
              ✅ Message sent successfully! I'll get back to you soon.
            </div>
          )}

          {status.error && <div className="form-error">❌ {status.error}</div>}

          <button
            type="submit"
            className="btn btn-primary"
            disabled={status.submitting}
          >
            <span>{status.submitting ? "Sending..." : "Send Message"}</span>
            <svg viewBox="0 0 24 24" className="btn-icon">
              <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
            </svg>
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
