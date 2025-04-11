import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ClerkProviderWithChildren } from './components/auth/ClerkProvider';
import Navbar from './components/ui/Navbar.jsx';
import Hero from './components/ui/Hero.jsx';
import HowItWorks from './components/ui/HowItWorks.jsx';
import Footer from './components/ui/Footer.jsx';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import VerifyEmail from './components/auth/VerifyEmail';

function App() {
  return (
    <ClerkProviderWithChildren>
      <Router>
        <div className="min-h-screen flex flex-col bg-blue-50 max-w-screen-2xl mx-auto">
          <Navbar />
          <main className="flex-grow pt-16">
            <Routes>
              <Route path="/" element={
                <>
                  <Hero />
                  <HowItWorks />
                </>
              } />
              <Route path="/sign-in/*" element={<SignIn />} />
              <Route path="/sign-up/*" element={<SignUp />} />
              <Route path="/verify/*" element={<VerifyEmail />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ClerkProviderWithChildren>
  );
}

export default App;