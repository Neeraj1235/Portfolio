import React from "react";
import "./about.css";

const About = () => {
  return (
    <div id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="about_content">
        <p>
          Hi Everyone, I am{" "}
          <b>
            <span style={{ color: "orange" }}>Neeraj kumar</span>
          </b>{" "}
          from Ghaziabad, Uttar Pradesh. I have completed my graduation in{" "}
          <b>
            <span style={{ color: "Cyan" }}>
              Electronics and Communication Engineering
            </span>
          </b>
          <br />I have basic knowledge of Java. I also know front-end
          technologies{" "}
          <b>
            <span style={{ color: "Silver" }}>
              HTML, CSS, JAVASCRIPT, REACT
            </span>
            .
          </b>{" "}
          And in back-end I know technologies <br />
          <b>
            <span style={{ color: "	Olive" }}>
              Node.js, Express.js, and MongoDb
            </span>
          </b>{" "}
          (for Database), Apart from that I like Playing Sports games like
          <b>
            {" "}
            <span style={{ color: "#045D5D" }}> Cricket and Volleyball</span>
          </b>
        </p>

        <a href="#contact" className="btn btn-primary">
          <b>Let's Talk</b>
        </a>
      </div>
    </div>
  );
};

export default About;
