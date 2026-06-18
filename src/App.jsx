import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Aboutus from './components/aboutus'
import Projects from './components/projects'
import Footer from './components/footer'
import Contactus from './components/contactus'

function App() {


  return (
    <>
     <BrowserRouter>
      <Navbar />
      <main>
        <Hero />
        <Aboutus />
        <Projects />
        <Contactus />
      </main>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
