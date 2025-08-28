import React from 'react'
import { motion } from "framer-motion";
import "./Footer.css"
import { NavLink } from 'react-router-dom';
import facebookIcon from '../../assets/icons/facebook.svg'
import instagramIcon from '../../assets/icons/instagram.svg'
import gitIcon from '../../assets/icons/git.svg'


const logoContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delayChildren: 0.2, staggerChildren: 0.2 },
  },
};
const letterAnim = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Footer = () => {
    const first = "Behzod".split("");
  const second = "imomov".split("");
  const scrollToTop = () => {
  const duration = 1000;
  const start = window.scrollY;
  const startTime = performance.now();

  function animateScroll(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, start * (1 - progress));
    if (progress < 1) {
      requestAnimationFrame(animateScroll);
    }
  }
  requestAnimationFrame(animateScroll);
};

  return (
    <div>
      <footer>
        <div className="container footer">
          <NavLink to='#' onClick={scrollToTop}>
           <motion.h1
              className="logo"
              variants={logoContainer}
              initial="hidden"
              animate="visible"
            >
              {first.map((char, i) => (
                <motion.span key={i} className="logo-part primary" variants={letterAnim}>
                  {char}
                </motion.span>
              ))}
              <motion.span>&nbsp;</motion.span>
              {second.map((char, i) => (
                <motion.span key={i} className="logo-part accent" variants={letterAnim}>
                  {char}
                </motion.span>
              ))}
          </motion.h1>
          </NavLink>
          <ul className='footer-Links'>
            <li>
              <NavLink to={'https://www.facebook.com/behzodbek.imomov'} target='_blank'><img src={facebookIcon} alt="facebook" /></NavLink>
            </li>
            <li>
              <NavLink to={'https://www.instagram.com/behzodbek6063/'} target='_blank'><img src={instagramIcon} alt="instagram" /></NavLink>
            </li>
            <li>
              <NavLink to={'https://github.com/BehzodbekImomov'} target='_blank'><img src={gitIcon} alt="github" /></NavLink>

            </li>
          </ul>
        </div>

      </footer>
    </div>
  )
}

export default Footer