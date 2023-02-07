import React from "react";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Header.scss";

const Header = () => {
  return (
    <div id="home" className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <div style={{ marginLeft: 20 }}>
              <h1 className="head-text">Your Trusted Partner in Health Care</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">Empowering You to Live Your Best Life</p>
            <p className="p-text">
              Comprehensive Medical Services, Personalized Care, and Affordable
              Prices. Empowering You to Live Your Best Life.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.hero2} alt="hero_bg" />
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
