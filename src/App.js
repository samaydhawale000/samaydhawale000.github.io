import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Home from './Pages/Home';
import AboutSection from './Pages/AboutSection';
import Footer from './components/Footer';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <AboutSection/>
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
