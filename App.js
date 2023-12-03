
import './App.css';

import Navbar from "./components/navbar/navbar";
import Intro from "./components/intro/intro";
import Skills from "./components/skills/Skills";
import Works from "./components/works/Works";
import Contact from "./components/contact1/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
          <Navbar/>
      <Intro/>
      <Skills/>
      <Works/>
      <Contact/>
      <Footer/>
     
    </div>
  );
}

export default App;
