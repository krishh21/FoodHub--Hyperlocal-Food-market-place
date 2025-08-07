
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer-copy">
        © {year} Krishna Yadav. All rights reserved.
      </p>
      <p className="footer-madeby">
        Made with <span role="img" aria-label="heart">❤️</span> by{" "}
        <a
          href="https://react-portfolio-fawn-sigma.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Krishna Yadav
          
        </a>
        <br></br>

        <a href="www.linkedin.com/in/krishna-yadav-27aa8026a">•Contact</a> • <strong>Food Hub</strong>
          
      </p>
      <nav aria-label="Footer secondary"> 
       
    
      </nav>
    </footer>
  );
};
export default Footer;