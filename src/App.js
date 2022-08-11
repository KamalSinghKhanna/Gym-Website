import React from 'react'
import './App.css'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Join from './components/Join/Join'
import Plans from './components/Plans/Plans'
import Programs from './components/Programs/Programs'
import Reasons from './components/Reason/Reasons'
import Testimonials from './components/Testimonials/Testimonials'
const  App= () => {
  return (
    <div className='App'>
      <Hero/>
      <Programs />
      <Reasons />
      <Plans />
      <Testimonials />
      <Join />
      <Footer />
    </div>
  )
}

export default App