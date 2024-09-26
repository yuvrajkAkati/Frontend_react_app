import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import { LandingPage } from './components/LandingPage'
import { Marquee } from './components/Marquee'
import { About } from './components/About'
import { Eyes } from './components/Eyes'
import { Feature } from './components/Feature'
import { Cards } from './components/Cards'
import { Footer } from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';

function App() {

const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      <div className='w-full min-h-screen bg-zinc-900 text-white'>
          <Navbar></Navbar> 
          <LandingPage></LandingPage>
          <Marquee></Marquee>
          <About></About>
          <Eyes></Eyes>
          <Feature></Feature>
          <Cards></Cards>
          <Footer></Footer>
      </div>
    </>
  )
}

export default App
