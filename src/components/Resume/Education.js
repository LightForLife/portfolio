import React from 'react';
import ResumeCard from './ResumeCard';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="pt-12 font-titleFont grid grid-cols-1 lgl:grid-cols-2 gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022-2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Development</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[360px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="GoIT - courses for developers"
            subTitle="2022 - 2023"
            result="Success"
            des="Full Stack Developer (HTML + CSS, JavaScript, React, Node.js)"
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2012-2016</p>
          <h2 className="text-3xl md:text-4xl font-bold">Higher education</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[360px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="National University of Urban Economy in Kharkiv"
            subTitle="2012 -2016"
            des="Design and development of lighting projects"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
