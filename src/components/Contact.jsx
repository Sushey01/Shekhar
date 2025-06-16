import React from "react";
import "./Contact.css";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    phone: "",
    subject: "",
    message: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  return (
    <div className="contact-container">
      <div className="contact-content">
        <h1 className="contact-title">Contact me</h1>
        <p className="contact-para">
          If you have any questions or comments, please contact me via email or
          phone, or send me a message using the contact form.
        </p>

        <div className="contact-info">
          <h4>Email</h4>
          <p>susmagar012@gmail.com</p>

          <h4>Mobile</h4>
          <p>+977-9813695301</p>
        </div>

        <div className="hero-arrow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1"
            stroke-linecap="round"
            color="#fff"
            stroke-linejoin="round"
            class="lucide lucide-arrow-down-icon lucide-arrow-down"
          >
            <path d="M12 5v14" />
            <path d="m19 12-7 7-7-7" />
          </svg>
        </div>
      </div>

      <form className="contact-form">
        <div className="contact1">
            <h4>Name</h4>
          <span>(required)</span>
          </div>
            <div className="contact1-info">
             <div className="contact1-info1">
                   <label>
            First Name
            <input
              type="text"
              name="firstName"
              placeholder=""
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </label>
             </div>

          <div className="contact1-info2">
                        <label>
            Last Name
            <input
              type="lastName"
              placeholder=""
              value={formData.lastName}
              onChange={handleChange}
            />
          </label>
          </div>
  
        </div>

        <div className="contact2">
          <h4>Email</h4>
          <span>(required)</span>
          <label>
            <input
              type="text"
              name="email"
              placeholder="example@example.com"
              onChange={formData.email}
            />
          </label>
        </div>

        <div className="contact3">
          <h4> Phone </h4>
          <label>
            Country
            <select>
              <option>Nepal</option>
              <option>India</option>
              <option>Finland</option>
            </select>
          </label>
          <label>
            Number
            <input
              type="text"
              name="number"
              placeholder="+977"
              value={formData.number}
            />
          </label>
        </div>

        <div className="contact4">
          <h4>Subject</h4>
          <span>(required)</span>
          <label>
            <input
              type="text"
              name="subject"
              placeholder="+977"
              value={formData.subject}
            />
          </label>
        </div>

        <div className="contact5">
          <h4>Message</h4>
          <span>(required)</span>
          <label>
            <textarea rows="5" placeholder="Your message..." />
          </label>
        </div>

        <button className="contact-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
