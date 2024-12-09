import React, { useState } from "react";
import indianic from "./indianicLogo.svg";
import torinit from "./tor-svg.png"
import GlobalLogic from "./GlobalLogic-Logo.png"


const Projects = () => {
  const [projects] = useState([
    {
      role: "Associate Consultant, Engineering",
      date: "Sept 2024 - Till date",
      alt: "GlobalLogic",
      src: GlobalLogic,
      text: "GlobalLogic - Hyderabad",
    },
    {
      role: "Sr. Software Engineer",
      date: "Jul 2021 - Sept 2024",
      alt: "LTIMindtree",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/LTIMindtree_Logo.svg/2560px-LTIMindtree_Logo.svg.png",
      text: "LTIMindtree - Hyderabad",
    },
    {
      role: "Software Engineer",
      date: "Sep 2020 - Jul 2021",
      alt: "Torinit",
      src: torinit,
      text: "Torinit Consulting Services Pvt.Ltd - Nagpur",
    },
    {
      role: "Software Engineer",
      date: "May 2018 - Sep 2020",
      alt: "IndiaNIC",
      src: indianic,
      text: "IndiaNIC Infotech Ltd - Ahmedabad",
    },
    // {
    //   role: "Ui Developer",
    //   date: "Jan 2018 - Dec 2018",
    //   alt: "intel",
    //   src: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Intel_logo_%282006-2020%29.svg",
    //   text:"adipisicing elit. Doloribus placeat est optio et? Ex explicabo sequi."
    // },
  ]);
  return (
    <div className="container-inner">
      <div className="block-title">
        <h2>Work Experience</h2>
      </div>
      <hr />
      <div className="project-outer">
        {projects.map((project) => {
          return (
            <div className="project-box" key={project}>
              <span className="hover"></span>
              <div className="year-box">
                <h4 className="project-year">
                  {project.role} <span>({project.date})</span>
                </h4>
                <p className="project-details">{project.text}</p>
              </div>
              <div className="project-img">
                <img
                  alt={project.alt}
                  height="auto"
                  width="auto"
                  src={project.src}
                  title={project.alt}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Projects;
