import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
// import Projects from './components/Projects'
import Work from './components/Work'
import Contact from './components/Contact'




const App = () => {
  return (
    <div className='bg-[#0e0c1e]'>
      <Navbar/>
      <Hero/>
      <About/>
      {/* <Projects/> */}
      <Work/>
      <Contact/>

     
    </div>
  )
}

export default App