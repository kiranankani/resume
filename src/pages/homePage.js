import React from "react";
import Cursor from "./cursorComponent";
import Header from "./header";
import Banner from "./banner";
import Projects from "./projects";
import Footer from "./footer";


const HomePage = () => {
  return (
    <React.Fragment>
      <Cursor />
      {/* Preloader */}
      <section className="preloader">
        <span className="center-line"></span>
      </section>

      {/* Background Grid */}
      <section className="fixed-lines">
        <div className="container">
          <div className="line-area"></div>
          <div className="line-area"></div>
          <div className="line-area"></div>
          <div className="line-area"></div>
          <div className="line-area"></div>
        </div>
      </section>
      <Header />
      <Banner />
      <section className="project-block">
      <Projects/>
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default HomePage;
