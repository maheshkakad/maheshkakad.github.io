import React from 'react'
import"./NavBar.css";
import { FaBars } from "react-icons/fa"

export default function NavBar() {
   const uncheck = ()=>{
       document.getElementById("checker").checked = false
     
   }
    return (
        <nav className='container'>
           <div className="logo">Mahesh</div>
           <input type="checkbox" name="" id="checker" />
           <label htmlFor="checker">
               <i className="fas fa-bars"><FaBars /></i>
           </label>
           <ul>
               <li onClick={uncheck}> <i className="far fa-address-card"></i> <a href="#HOME"> Home </a></li>
               <li onClick={uncheck}> <i className="far fa-address-card"></i> <a href="#ABOUT"> About </a></li>
               <li onClick={uncheck}> <i className="fas fa-sitemap"></i> <a href="#SKILLS"> Skills </a></li>
               <li onClick={uncheck}> <i className="fas fa-laptop"></i> <a href="#recent-work"> Projects </a></li>
               <li onClick={uncheck}> <i className="fas fa-id-card"></i> <a href="#connect"> Contact </a></li>
               <li onClick={uncheck}> <i className="far fa-file-alt"></i><a target="_blank" rel='noreferrer' href="https://drive.google.com/file/d/1ZsTFNShnERUF3fnuG2LNmSBu9ge6Im7r/view?usp=sharing"> Resume </a> </li>
           </ul>
        </nav>
    )
}
