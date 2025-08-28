import React from 'react';
import { motion } from "framer-motion";
import heroimg from "../../assets/images/3.png"
import "./Hero.css"
import { Link } from 'react-scroll';



const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};
const Hero = () => {
  return (

      <div className="container hero">
      <motion.div
      className="hero-content"
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.4, // har element navbat bilan chiqadi
          },
        },
      }}
    >
      <motion.span variants={fadeUp}>
        Hello, I’m Behzod,
      </motion.span>

      <motion.h2 variants={fadeUp}>
        Front-End Developer
      </motion.h2>

        <Link to='contact' smooth={true} duration={800}>

      <motion.button variants={fadeUp}>
        Contact Me
      </motion.button>
        </Link>
    </motion.div>
      <div className="hero-img">
            <motion.img
        src={heroimg}
        alt="Hero"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        whileHover={{ scale: 1.05 }}
        style={{
          width: "100%",
          objectFit: "cover",
        }}
      />
        </div>
</div>
  )
}

export default Hero