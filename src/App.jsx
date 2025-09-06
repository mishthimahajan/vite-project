import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { ResponsiveMenu } from './components/ResponsiveMenu'
import Hero from './components/Hero'
import Menu from "./components/Menu"; 
import About from './components/About'
import Testimonials from './components/Testimonials'
import Contact from "./components/Contact";
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <ResponsiveMenu/>
     <Hero/>
     <Menu/>
     <About/>
     <Testimonials/>
     <Contact />
     <Footer />
    
     

    </>
  )
}

export default App
