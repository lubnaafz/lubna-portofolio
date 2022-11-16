import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Project from './components/project/Project';
import Contact from './components/contact/Contact';
import ReactGA from 'react-ga4';

function App() {
  ReactGA.initialize("G-LM0TSXN4PW");
  ReactGA.send("pageview");

  return (
    <>
    <Header />
    <Home />
    <About />
    <Project />
    <Contact />
    </>
  );
}

export default App;
