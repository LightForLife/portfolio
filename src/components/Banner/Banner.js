import React from 'react';

import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Banner = () => {
  const [text] = useTypewriter({
    words: ['Professional coder', 'Front-end Developer', 'Designer'],
    loop: true,
    typeSpeed: 80,
    deleteSpeed: 20,
    delaySpeed: 2000,
    onLoopDone: () => console.log(`loop completed after 3 runs.`),
  });

  return (
    <section
      id="home"
      className="w-full py-20 flex items-center font-titleFont border-b-[1px] border-b-black"
    >
      <div className="w-1/2">
        <div className="flex flex-col gap-5">
          <h4 className="text-lg font-normal uppercase">Welkome to my world</h4>
          <h1 className="text-6xl font-bold text-white">
            Hi, I'm
            <span className="text-designColor capitalize">
              {' '}
              Artur Levchenko
            </span>
          </h1>
          <h2 className="text-4xl font-bold text-white">
            a <span>{text}</span>{' '}
            <Cursor
              cursorBlinking={false}
              cursorStyle="|"
              cursorColor="#ff014f"
            />
          </h2>
          <p className="text-base font-bodyFont leading-6 tracking-wide">
            I am a highly motivated and capable front-end developer. Appreciate
            teamwork and willing to contribute to projects by collaborating with
            developers, designers and other professionals. I am currently
            focused on building responsive frontend web applications while
            learning backend technologies.
          </p>
        </div>
      </div>
      <div className="w-1/2"></div>
    </section>
  );
};

export default Banner;
