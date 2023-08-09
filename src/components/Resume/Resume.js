import React, { useState } from 'react';
import Title from 'components/Layouts/Title';
import Education from './Education';
import Skills from './Skills';
// import Experience from './Experience';
import Languages from './Languages';

const Resume = () => {
  const [education, setEducation] = useState(false);
  const [skills, setSkills] = useState(true);
  // const [experience, setExperience] = useState(false);
  const [languages, setLanguages] = useState(false);

  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title des="Resume" title="Here is a little about my skills" />
      </div>
      <div>
        <ul className="w-full grid grid-cols-1 lgl:grid-cols-3">
          <li
            onClick={() =>
              setEducation(false) & setSkills(true) & setLanguages(false)
            }
            className={`${
              skills ? 'border-designColor rounded-lg' : 'border-transparent'
            } resumeLi`}
          >
            Skills
          </li>
          <li
            onClick={() =>
              setEducation(true) & setSkills(false) & setLanguages(false)
            }
            className={`${
              education ? 'border-designColor rounded-lg' : 'border-transparent'
            } resumeLi`}
          >
            Education
          </li>
          <li
            onClick={() =>
              setEducation(false) & setSkills(false) & setLanguages(true)
            }
            className={`${
              languages ? 'border-designColor rounded-lg' : 'border-transparent'
            } resumeLi`}
          >
            Languages
          </li>
        </ul>
      </div>
      {education && <Education />}
      {skills && <Skills />}
      {languages && <Languages />}
      {/* {experience && <Experience />} */}
    </section>
  );
};

export default Resume;
