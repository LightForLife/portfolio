import React from 'react';
import Title from 'components/Layouts/Title';
import ResumeCard from './ResumeCard';
import Education from './Education';
import Skills from './Skills';
import Experience from './Experience';

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
      {/* <Education /> */}
      <Skills />
      <Experience />
    </section>
  );
};

export default Resume;
