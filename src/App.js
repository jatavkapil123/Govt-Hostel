import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Facilities from './components/Facilities';
import Gallery from './components/Gallery';
import Admission from './components/Admission';
import Notices from './components/Notices';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Facilities />
      <Gallery />
      <Admission />
      <Notices />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;