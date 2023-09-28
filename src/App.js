import React from 'react';
import './App.css';
import Navbar from  './components/basecomponent/navbar';
import Footer from  './components/basecomponent/footer';
import Home from './components/pages/home';
import Contact from './components/pages/contact';
import CV from './components/pages/cv';
import Showcase from './components/pages/showcase';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/cv" element={<CV />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/showcase" element={<Showcase />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
