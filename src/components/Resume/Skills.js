import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from 'constants';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: index => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="pt-12 font-titleFont flex flex-col lgl:flex-row gap-20"
    >
      <div className="w-full flex flex-col ">
        <div className="w-full flex flex-col gap-4">
          {/* <p className="text-sm text-center text-designColor tracking-[4px] uppercase">
            Features
          </p> */}
          <ul className="flex flex-wrap justify-center gap-2 lgl:gap-4 text-lg">
            {skillsData.map((skill, index) => (
              <motion.li
                className="bg-white/10 text-white/80 borderBlack rounded-xl px-5 py-3 shadow-shadowOne hover:text-gray-100"
                key={index}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                custom={index}
              >
                {skill}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
