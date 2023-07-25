import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Home from './Pages/Home';
import AboutSection from './Pages/AboutSection';
import Footer from './components/Footer';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';
import Github from './Pages/Github';
import Contact from './Pages/Contact';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <AboutSection/>
      <Skills/>
      <Projects/>
      <Github/>
    <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
