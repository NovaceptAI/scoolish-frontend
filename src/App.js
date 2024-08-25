import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';  // Assuming you already created this
import Upload from './pages/Upload';     // Assuming this is your upload page
import SelectPagesFeatures from './pages/SelectPagesFeatures';
import Login from './components/Login';   // Import the Login component

function App() {
  return (
    <Router>
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/select_pages_features" element={<SelectPagesFeatures />} />
          <Route path="/login" element={<Login />} />   
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
