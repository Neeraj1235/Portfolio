import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a href="https://github.com/Neeraj1235" target="_blank">
        <FaGithub />
      </a>
      <a href="mailto:justneeraj2016@gmail.com" target="_blank">
        <AiOutlineMail />
      </a>
      <a
        href="https://www.linkedin.com/in/neeraj-kumar-721040201/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://www.instagram.com/infoneeraj234/" target="_blank">
        <BsInstagram />
      </a>
    </div>
  );
};

export default HeaderSocials;
