import React from 'react'
import Intro from "../src/components/Intro/Intro"
import Navbar from "../src/components/Navbar/ResponsiveNavBar"
import Services from "../src/components/Services/Services"
import Experenice from "../src/components/Experience/Experience"
import Works from "../src/components/Works/Works"
import Portfolio from "../src/components/Portfolio/Portfolio"
import Testomonial from "../src/components/Testimonials/Testimonial"
import Contacts from "../src/components/Contact/Contact"
import Footer from "../src/components/Footer/Footer"


const Home = () => {
  return (
    <div>
        <Navbar/>
        <Intro/>
        <Services/>
        <Experenice/>
        <Works/>
        <Portfolio/>
        <Testomonial/>
        <Contacts/>
        <Footer/>
    </div>
  )
}

export default Home