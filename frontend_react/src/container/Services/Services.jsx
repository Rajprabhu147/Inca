import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Services.scss";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const query = '*[_type == "services"]';

    client.fetch(query).then((data) => {
      setServices(data);
    });
  }, []);
  return (
    <div className="app__services-container">
      <div className="app__services-head">
        <h2 className="head-text">Our Services</h2>
      </div>
      <div className="app__services">
        {services.map((service, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__services-item"
            key={service.title + index}
          >
            <img src={urlFor(service.imgUrl)} alt={service.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {service.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {service.description}
            </p>
            <p className="p-text" style={{ marginTop: 10 }}>
              {service.details}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(Services, "app__services"),
  "services",
  "app__whitebg"
);
