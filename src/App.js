import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Helmet>
        <meta property="og:title" content="Jackson's Portfolio" />
        <meta property="og:description" content="Hi, I built this website to farmlise myself with react and to showcase my skill/projects and a little about me :)" />
      </Helmet>

      <Navbar />
      <Routes>
        <Route path="/MyPortfolio" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;