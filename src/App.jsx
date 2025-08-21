import React from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Marquee from './components/Marquee';
import AboutUs from './components/AboutUs';
import Approach from './components/Approach';
import EyesPlay from './components/EyesPlay';
import Projects from './components/Projects';
import Reviews from './components/Reviews';
import Cards from './components/Cards';
import Footer from './components/Footer';
import LocomotiveScroll from 'locomotive-scroll';
import Start from './components/Start';

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full min-h-screen bg-[#F1F1F1] overflow-hidden'>
      <Navbar />
      <LandingPage />
      <Marquee />
      <AboutUs />
      <Approach />
      <EyesPlay />
      <Projects />
      <Reviews />
      <Cards/>
      <Start/>
      <Footer/>
    </div>
  )
}
export default App;
