import React, { useState } from 'react';
import Header from './components/header';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import Footer from './components/Footer';
import './index.css';

const App = () => {  

  const [itemId , setItemId] = useState("")
  return (
    <div>
      <Header setItemId={setItemId} />
      <HeroSection />
      <Features />
      <Footer />
    </div>
  );
};

export default App;