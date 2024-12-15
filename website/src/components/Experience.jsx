import React from 'react';
import { EXPERIENCES } from '../constants';
import { motion } from 'framer-motion';

const Experience = () => {
    return (
        <div className="border-b">
            <h2 className="my-20 text-center text-4xl font-bold text-gradient">Experience</h2>

            <div className="px-4">
                {EXPERIENCES.map((experience, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                        className="mb-12 flex flex-wrap lg:justify-center"
                    >
                        <div className="w-full lg:w-1/4 px-4 mb-4">
                            <p className="text-xs text-gray-400">{experience.year}</p>
                        </div>

                        <div className="w-full max-w-xl lg:w-3/4 px-4">
                            <h6 className="mb-2 text-2xl font-semibold text-white hover:text-indigo-400 transition-colors">
                                {experience.role} - <span className="text-sm text-purple-400">{experience.company}</span>
                            </h6>
                            <p className="mb-4 text-gray-300 leading-relaxed">{experience.description}</p>

                            <div className="flex flex-wrap gap-2">
                                {experience.technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="rounded-lg bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 px-3 py-1 text-sm font-medium text-white shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
