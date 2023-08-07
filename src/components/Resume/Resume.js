import React, { useState } from 'react';
import Title from 'components/Layouts/Title';
import Education from './Education';
import Skills from './Skills';
import Experience from './Experience';

const Resume = () => {
  const [education, setEducation] = useState(true);
  const [skills, setSkills] = useState(false);
  const [experience, setExperience] = useState(false);

  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title des="My Resume" title="resume" />
      </div>
      <div>
        <ul className="w-full grid grid-cols-1 lgl:grid-cols-3">
          <li
            onClick={() =>
              setEducation(true) & setSkills(false) & setExperience(false)
            }
            className={`${
              education ? 'border-designColor rounded-lg' : 'border-transparent'
            } resumeLi`}
          >
            Education
          </li>
          <li
            onClick={() =>
              setEducation(false) & setSkills(true) & setExperience(false)
            }
            className={`${
              skills ? 'border-designColor rounded-lg' : 'border-transparent'
            } resumeLi`}
          >
            Skills
          </li>
          <li
            onClick={() =>
              setEducation(false) & setSkills(false) & setExperience(true)
            }
            className={`${
              experience
                ? 'border-designColor rounded-lg'
                : 'border-transparent'
            } resumeLi`}
          >
            Experience
          </li>
        </ul>
      </div>
      {education && <Education />}
      {skills && <Skills />}
      {experience && <Experience />}
    </section>
  );
};

export default Resume;
