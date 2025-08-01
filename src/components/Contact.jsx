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
    // <section className="section-contact">
    <div className="contact-container">
     
      <div className="contact-content">
          <h1 className="contact-head">Contact me</h1>
          <p className="contact-para">
            If you have any questions or comments, please contact me via email
            or phone, or send me a message using the contact form.
          </p>
        <div className="contact-info">
          <h3>Email</h3>
          <p>susmagar012@gmail.com</p>

          <h3>Mobile</h3>
          <p>+977-9813695301</p>
        </div>

        <div className="contact-links">
        <a
          href="https://github.com/Sushey01"
          target="_blank"
          rel="noopener noreferrer"
        >
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github-icon lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
        </a>

        <a
          href="https://www.linkedin.com/in/magar-shekhar13/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-linkedin-icon lucide-linkedin"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </a>
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
                className="userName"
                required
              />
            </label>
          </div>

          <div className="contact1-info2">
            <label>
              Last Name
              <input
              type="text"
                name="lastName"
                placeholder=""
                value={formData.lastName}
                onChange={handleChange}
                className="userName"
              />
            </label>
          </div>
        </div>

        <div className="contact2">
          <h4>Email</h4>
          <span>(required)</span>
        </div>
        <div className="contact2-info">
          <label>
            <input
              type="text"
              name="email"
              placeholder="example@example.com"
              onChange={formData.email}
              className="inputEmail"
              />
          </label>
        </div>

        <div className="contact3">
          <h4> Phone </h4>
        </div>
        <div className="contact3-info">
          <div className="contact3-info1">
          <label>
            Country
            <select className="userCountry">
              <option>Nepal</option>
              <option>India</option>
              <option>Finland</option>
            </select>
          </label>
          </div>
          <div className="contact3-info2">
          <label>
            Number
            <input
              type="text"
              name="number"
              placeholder="+977"
              value={formData.number}
              className="userCountry1"
              />
          </label>
        </div>
        </div>
    

        <div className="contact4">
          <h4>Message</h4>
          <span>(required)</span>
        </div>
        <label>
          <textarea rows="5" placeholder="Your message..." className="userMessage"/>
        </label>

        <button className="contact-button" type="submit">
          Submit
        </button>
      </form>
    </div>
    // </section>
  );
};

export default Contact;
