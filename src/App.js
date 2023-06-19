import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Home from './Pages/Home';
import AboutSection from './Pages/AboutSection';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <AboutSection/>
    </div>
  );
}

export default App;
