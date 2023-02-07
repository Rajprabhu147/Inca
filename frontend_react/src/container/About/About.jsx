import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./About.scss";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <div className="app__about-container">
      <div className="app__about-title">
        <div className="app__about-head">
          <h2 className="head-text">About Us</h2>
        </div>
        <p className="app__about-desc">
          At INCA, we understand that your health is your top priority, and
          that's why we're committed to providing you with the best possible
          care. Our experienced team of healthcare professionals is dedicated to
          helping you achieve your health goals, and we use cutting-edge
          technology and evidence-based practices to diagnose and treat a wide
          range of health conditions.
        </p>
      </div>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
            <p className="p-quote" style={{ marginTop: 10 }}>
              <i>{about.quote}</i>
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AppWrap(About, "about");
