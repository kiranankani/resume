import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="copy-right">
        <span>
          E: 
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=saikiran.ankani@gmail.com&su=Your Subject Here&body=Your email body here" 
          rel="noopener noreferrer"
          target="_blank"> saikiran.ankani@gmail.com</a>
        </span>
        <span>
          T: <a href="tel:+917659009114">+91 76590 09***</a>
        </span>
      </div>
      <div className="social-media">
        <p className="follow-label">Follow Me</p>
        <div className="social-icon">
          <a target="_blank" rel="noopener noreferrer" href="https://in.linkedin.com/in/kiran-ankani-98019b178" title="Linkedin">
            {" "}
            <span className="fab fa-linkedin-in"></span>{" "}
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/kiranankani" title="Github">
            {" "}
            <span className="fab fa-github"></span>{" "}
          </a>
          {/* <a target="_blank" href="https://www.facebook.com" title="Facebook">
            {" "}
            <span className="fab fa-facebook-f"></span>{" "}
          </a>
          <a target="_blank" href="https://www.instagram.com" title="Instagram">
            {" "}
            <span className="fab fa-instagram"></span>{" "}
          </a> */}
        </div>
      </div>
    </footer>
  );
};
export default Footer;
