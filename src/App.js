import React from 'react';

import Navigation from './components/Navigation';
import Project from './components/Project';
import Skills from './components/Skills';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navigation />
      <Project />
      <Project />
      <Skills />
      <About />
      <Footer />
    </div>
  );
}

export default App;
