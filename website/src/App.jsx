import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Technologies from './components/Technologies';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Gallery from './components/Gallery';

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 selection:text-cyan-900 relative">
      {/* Global Gradient Background */}
      <div className="absolute top-0 left-0 h-full w-full z-[-2] bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-8">
        {/* Components Section */}
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Gallery /> 
        <Contact />
      </div>
    </div>
  );
};

export default App;
