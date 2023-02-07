import React from "react";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          className="app__social-instagram"
          rel="noopener noreferrer"
          href="https://www.instagram.com"
          target="_blank"
        >
          <BsInstagram />
        </a>
      </div>
      <div>
        <a
          className="app__social-facebook"
          rel="noopener noreferrer"
          href="https://www.facebook.com"
          target="_blank"
        >
          <FaFacebook />
        </a>
      </div>
      <div>
        <a
          className="app__social-whatapp"
          rel="noopener noreferrer"
          href="https://api.whatsapp.com"
          target="_blank"
        >
          <BsWhatsapp />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
