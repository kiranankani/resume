import React from "react";

const Banner = () => {
  return (
    <section className="banner">
      <div className="container">
        <div className="container-inner">
          <div className="banner-outer">
            <h1>
              Hello, I'm <span>Kiran Ankani,</span>a ReactJs Developer
              Based in Hyderabad.
            </h1>
            <div id="app" className="typing-text"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Banner;
