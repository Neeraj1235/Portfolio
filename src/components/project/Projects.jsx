import React from "react";
import "./project.css";
import IMG1 from "../../assets/Brick-Braker.png";
import IMG2 from "../../assets/Weather-App.jpg";
import IMG3 from "../../assets/Movie-app.png";
import IMG4 from "../../assets/socials-media.jpg";

const Projects = () => {
  return (
    <section id="project">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container project_container">
        <article className="project_item">
          <div className="project_item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>2D Brick Braker</h3>
          <div className="project_item-cta">
            <a
              href="https://github.com/Neeraj1235/2D-Canvas-Game"
              className="btn"
              target="_blank"
            >
              <b>Github</b>
            </a>
            <a
              href="https://2d-canvas-game.netlify.app"
              className="btn btn-primary"
              target="_blank"
            >
              <b>Live Demo</b>
            </a>
          </div>
        </article>

        <article className="project_item">
          <div className="project_item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Weather-App</h3>
          <div className="project_item-cta">
            <a
              href="https://github.com/Neeraj1235/Weather-App"
              className="btn"
              target="_blank"
            >
              <b>Github</b>
            </a>
            <a
              href="https://weather-news-forecast.netlify.app"
              className="btn btn-primary"
              target="_blank"
            >
              <b>Live Demo</b>
            </a>
          </div>
        </article>

        <article className="project_item">
          <div className="project_item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Movie App</h3>
          <div className="project_item-cta">
            <a
              href="https://github.com/Neeraj1235/Movie-app"
              className="btn"
              target="_blank"
            >
              <b>Github</b>
            </a>
            <a
              href="https://movie-app12.netlify.app"
              className="btn btn-primary"
              target="_blank"
            >
              <b>Live Demo</b>
            </a>
          </div>
        </article>

        <article className="project_item">
          <div className="project_item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Social-Media</h3>
          <div className="project_item-cta">
            <a
              href="https://github.com/Neeraj1235/Social-media"
              className="btn"
              target="_blank"
            >
              <b>Github</b>
            </a>
            <a
              href="https://social-frontend-cfhu.onrender.com"
              className="btn btn-primary"
              target="_blank"
            >
              <b>Live Demo</b>
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Projects;
