import React from "react";
import { Nav } from "react-bootstrap";
import resume from "./Kiran_Resume_070624.pdf"
const Resume = () => {
  return (
    <div className="dropdown">
    <div className="mask-outer">
      <Nav.Link href="#home">
        <span className="mask-lnk">
          Resume <span className="fas fa-angle-down"></span>
        </span>
        <span className="mask-lnk mask-lnk-hover">
          Resume <span className="fas fa-angle-down"></span>
        </span>
      </Nav.Link>
    </div>
    <ul className="dropdown-outer">
      <li>
        <a
          // target="_blank"
          className="mask-outer"
          href={resume}
          download
        >
          <span className="mask-lnk" download>
            Download CV
          </span>
          <span className="mask-lnk mask-lnk-hover" download>
            Download CV
          </span>
        </a>
      </li>
    </ul>
  </div>
  );
};
export default Resume;
