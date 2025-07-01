import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2005 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Educational Qualification</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Master of Computer Application"
            subTitle="Vivekananda College of Engineering and Technology (2021 - 2023)"
            result="8.3 CGP"
            des="Studied IT related subjects like Operating Systems, DBMS, OOPS, ML, Web Development, AI, DSA, etc."
          />
          <ResumeCard
            title="Bachelor of Computer Application"
            subTitle="St.Philomena's College Autonomous, Mysore (2018 - 2021)"
            result="81%"
            des="Studied programming in c,c++ and java "
          />
          <ResumeCard
            title="Pre-University College"
            subTitle="Vikas Pre-University College, Mangaluru (2016 - 2018)"
            result="70% "
            des="Studied Physics,Chemisry,Mathematics and Biology."
          />
            <ResumeCard
            title="Secondary School Education"
            subTitle="Sharada Vidyanikethana Public School, Mangaluru (2012 - 2016)"
            result="84% "
            des="Studied 9th and 10th in this school CBSC Bord"
          />
          <ResumeCard
            title="Primary & Secondary School Education"
            subTitle="The Presidency Public school, sira"
            result="80% "
            des="Studied in this school from 1st - 8th."
          /> 
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Certificates</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="SEMAPHORE -2023"
            subTitle="South India Level Technical Fest"
            result="View"
            des="Participated in the Intercollegiate Techinical fest organised by NITTE."
            certref='https://drive.google.com/file/d/1G-lhkb9SMeNan4sHYF9sRBzk8rxTKlS7/view?usp=sharing'

          />
          <ResumeCard
            title="Microsoft Certification Program"
            subTitle="Getting internship and 75% scholarship"
            result="View"
            des="Completed Microsoft Certification Program with hands-on cloud training, earning a 75% scholarship and internship opportunity."
            certref='https://drive.google.com/file/d/1gsTmGbrMczBV6GZqdLY3viTt2Lzg2iNx/view?usp=sharing'
          />
          <ResumeCard
            title=" CyberSecurity workshop"
            subTitle="Workshop"
            result="view"
            des="Attended a Cybersecurity Workshop covering ethical hacking, threat analysis, and hands-on security tools."
            certref="https://drive.google.com/file/d/1-7bjsNSFjI74r6-sjVrxDKBZ6OSNsc84/view?usp=sharing"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education