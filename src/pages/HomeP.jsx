import React, { Fragment } from 'react'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Work from '../components/Work/Work'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'

const HomeP = () => {
  return (
    <Fragment>
      <Header />
      <Hero />
      <About />
      <Work />
      <Contact/>
      <Footer/>
    </Fragment>
  )
}

export default HomeP