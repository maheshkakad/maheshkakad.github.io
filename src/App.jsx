import NavBar from "./components/NavBar.jsx";
import "./App.css";
import AboutMe from "./components/AboutMe.jsx";
import MyDetails from "./components/MyDetails.jsx";
import Skills from "./components/Skills.jsx";
import ProjectComponents from "./components/ProjectComponents.jsx";
import Contact from "./components/Contact.jsx";

function App() {
  return (
    <div id="HOME">
      <div className="empty"></div>
      <div>
        <NavBar />
        <AboutMe />
        <MyDetails />
        <Skills />
        <ProjectComponents />
        <Contact />
      </div>
    </div>
  );
}

export default App;
