import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {<ParticleBackground /> }
      {<Navbar />}
      <main className="relative z-10 overflow-x-hidden flex flex-col items-center">
        <Hero />
        <div className="neon-line my-16" />
        <About />
        <br />
        <div className="neon-line my-16" />
        <Experience />
        <br />
        <div className="neon-line my-16" />
        <Projects />
        <br />
        <div className="neon-line my-16" />
        <Skills />
        <br />
        <div className="neon-line my-16" />
        <Education />
        <br />
        <div className="neon-line my-16" />
        <Contact />
        <br />
        <div className="neon-line my-16" />
        <Footer />
      </main>
      
    </div>
  );
}

export default App;
