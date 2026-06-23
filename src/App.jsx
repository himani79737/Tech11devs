import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Home/hero'
import Aboutus from './components/Aboutus/aboutus'
import Projects from './components/Projects/projects'
import Contactus from './components/Contactus/contactus'
import Footer from './components/footer'
import Navabout from './components/Navlinks/about'
import Navwork from './components/Navlinks/ourwork'
import Navcontact from './components/Navlinks/contact'
import Service from './components/footerlinks/etoeService'
import Labdevelopment from './components/footerlinks/labdevelopment'
import StaffAugmentation from './components/footerlinks/staffaugmention'
import SearchMarketing from './components/footerlinks/searchmarketing'
import ErpImplementation from './components/footerlinks/ERP'
import AiAutomation from './components/footerlinks/Aiautomation'
import Users from './features/users/usersdata'
import Products from './features/Products/products'

function HomePage() {
  return (
    <>
      <Hero />
      <Aboutus />
      <Projects />
      <Contactus />
    </>
  )
}

function App() {

  return (

    <>
      <BrowserRouter>
        <Navbar />
        {/* <Users/> */}
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contactus" element={ <Contactus />} />
          <Route path="/Navabout" element={<Navabout />} />
          <Route path="/Navwork" element={<Navwork />} />
          <Route path="/Navcontact" element={<Navcontact />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/Labdevelopment" element={<Labdevelopment />} />
          <Route path="/StaffAugmentation" element={<StaffAugmentation />} />
          <Route path="/SearchMarketing" element={<SearchMarketing />} />
          <Route path="/ErpImplementation" element={<ErpImplementation />} />
          <Route path="/AiAutomation" element={<AiAutomation />} />
          <Route path="/Users" element={<Users/>} />
          <Route path="/Products" element={<Products/>} />
  
        </Routes>       
       <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
