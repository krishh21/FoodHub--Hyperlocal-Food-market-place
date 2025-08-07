const About = () => {
  return (
    <div
      style={{
        paddingTop: "100px", // space below header
        paddingBottom: "80px", // space above footer
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#f1f1f1",
        minHeight: "100vh",
      }}
    >
      <section
        style={{
          background: "#fffaf0",
          padding: "2rem",
          borderRadius: "10px",
          maxWidth: "700px",
          width: "100%",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          fontFamily: "Arial, sans-serif",
          textAlign: "center",
        }}
      >
        <img
  src="https://res.cloudinary.com/dfthu1xpx/image/upload/v1753434323/kriss_nvyi5e.png"
  alt="Krishna Yadav"
  style={{
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "1rem",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    border: "4px solid orange", // optional: for a nice round border
  }}
/>


        <h2 style={{ fontSize: "1.8rem", marginBottom: "0.5rem", color: "#ff5722" }}>
          About the Developer
        </h2>

        <p style={{ fontSize: "1rem", lineHeight: "1.6", color: "#444" }}>
          Hi 👋 I'm <strong>Krishna Yadav</strong>, a B.Tech (CSE) student passionate about building full-stack apps.
          This Food Hub app is part of my learning journey using <strong>React</strong>, <strong>APIs</strong>, and modern tools like <strong>Parcel</strong>.
        </p>

        <p style={{ marginTop: "1rem", fontSize: "0.9rem", color: "#666" }}>
          Want to connect? <br />
          <a
            href="https://github.com/krishh21"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#ff5722", textDecoration: "none" }}
          >
            GitHub
          </a>{" "}
           |<a
            href="https://www.linkedin.com/in/krishna-yadav-27aa8026a"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#ff5722", textDecoration: "none" }}
          >
            Linkedin
          </a>
          |{" "}
          <a
            href="mailto:krishna1052004@gmail.com"
            style={{ color: "#ff5722", textDecoration: "none" }}
          >
            Email
          </a>
           
         
        </p>
      </section>
    </div>
  );
};

export default About;
