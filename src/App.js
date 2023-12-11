import Contact from "./components/Contact/Contact";
import Welcome from "./components/Welcome";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Skill from "./components/skills/Skill";

function App() {
  return (
   <>
   <Welcome/>
<Navbar/>
<Home/>
<Skill/>
<Projects/>
<Contact/>
<Footer/>
   </>
  );
}

export default App;
