import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import MyFooter from './components/MyFooter';
import Projects from './components/Projects';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Services/>
      <Projects/>
      <MyFooter/>
    
    </>
  
  )
}

export default App;
