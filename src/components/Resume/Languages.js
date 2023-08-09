import React from 'react';
import { motion } from 'framer-motion';

const Languages = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="pt-12 font-titleFont flex flex-col lgl:flex-row gap-20"
    >
      <div className="w-full lgl:w-1/2 flex flex-col gap-8 lgl:gap-10">
        <div className="w-full flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px] uppercase">
            Features
          </p> */}
          <h2 className="text-2xl md:text-3xl xl:md:text-4xl font-bold">
            Ukrainian - Native
          </h2>
        </div>
        <div className="flex flex-col gap-6">
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">Native language</p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: '-100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-full h-full bg-gradient-to-r from-[#251bd0] via-[#4f73df] to-[#fff900] rounded-md"
              ></motion.span>
            </span>
          </div>
        </div>
      </div>

      <div className="w-full lgl:w-1/2 flex flex-col gap-8 lgl:gap-10">
        <div className="w-full flex flex-col gap-4">
          <h2 className="text-2xl md:text-3xl xl:md:text-4xl font-bold">
            English - Pre-Intermediate
          </h2>
        </div>
        <div className="flex flex-col gap-6">
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">
              Currently upgrading my skills
            </p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: '-100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-full h-full bg-gradient-to-r from-[#251bd0] via-[#ab0eba] to-[#7e114f] rounded-md"
              ></motion.span>
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Languages;
