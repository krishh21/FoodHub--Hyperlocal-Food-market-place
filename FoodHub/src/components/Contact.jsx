import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2tyw4tc", // Your EmailJS service ID
        "template_fekihbi", // Your EmailJS template ID
        form.current,
        "j0p2oAyH7gU3opyKv" // Your EmailJS public key
      )
      .then(
        () => {
          setSent(true);
          form.current.reset();
        },
        (error) => {
          console.error("FAILED...", error.text);
        }
      );
  };

  return (
    <div
      style={{
        paddingTop: "100px", // spacing from fixed header
        paddingBottom: "80px", // spacing before footer
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#f1f1f1",
        minHeight: "100vh",
      }}
    >
      <section
        id="contact"
        style={{
          background: "#fffaf0",
          padding: "2rem",
          borderRadius: "10px",
          maxWidth: "600px",
          width: "100%",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <h2
          style={{
            fontSize: "1.8rem",
            marginBottom: "1rem",
            color: "#ff5722",
            textAlign: "center",
          }}
        >
          Contact Me
        </h2>
        <p
          style={{
            marginBottom: "1.5rem",
            color: "#444",
            textAlign: "center",
          }}
        >
          Have suggestions, questions, or feedback about Food Hub? Send me a
          message!
        </p>

        <form
          ref={form}
          onSubmit={sendEmail}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            style={{
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid #ddd",
              fontSize: "1rem",
            }}
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            style={{
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid #ddd",
              fontSize: "1rem",
            }}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            style={{
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid #ddd",
              fontSize: "1rem",
              resize: "none",
            }}
          ></textarea>

          <button
            type="submit"
            style={{
              backgroundColor: "#ff5722",
              color: "#fff",
              border: "none",
              padding: "12px",
              borderRadius: "6px",
              fontSize: "1rem",
              cursor: "pointer",
              transition: "background 0.3s ease",
            }}
          >
            Send Message
          </button>
        </form>

        {sent && (
          <p style={{ color: "green", marginTop: "1rem", textAlign: "center" }}>
            ✅ Message sent successfully!
          </p>
        )}
      </section>
    </div>
  );
};

export default ContactForm;
