import React from "react";
import "./AboutMe.css";
import tree from "./skill-logo/fogtree.jpg";
import myimage from "../IMG_20220705_171637.jpg"

export default function AboutMe() {
  return (
    <div className="about">
      <div className="fog">
        <img src="https://t3.ftcdn.net/jpg/01/05/13/24/360_F_105132418_qaIeOWc6sE2re4EXgKZyZHbdNHlyMm23.jpg" alt="" />
      </div>
      <div className="info">
        <p>Hey there!</p>
        <p>I am Mahesh Kakad</p>
         <a href="#connect"><button> Connect </button></a>
      </div>

      <div className="image">
        <div className="white">
          <img src={myimage} className="gifimg" alt="Mahesh Kakad" />
        </div>
      </div>
    </div>
  );
}
