import React from 'react';
import { RiReactjsLine } from 'react-icons/ri';
import { SiDjango } from 'react-icons/si';
import { FaPython } from 'react-icons/fa';
import { DiMysql } from 'react-icons/di';
import { motion } from 'framer-motion';

const Technologies = () => {
    return (
        <div className="border-b border-neutral-800 pb-24 my-20 text-center text-4xl font-bold text-gradient">
            <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="my-10 text-center text-4xl"
            >
                Technologies
            </motion.h1>

            {/* Technology Icons with Animation */}
            <div className="flex flex-wrap items-center justify-center gap-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    className="rounded-2xl border-4 border-neutral-800 p-6"
                >
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                    className="rounded-2xl border-4 border-neutral-800 p-6"
                >
                    <SiDjango className="text-7xl text-green-600" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
                    className="rounded-2xl border-4 border-neutral-800 p-6"
                >
                    <FaPython className="text-7xl text-blue-500" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
                    className="rounded-2xl border-4 border-neutral-800 p-6"
                >
                    <DiMysql className="text-7xl text-cyan-400" />
                </motion.div>
            </div>
        </div>
    );
};

export default Technologies;
