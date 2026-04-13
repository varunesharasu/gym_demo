import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Preferences from './pages/Preferences';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-gray-100">
      <Header />
      <main className="flex-1">
        <Home />
        <About />
        <Services />
        <Preferences />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
