import './App.css';
import React from 'react';
import Navbar from './components/ui/Navbar.jsx';
import Hero from './components/ui/Hero.jsx';
import HowItWorks from './components/ui/HowItWorks.jsx';
import Footer from './components/ui/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-blue-50">
      <Navbar />
      <main className="flex-grow pt-16">
        <Hero />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
}

export default App;