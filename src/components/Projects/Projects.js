import React from 'react';
import Title from 'components/Layouts/Title';
import ProjectsCard from './ProjectsCard';
import { filmoteka, ice, pet, wibe, webstudio } from '../../assets/index';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="Visit my portfolio" des="My Projects" />
      </div>
      <div className="grid grid-cols-3 gap-14">
        <ProjectsCard
          title="Wibe Studio"
          des="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          src={wibe}
        />
        <ProjectsCard
          title="Wibe Studio"
          des="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          src={pet}
        />
        <ProjectsCard
          title="Wibe Studio"
          des="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          src={filmoteka}
        />
        <ProjectsCard
          title="Wibe Studio"
          des="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          src={ice}
        />
        <ProjectsCard
          title="Wibe Studio"
          des="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          src={webstudio}
        />
        {/* <ProjectsCard
          title="Wibe Studio"
          des="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          src={filmoteka}
        /> */}
      </div>
    </section>
  );
};

export default Projects;
