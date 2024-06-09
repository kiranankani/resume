import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import Resume from "./resume";
import resume from './Kiran_Resume_070624.pdf'

const Header = () => {
  return (
    <header>
      <Navbar expand="md">
        <div>
          <a
            className="logo mask-outer"
            href={resume}
            download
          >
            <span className="mask-lnk">
              Kiran <span>Ankani</span>
            </span>
            <span className="mask-lnk mask-lnk-hover" download>
              Kiran <span>Ankani</span>
            </span>
          </a>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <div className="mask-outer">
              <Nav.Link href="#home">
                <span className="mask-lnk">Home</span>
                <span className="mask-lnk mask-lnk-hover">Home</span>
              </Nav.Link>
            </div>

            <Resume />
            {/* <Resume/> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};
export default Header;
