import React from 'react';
import Title from 'components/Layouts/Title';
import ProjectsCard from './ProjectsCard';
import { filmoteka, ice, pet, wibe, webstudio } from '../../assets/index';
import {
  wibeTags,
  petSupportTags,
  iceCreamTags,
  filmotekaTags,
  webStudioTags,
} from 'constants';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="What i do" des="Projects" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-14">
        <ProjectsCard
          title="Wibe Studio"
          des="Wibe fashion studio website with responsive design and beautiful animations.
          Individual project."
          src={wibe}
          githubLink="https://github.com/LightForLife/fashion-studio"
          siteLink="https://lightforlife.github.io/fashion-studio/"
          role="Individual project."
          technology="React JS, Styled Components, Locomotive Scroll, GSAP, Framer Motion"
          tags={wibeTags}
        />
        <ProjectsCard
          title="Pets Support"
          des="The pet help project is designed with adaptive design in mind. Search for ads by category, registration, personal cabinet, the ability to save your favorite ads and add your own."
          src={pet}
          githubLink="https://github.com/Alexandra-Makarenko/pets-support-team-project"
          siteLink="https://alexandra-makarenko.github.io/pets-support-team-project"
          role="Developer: registration and login pages, sorting by category, setting up Redux,
          modal notice."
          technology="HTML, JavaScript, React, Redux, Axios, Styled Components, Node JS, Mongo DB, Parsel"
          tags={petSupportTags}
        />
        <ProjectsCard
          title="Filmoteka"
          des="A website with a responsive layout for finding movies and user library where you can save the movie or add it to your list of already watched movies."
          src={filmoteka}
          githubLink="https://github.com/Alexandra-Makarenko/filmoteka-js-team-project"
          siteLink="https://alexandra-makarenko.github.io/filmoteka-js-team-project/"
          role="Developer: pagination, up button."
          technology="HTML, SASS, JavaScript, REST API, Parsel"
          tags={filmotekaTags}
        />
        <ProjectsCard
          title="Ice Cream"
          des="Ice company website with responsive layout, burger menu, modalwindows and attractive design."
          src={ice}
          githubLink="https://github.com/Victoriia-Ripka/IceCream-team-project"
          siteLink="https://victoriia-ripka.github.io/IceCream-team-project/"
          role="Developer: advantages section, help in the development of
          the hero section."
          technology="HTML, SASS, JavaScript, Parsel"
          tags={iceCreamTags}
        />
        <ProjectsCard
          title="WebStudio"
          des="A website of WebStudio company. Responsive design, transform effects, modal windows."
          src={webstudio}
          githubLink="https://github.com/LightForLife/goit-markup-hw-08"
          siteLink="https://lightforlife.github.io/goit-markup-hw-08/"
          role="Individual project."
          technology="HTML, CSS, SASS"
          tags={webStudioTags}
        />
      </div>
    </section>
  );
};

export default Projects;
