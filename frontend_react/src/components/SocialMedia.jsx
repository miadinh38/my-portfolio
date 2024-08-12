import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          href="https://www.linkedin.com/in/miadinh38/"
          target="_blank"
          rel="noopener noreferer"
        >
          <FaLinkedin />
        </a>
      </div>
      <div>
        <a
          href="https://github.com/miadinh38"
          target="_blank"
          rel="noopener noreferer"
        >
          <FaGithub />
        </a>
      </div>
      {/* <div>
        <a
          href="https://leetcode.com/u/miadinh/"
          target="_blank"
          rel="noopener noreferer"
        >
          <SiLeetcode />
        </a>
      </div> */}
    </div>
  );
};

export default SocialMedia;
