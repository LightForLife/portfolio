import React from 'react';
import Title from 'components/Layouts/Title';
import ResumeCard from './ResumeCard';

const Resume = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title des="My Resume" />
      </div>
      <div>
        <ul className="w-full grid grid-cols-3">
          <li className="resumeLi">Education</li>
          <li className="resumeLi">Skills</li>
          <li className="resumeLi">Experience</li>
        </ul>
      </div>
      <div className="py-12 font-titleFont">
        <p className="text-sm text-designColor tracking-[4px]">2012-2016</p>
        <h2 className="text-4xl font-bold">Education</h2>
      </div>
      <div className="mt-14 w-1/2 h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        {/* className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10" */}
        <ResumeCard
          title="GoIT"
          subTitle="Programming courses"
          result="5.00/5"
          des="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <ResumeCard
          title="GoIT"
          subTitle="Programming courses"
          result="5.00/5"
          des="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <ResumeCard
          title="GoIT"
          subTitle="Programming courses"
          result="5.00/5"
          des="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div>
    </section>
  );
};

export default Resume;
