import React from 'react';
import Profile from "../assets/Profile.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
      <div className='flex flex-wrap'>
        {/* Left Section with Animations */}
        <div className='w-full lg:w-1/2'>
          <div className='flex flex-col items-center lg:items-start'>
            {/* Animated Heading */}
            <motion.h1
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>
              Nandani Sah
            </motion.h1>

            {/* Animated Subtitle */}
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'>
              Full Stack Developer
            </motion.span>

            {/* Animated Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className='my-2 max-w-xl py-6 font-light tracking-tighter'>
              Hello! I'm Nandani Sah, a third-year Electronics, Communication, and Information Engineering student at IOE, Pulchowk Campus. With a strong enthusiasm for innovation, I thrive on blending technology and creativity to solve real-world problems. I aim to leverage my skill in software development to create impactful solutions. Beyond academics, I love collaborating with communities, empowering others through education, and exploring sustainable technologies to drive positive change.
            </motion.p>
          </div>
        </div>

        {/* Right Section with Animated Profile Image */}
        <div className='w-full lg:w-1/2 lg:p-8'>
          <div className='flex justify-center'>
            <motion.img
              src={Profile}
              alt="Profile"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
