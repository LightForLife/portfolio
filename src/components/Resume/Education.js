import React from 'react';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <div className="w-full flex gap-20">
      <div>
        <div className="py-12 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px]">2012-2016</p>
          <h2 className="text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="GoIT"
            subTitle="Programming courses (2022 - 2023)"
            result="5.00/5"
            des="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <ResumeCard
            title="GoIT"
            subTitle="Programming courses (2022 - 2023)"
            result="5.00/5"
            des="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <ResumeCard
            title="GoIT"
            subTitle="Programming courses (2022 - 2023)"
            result="5.00/5"
            des="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </div>
      </div>
      <div>
        <div className="py-12 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px]">2012-2016</p>
          <h2 className="text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-14 w-full  h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          {/* className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10" */}
          <ResumeCard
            title="GoIT"
            subTitle="Programming courses (2022 - 2023)"
            result="5.00/5"
            des="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <ResumeCard
            title="GoIT"
            subTitle="Programming courses (2022 - 2023)"
            result="5.00/5"
            des="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <ResumeCard
            title="GoIT"
            subTitle="Programming courses (2022 - 2023)"
            result="5.00/5"
            des="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </div>
      </div>
    </div>
  );
};

export default Education;
