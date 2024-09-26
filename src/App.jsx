import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import MyFooter from './components/MyFooter';
import Projects from './components/Projects';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id='app' className='text-black'>
      <Navbar/>
      <Home/>
      <About/>
      <Services/>
      <Projects/>
      <MyFooter/>
    </div>
  )
}

export default App;
