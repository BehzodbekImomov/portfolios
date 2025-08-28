import React, { Fragment, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import gitHub from "../../assets/icons/git.svg";
import "./Header.css";
import { Link } from "react-scroll";

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

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
 const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const first = "Behzod".split("");
  const second = "imomov".split("");

  const handleBurgerClick = () => setMenuOpen((prev) => !prev
  );
  return (
    <Fragment>
      <header>
        <nav className={scrolled ? "scrolled" : ""}>
          <div className="container navigation-content">
            <Link id="home">
              <motion.h1
                className="logo"
                variants={logoContainer}
                initial="hidden"
                animate="visible"
              >
                {first.map((char, i) => (
                  <motion.span
                    key={i}
                    className="logo-part primary"
                    variants={letterAnim}
                  >
                    {char}
                  </motion.span>
                ))}
                <motion.span>&nbsp;</motion.span>
                {second.map((char, i) => (
                  <motion.span
                    key={i}
                    className="logo-part accent"
                    variants={letterAnim}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.h1>
            </Link>
            <ul className={`header-links ${menuOpen?"open":""}`}>
              <li>
                <Link
                  to="home"
                  smooth={true}
                  duration={1700}
                  spy={true}
                  offset={-8000}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link to="about" smooth={true} duration={800}>
                  About
                </Link>
              </li>
              <li>
                <Link to="work" smooth={true} duration={800}>
                  Work{" "}
                </Link>
              </li>
              <li>
                <Link to="contact" smooth={true} duration={800}>
                  Contact{" "}
                </Link>
              </li>
            </ul>
            <NavLink className='gitHub-img' to={"https://github.com/BehzodbekImomov"} target="_blank">
              <img src={gitHub} alt="logo" />
            </NavLink>
            <div onClick={handleBurgerClick} className={`menu-burger ${menuOpen?"canseled":""}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </nav>

      </header>
    </Fragment>
  );
};

export default Header;
