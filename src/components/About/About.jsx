import React from 'react'

import "./About.css"

const About = () => {
  return (
    <section id='about' className='about'>
      <div className="container about-container">
        <div className="about-text">


        <h2>about</h2>
          <span className='line'></span>

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab doloribus ea libero beatae dicta quis laudantium at maiores aliquid, animi provident aut, impedit tempora! Repudiandae accusantium libero animi corporis quos velit minus beatae officia aspernatur dolores. Eligendi, iste? Delectus quod itaque architecto accusamus mollitia tempore rem sequi qui asperiores veniam.</p>
        </div>
        <ul className='about-list'>
          <li>
            <h3>Front-End</h3>
            <p>60+ Hours Experience</p>
          </li>
          <li>
            <h3>Python</h3>
            <p>4 Years Experience</p>
          </li>
          <li>
            <h3>Machine Learning</h3>
            <p>120+ Hours Experience</p>
          </li>
        </ul>
      </div>

    </section>
  )
}

export default About