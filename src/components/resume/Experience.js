import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col gap-20 md:flex-row"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - 20XX</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[700px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Junior support engineer"
            subTitle="UnifyCX Pvt.Ltd. - (2024 - 2025)"
            result="Manglore"
            des="I was awarded the best CSAT score achiver for 3-4 consecutive months"
          />

           <ResumeCard
            title="Lecturer"
            subTitle="Yenepoya Institute of Arts, Science, Management & commerce - (2025 - Currently working)"
            result="Manglore"
            des="Challenging convention, cultivating curiosity"
          />
          

        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - 2023</p>
          <h2 className="text-4xl font-bold">Internship Experience</h2>
        </div>
        <div className="mt-14 w-full h-[700px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="React-Native Front-end intern"
            subTitle="Synergy Strategic Solutions"
            result="Bangalore"
            des=" Skilled at debugging, troubleshooting, and optimizing frontend code improved performance"
          />
          
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
