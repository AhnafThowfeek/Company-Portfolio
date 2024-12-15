import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import MyFooter from './components/MyFooter';
import Projects from './components/Projects';
import Contact from './components/Contact';
import SocialMedia from './components/SocialMedia';

function MainLayout() {
  const [count, setCount] = useState(0);
  return (
    <div id='app' className='text-black'>
      <Navbar />
      <Home/>
      <Services/>
      <Projects/>
      <About/>
      <SocialMedia />
      <MyFooter />
    </div>
   
  );
};

function App(){
  return (
    <Router>
      <Routes>
        <Route path="*" element={<MainLayout />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};
export default App;
