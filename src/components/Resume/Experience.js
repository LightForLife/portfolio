import React from 'react';
import ResumeCard from './ResumeCard';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="pt-12 font-titleFont flex flex-col lgl:flex-row gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2012-2016</p>
          <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="GoIT"
            subTitle="Programming courses (2022 - 2023)"
            result="5.00/5"
            des="Full Stack Developer (HTML + CSS, JavaScript, React, Node.js)"
          />
          <ResumeCard
            title="GoIT"
            subTitle="Programming courses (2022 - 2023)"
            result="5.00/5"
            des="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <ResumeCard
            title="GoIT"
            subTitle="Programming courses (2022 - 2023)"
            result="5.00/5"
            des="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2012-2016</p>
          <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="GoIT"
            subTitle="Programming courses (2022 - 2023)"
            result="5.00/5"
            des="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <ResumeCard
            title="GoIT"
            subTitle="Programming courses (2022 - 2023)"
            result="5.00/5"
            des="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <ResumeCard
            title="GoIT"
            subTitle="Programming courses (2022 - 2023)"
            result="5.00/5"
            des="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
