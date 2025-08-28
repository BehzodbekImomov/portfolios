import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import skillsImg from "../../assets/images/skillsImage.png";
import "./Work.css";
import { NavLink } from "react-router-dom";
const Work = () => {
    const [showAll, setShowAll] = useState(false);

  const works = [
    { title: "DESIGN PORTFOLIO", skills: ["HTML", "CSS", "JAVASCRIPT"] },
    { title: "DESIGN PORTFOLIO", skills: ["HTML", "CSS", "JAVASCRIPT"] },
    { title: "DESIGN PORTFOLIO", skills: ["HTML", "CSS", "JAVASCRIPT"] },
    { title: "DESIGN PORTFOLIO", skills: ["HTML", "CSS", "JAVASCRIPT"] },
    { title: "DESIGN PORTFOLIO", skills: ["HTML", "CSS", "JAVASCRIPT"] },
  ];

  // Dastlab faqat 2 ta element, qolganlari showAll true bo‘lsa chiqadi
  const visibleWorks = showAll ? works : works.slice(0, 2);
  return (
    <section id="work" className="container work">
      <div className="work-text">
        <h2>work</h2>
        <span className="line"></span>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab doloribus
          ea libero beatae dicta quis laudantium at maiores aliquid, animi
          provident aut, impedit tempora! Repudiandae accusantium libero animi
          corporis quos velit minus beatae officia aspernatur dolores. Eligendi,
          iste? Delectus quod itaque architecto accusamus mollitia tempore rem
          sequi qui asperiores veniam.
        </p>
      </div>
          <ul className="work-list">
         <AnimatePresence>
          {visibleWorks.map((work, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeOut" }}

            >
              <img src={skillsImg} alt=""  />
              <NavLink className="work-title">{work.title}</NavLink>
              <div className="skills">
                {work.skills.map((skill, i) => (

                  <span
                    key={i}

                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.li>
          ))}
        </AnimatePresence>

      </ul>
      <div className="btn-container">

         <button
        onClick={() => setShowAll(!showAll)}

      >
        {showAll ? "See Less" : "See More"}
        <span >
          {showAll ?<i style={{fontSize:"25px"}} class="ri-arrow-up-s-line"></i>  :<i style={{fontSize:"25px"}}class="ri-arrow-down-s-line"></i>  }
        </span>
      </button>
      </div>
    </section>
  );
};

export default Work;
