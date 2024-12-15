import React from 'react';
import AboutImage from '../assets/About1.jpg'; // Ensure the path is correct
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="relative pb-16">
      {/* About Section Title with Animation */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="my-16 text-center text-4xl"
      >
        About <span className="text-neutral-500">Me</span>
      </motion.h1>

      <div className="flex flex-wrap items-center">
        {/* Image Section with Animation */}
        <div className="w-60% lg:w-1/2 h-39 lg:p-8 flex justify-center lg:justify-start">
          <motion.img
            src={AboutImage}
            alt="About Me"
            className="rounded-2xl shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </div>

        {/* Text Section with Animation */}
        <div className="w-full mt-[-10] lg:w-1/2 mt-8 lg:mt-0 px-6">
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="my-2 max-w-xl py-6 font-light tracking-tighter"
          >
            Hello! I'm Nandani Sah, a passionate Full Stack Developer with a strong interest in coding and problem-solving. 
            I love exploring new technologies and applying them to build innovative solutions that can make a difference in the world.
            My journey in tech has been a blend of creativity, leadership, and constant learning. In addition to coding, I enjoy mentoring others 
            and leading projects to bring ideas to life. I believe in the power of technology to transform lives and am always excited to collaborate on meaningful projects.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default About;
