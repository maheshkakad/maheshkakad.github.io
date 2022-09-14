import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact" id="connect">
      <div className="number">
        <p style={{fontSize:'40px'}}>Contact Me</p>
        <p id="phone-number">+91 7028079963</p>
        <p style={{fontSize:'20px'}}>maheshkakad2020@gmail.com</p>
        <div className="cont">
          <a target="_blank" rel='noreferrer' href="https://github.com/maheshkakad">
            <i style={{color:'black',fontSize:'60px'}} className="fab fa-github"></i>
          </a>

          <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/maheshkakad12/">
            <i style={{color:'black',fontSize:'60px'}} className="fab fa-linkedin"></i>
          </a>e
          <a target="_blank" rel='noreferrer' href="#">
            <i style={{color:'black',fontSize:'60px'}} className="fab fa-twitter"></i>
          </a>
          {/* <a target="_blank" rel='noreferrer' href="https://link.medium.com/LONzgawkoqb">
            <i style={{color:'black',marginTop:'25px'}} className="fa-brands fa-medium fa-xl"></i>
          </a> */}
            {/* <i style={{color:'black',marginTop:'25px'}} className="fa-brands fa-medium fa-xl"></i> */}
        </div>
      </div>
      <div className="copyright">
      No © copyright issues | Designed and developed by Mahesh Kakad 
      </div>
    </div>
  );
}