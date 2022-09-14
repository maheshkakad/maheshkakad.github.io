import React from "react";
import "./Projects.css";

export default function Projects(props) {
  return (
    <div className="projects">
      <div className="pro-img">
        <img src={props.preview} alt="" />
      </div>
      <div className="pro-info">
        <p>{props.title}</p>
        <p>{props.description}</p>
        <p>Tech Stack</p>
        <div className="tech-used">
          {props.arr.map((e,i) => (
              e
          ))}
        </div>
        <div className="pro-btn">
          <a target="_blank" rel='noreferrer' href={props.website}>
            <button>Preview</button>
          </a>

          <a target="_blank" rel='noreferrer' href={props.github}>
            <button>Code</button>
          </a>
        </div>
      </div>
    </div>
  );
}
