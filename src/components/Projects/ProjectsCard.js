import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { FaGlobe } from 'react-icons/fa';

const ProjectsCard = ({
  title,
  des,
  src,
  githubLink,
  siteLink,
  role,
  tags,
}) => {
  return (
    <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors  duration-1000">
      <div className="w-full max-h-[280px] overflow-hidden rounded-lg">
        <img
          className="w-full h-auto object-cover group-hover:scale-110 duration-300 cursor-pointer"
          src={src}
          alt={title}
        />
      </div>
      <div className="w-full mt-5 flex flex-col gap-6">
        <div>
          <div className="flex justify-between items-center">
            <h3 className="text-base text-designColor font-normal uppercase">
              {title}
            </h3>
            <div className="flex gap-2">
              <a
                href={githubLink}
                target="_blank"
                rel="noreferrer"
                className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer"
              >
                <BsGithub />
              </a>
              <a
                href={siteLink}
                target="_blank"
                rel="noreferrer"
                className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer"
              >
                <FaGlobe />
              </a>
            </div>
          </div>
          <p className="text-sm tracking-wide mt-3 group-hover:text-gray-100 duration-300">
            {des} <br />
            {role}
          </p>
          {/* <p className="text-sm tracking-wide mt-3 group-hover:text-gray-100 duration-300">
            {role}
          </p> */}
          <ul className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <li key={index} className={`font-normal ${tag.color}`}>
                #{tag.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
