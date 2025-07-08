import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree,projectFour,projectFive,projectSix} from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="Check these out on my github"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Stock prediction app"
          des="A web-based app that predicts future stock prices using LSTM deep learning and historical data.."
          src={projectOne}
          githubLink="https://github.com/shrunga-a/stock_app"

        />
        <ProjectsCard
          title="LPG gas detection"
          des="This project is designed to detect the presence of flammable gases like LPG in the environment and trigger alerts to prevent accidents.."
          src={projectTwo}
          githubLink="https://github.com/shrunga-a/LPG-gas-detection"
        />
        <ProjectsCard
          title="SynBasket"
          des="A cross-platform React Native shopping app that offers a seamless and intuitive experience for browsing, carting, and purchasing products on the go."
          src={projectThree}
          githubLink="https://github.com/shrunga-a/SynBasket"
        />
        <ProjectsCard
          title="Todo application"
          des="A simple and efficient To-Do application to help you organize tasks, set priorities, and boost daily productivity."
          src={projectFour}
          githubLink="https://github.com/shrunga-a/1_new_todo"
          
        />
        <ProjectsCard
          title="Complaint Management"
          des="A streamlined Complaint Management System designed to log, track, and resolve user grievances efficiently within organizations or institutions."
          src={projectFive}
          githubLink="https://github.com/shrunga-a/PHP-project"
         
        />
        <ProjectsCard
          title="Quiz App"
          des="The Quiz App is an interactive and engaging application designed to test users' knowledge on various topics through a series of questions and answers. It provides an enjoyable way for users to learn new information, challenge themselves, and compete with others."
          src={projectSix}
          githubLink="https://github.com/shrunga-a/Alpha_Backend"
      
        />
      </div>
    </section>
  );
}

export default Projects