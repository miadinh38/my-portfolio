import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";

import "./About.scss";
import { urlFor, client } from "../../../src/client";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => setAbouts(data));
  }, []);

  return (
    <>
      <h2 className="head-text">
        I Know That <span>Good Apps</span> <br />
        Means <span>Good Business</span>
      </h2>

      <div className="app__about-intro app__flex">
        <div className="app__about-intro-pic">
          <img src={images.profile1} alt="profile_pic" />
          <div />
        </div>

        <p className="p-text">
          My coding journey began when I stumbled upon some fascinating
          programming courses on Udemy. Driven by a passion for Mathematics and
          data insights, I was captivated by coding's potential, leading me to
          enroll in a Web Development Bootcamp at Lighthouse Labs, where I honed
          my programming skills and solidified my commitment to a career in
          technology.
          <br />
          <br />
          From Sales & Marketing to Web Development at a startup, I've refined
          communication, teamwork, and problem-solving skills while shaping my
          technical abilities, including TypeScript, React, Tailwind, etc. With
          a talent for simplifying complex concepts and a track record of rapid
          learning, I'm ready to deliver meaningful solutions in dynamic
          environments.
        </p>
      </div>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ capacity: 1 }}
            whileHover={{ scale: 1.1 }}
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
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
