'use client'

import { aboutData, hireMeData, navIcons, projects, techStack } from "@/data/data";
import { FaChevronDown } from 'react-icons/fa';
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function Home() {

  const [openAccordianIndex, setOpenAccordianIndex] = useState<number | null>(null);

  const handleClick = (url: string) => {
    window.open(`${url}`, '_blank')
  }

  const handleAccordianClick = (index: number) => {
    // console.log('index', index)
    setOpenAccordianIndex(openAccordianIndex === index ? null : index)
  }

  return (
    <div className="main bg-black text-white">
      <section id="home" className="h-screen flex items-center max-w-[491px]">
        <div className="home">
          <p className="hello text-3xl font-semibold pb-15">Hello</p>
          <h1 className="name text-4xl font-bold pb-15">
            I&apos;m <span className="blue-color">Harsh Singh</span>
          </h1>
          <h2 className="designation text-3xl font-bold pb-15">A Passionate <span className="blue-color">Frontend Developer</span></h2>
          <p className="text-base p-color">
            I specialize in creating intuitive and responsive user interfaces
            with React. With over a year of hands-on experience, I develop
            innovative web solutions that enhance user experiences and drive
            engagement.
          </p>
        </div>
      </section>
      <section id="skills" className="mb-16">
        <h2 className="text-center pb-12 text-3xl font-extrabold">Skills</h2>
        <div className="flex justify-between gap-5">
          {/* Skills List */}
          <div className="" >
            <div className="flex flex-col-reverse lg:flex-row gap-5">
              <div className="wrap w-full lg:w-[75%] flex gap-5 justify-between">
                {Object.entries(techStack)
                  .filter(([category]) => category === 'Frontend' || category === 'Backend')
                  .map(([category, techs], index) => (
                    <div key={index} className="skills-card bg-[#2d2d2d] p-5 w-full md:w-1/2 lg:w-[50%] rounded-lg">
                      <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 blue-color">{category}</h3>
                      <ul className="relative flex flex-wrap gap-[19px]">
                        {techs.map((tech, ind) => (
                          <li key={ind} className="skill p-5 md:py-[15px] md:px-[23px] rounded-md bg-black flex flex-col items-center justify-center relative">
                            <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-black">
                              <tech.icon className="w-7 h-7 md:w-8 md:h-8 text-[#7eadfc]" />
                            </div>
                            <h4 className="text-sm md:text-base mt-2 text-center">{tech.name}</h4>
                          </li>
                        ))}
                      </ul>
                    </div>

                  ))}
              </div>
              <div className="w-full lg:w-[33%] rounded-lg shadow-lg">
                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-5">
                  What <span className="blue-color">I Can Do</span>
                </h3>
                <p className="text-sm md:text-base mb-4 md:mb-5 p-color">
                  As a versatile developer, I specialize in both front-end and back-end development. I excel in creating responsive, dynamic user interfaces with React JS, Next JS, JavaScript, TypeScript, HTML, and CSS. On the backend, I build scalable applications using Node JS, Express JS, and manage databases like MongoDB and MySQL.
                </p>
                <p className="text-sm md:text-base p-color">
                  I also leverage tools like RTK, Tailwind CSS, React Hook Form, MUI, GitHub, and Postman to streamline development and ensure quality. My focus is on writing clean, efficient code that adapts to business needs, driving sustainable success.
                </p>
              </div>
            </div>
            <div className="wrap mt-5 flex gap-5 justify-between">
              {Object.entries(techStack).filter(([category]) => category === 'Tools' || category === 'Libraries').map(([category, techs], index) => (
                <div key={index} className="skills-card bg-[#2d2d2d] p-5 w-[50%] rounded-lg">
                  <h3 className="text-2xl font-semibold mb-6 blue-color">{category}</h3>
                  <ul className="relative flex flex-wrap gap-4">
                    {techs.map((tech, ind) => (
                      <li key={ind} className="p-6 rounded-md bg-black flex flex-col items-center justify-center relative">
                        <div className="flex items-center justify-center w-10 h-10 bg-black">
                          <tech.icon className="w-7 h-7 text-[#7eadfc]" />
                        </div>
                        <h4 className="text-base mt-2">{tech.name}</h4>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section id="projects" className="mb-16">
        <h2 className="text-center pb-12 text-3xl font-extrabold">Projects</h2>
        <ul className="">
          {projects.map((project, index) => (
            <li key={index} className={`projects flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} gap-[30px] pb-35 last:pb-0 items-start`}>
              <div className="h-auto">
                <h3 className="text-2xl font-bold pb-20">{project.name}</h3>
                <ul className="flex flex-wrap gap-4 pb-20">
                  {project.technologies.map((technology, index) => (
                    <li key={index} className="py-1 px-2.5 text-sm blue-bg rounded font-semibold">{technology.toLocaleUpperCase()}</li>
                  ))}
                </ul>
                <p className="pb-20 text-base p-color">{project.description}</p>
                <button onClick={() => handleClick(project.url)} className="hover:bg-blue-bg px-3 py-2 border border-white rounded">Visit Project</button>
              </div>
              <Image
                src={project.image}
                alt={project?.name}
                width={450}   // Set the width based on your image dimensions
                height={250}  // Set the height based on your image dimensions
                className="image rounded-xl object-contain"
              />
            </li>
          ))}
        </ul>
        {/* Content for Skills */}
      </section>
      <section id="about" className="mb-16">
        <h2 className="text-center pb-12 text-3xl font-extrabold">About</h2>
        {/* Content for Projects */}
        <div className="flex flex-wrap lg:justify-between justify-center">
          <div className="wrap flex gap-5 w-[100%] lg:w-[85%]">
            <div className="intro bg-[#2d2d2d] w-1/2 p-5 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6 blue-color">Introduction</h3>
              <p className="text-base p-color">Hello! I&apos;m Harsh Singh, a dedicated React Developer with a passion for building interactive and user-friendly web applications. With a knack for both front-end and back-end development, I strive to create seamless digital experiences that meet modern standards.</p>
            </div>
            <div className="carrer p-5 w-1/2 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6 blue-color">Career Goals</h3>
              <p className="text-base p-color">My goal is to continuously evolve as a developer by embracing new technologies and methodologies. I am driven to work on innovative projects that challenge my skills and contribute to creating impactful solutions. I aim to collaborate with talented teams and grow my expertise in building scalable, high-performance applications.</p>
            </div>
          </div>
          <div className="lg:bg-[#2d2d2d] lg:mt-0 mt-[20px] bg-[#000] p-5 rounded-lg text-center lg:text-left" style={{ height: 'fit-content' }}>
            <h3 className="text-2xl font-semibold mb-6 blue-color">Contact</h3>
            <ul className="text-3xl blue-color flex lg:flex-col gap-3">
              {navIcons.map((obj, index) => (
                <li key={index}>
                  <Link href={obj.link} target="_blank"><obj.icon /></Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section id="hire-me" className="mb-20">
        <h2 className="text-center pb-12 text-3xl font-extrabold">Hire Me</h2>
        <p className="pb-20 text-base p-color">Are you searching for a dedicated and skilled front-end developer to join your team? With a strong expertise in React JS, Next JS, and a solid foundation in both frontend and backend technologies, I am ready to contribute to your company’s innovative projects.</p>
        <div className="pb-20">
          <h3 className="text-2xl font-semibold mb-6">What <span className="blue-color">I Bring to Your Team</span></h3>
          <ul className="">
            {hireMeData.map((obj, index) => (
              <li key={index} className="rounded-lg overflow-hidden">
                <div className="p-3 cursor-pointer flex items-center justify-between bg-[#2d2d2d]" onClick={() => handleAccordianClick(index)}>
                  <h4 className="text-lg font-semibold">{obj.label}</h4>
                  <FaChevronDown className={`${openAccordianIndex === index ? 'rotate-180' : ''} transition-transform`} />
                </div>
                {openAccordianIndex === index && <div className="p-4">
                  <p>{obj.value}</p>
                </div>}
              </li>
            ))}
          </ul>
        </div>
        <p className="p-color text-base">I am eager to collaborate on impactful projects and help your company achieve its goals through cutting-edge web development. Let’s connect and explore how I can be a valuable addition to your team!</p>
        {/* Content for Contact */}
      </section>
    </div>
  );
}

