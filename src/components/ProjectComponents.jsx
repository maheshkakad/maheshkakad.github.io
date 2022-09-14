import React from "react";
import Projects from "./Projects.jsx";
import "./ProjectComponents.css";
import BathBody from "./Projects-pic/BathBody.png";

import Clockify from "./Projects-pic/Clockify.png";
import Skinstore from "./Projects-pic/Skinstore.png"
import Indeed from "./Projects-pic/Indeed.png";
import Wrike from "./Projects-pic/Wrike.png";
import Pharmacy from "./Projects-pic/Pharmacy.png";
import { AiFillAccountBook } from "react-icons/ai";
import { SiJavascript } from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";
import {SiCsswizardry} from "react-icons/si"
import { FaReact } from "react-icons/fa"
import { SiBootstrap } from "react-icons/si"
import { SiChakraui } from "react-icons/si"


export default function ProjectComponents() {
const project1 = [<SiJavascript className="react_icon" />, <TiHtml5  className="react_icon" /> , <SiCsswizardry  className="react_icon"  /> , <FaReact  className="react_icon"/>  , <SiChakraui  className="react_icon"  />]
const project2 = [<SiJavascript className="react_icon" />, <TiHtml5  className="react_icon" /> , <SiCsswizardry  className="react_icon"  /> , <FaReact  className="react_icon"/>]
const project3 = [<SiJavascript className="react_icon" />, <TiHtml5  className="react_icon" /> , <SiCsswizardry  className="react_icon"  /> ]
const project4 = [<SiJavascript className="react_icon" />, <TiHtml5  className="react_icon" /> , <SiCsswizardry  className="react_icon"  /> , <SiBootstrap  className="react_icon"/>]

  return (
    <div className="all-projects" id="recent-work">
      <p>Projects</p>
      <Projects
      preview={Skinstore}
      title="Skin Store"
      description="SkinStore.in India's premium online platform to buy your best
      skin care, hair care, hair growth and makeup products."
      arr={project4}
      github="https://github.com/Jaya8277/CW-project"
      website="https://voluble-boba-e9fa7f.netlify.app/"
      />
         <Projects
      title="Pharmacy Clone"
      preview={Pharmacy}
      description="PharmEasy is one of India's most trusted online pharmacy & medical stores offering pharmaceutical and healthcare products."
      arr={project3}
      github="https://github.com/maheshkakad/pharmcyproject"
      website="https://tubular-pasca-44ebc3.netlify.app/"
      />
     
      <Projects
        title="Indeed clone"
        preview={Indeed}
        description="Indeed is an American worldwide employment website for job listings launched in November 2004. It is a subsidiary of Japan's Recruit Co. Ltd. and is co-headquartered in Austin, Texas, and Stamford, Connecticut, with additional offices around the world. As a single-topic search engine, it is also an example of vertical search."
        arr={project1}
        github="https://github.com/maheshkakad/can-committee-7272/tree/master/cancommitee"
        website="https://bright-meerkat-96a5a3.netlify.app/"
      />
      <Projects
        title="Wrike clone (from react)"
        preview={Wrike}
        description="Wrike, Inc. is an American project management application service provider based in San Jose, California. Wrike has currently more than 700 employees in San Jose, San Diego, Dublin, Melbourne, Kyiv and St. Petersburg . Wrike was founded in 2006 by Andrew Filev"
        arr={project1}
        github="https://github.com/maheshkakad/-sensitive-stove-1526"
        website="https://preeminent-gumdrop-2ba715.netlify.app/"
        />
   
    </div>
  );
}
