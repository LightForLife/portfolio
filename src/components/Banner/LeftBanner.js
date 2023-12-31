import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FaLinkedinIn, FaGithub, FaTelegramPlane } from 'react-icons/fa';
import Resume from '../../assets/Artur_Levchenko.pdf';

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      'Guy-who-loves-Coffee.js',
      '<ButLovesToCodeMore />',
      'Frontend Developer',
    ],
    loop: true,
    typeSpeed: 80,
    deleteSpeed: 20,
    delaySpeed: 2000,
    onLoopDone: () => console.log(`loop completed after 3 runs.`),
  });

  return (
    <div className="w-full xl:w-1/2 flex flex-col px-4 md:px-0 gap-20">
      <div className="flex flex-col gap-5 font-titleFont">
        <h4 className="text-base sml:text-lg font-normal uppercase">
          Welcome to my site
        </h4>
        <h1 className="text-4xl sml:text-5xl md:text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Artur</span>
        </h1>
        <h2 className="text-2xl sml:text-3xl md:text-4xl font-bold text-white">
          <span>{text}</span>
          <Cursor
            cursorBlinking={false}
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I am a highly motivated and capable front-end developer. Appreciate
          teamwork and willing to contribute to projects by collaborating with
          developers, designers and other professionals. I am currently focused
          on building responsive frontend web applications while learning
          backend technologies.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-6 xl:gap-0 justify-between">
        <div>
          <h2 className="text-base font-titleFont mb-4 uppercase ">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/artur-levchenko/"
              target="_blank"
              rel="noreferrer"
              className="bannerIcon"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://t.me/Light_musical"
              target="_blank"
              rel="noreferrer"
              className="bannerIcon"
            >
              <FaTelegramPlane />
            </a>
            <a
              href="https://github.com/LightForLife"
              target="_blank"
              rel="noreferrer"
              className="bannerIcon"
            >
              <FaGithub />
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base font-titleFont mb-4 uppercase ">Resume</h2>
          <a href={Resume} download className="uppercase text-sm text-gray-400">
            <button className="w-[224px] h-16 bg-black bg-opacity-25 text-gray-200 text-lg inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300">
              Download
            </button>
          </a>
          {/* <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
