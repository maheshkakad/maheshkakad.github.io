import React from 'react'

import"./Skills.css"
import SkillComponents from './SkillComponents'
import { SiJavascript } from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";
import {SiCsswizardry} from "react-icons/si"
import { FaReact } from "react-icons/fa"
import { SiBootstrap } from "react-icons/si"


export default function Skills() {
    return (
        <div className='skills' id='SKILLS'>
            <p>Skills and Tools</p>
            <div className="tools">

           <SkillComponents name ="HTML" icon={<SiJavascript />}/>
           <SkillComponents name ="CSS" icon={ <SiCsswizardry />}/>
           <SkillComponents name ="JS" icon={ <FaReact />}/>
           <SkillComponents name ="Node.js" icon={ <FaReact />}/>
         
           <SkillComponents  name ="REACT" icon={ <FaReact />}/>
           <SkillComponents name ="GIT"icon={ <FaReact />}/>
            </div>
        </div>
    )
}
