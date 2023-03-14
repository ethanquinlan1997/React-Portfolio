import React from "react";
import { Icon } from "@iconify/react";
import reactIcon from "@iconify/icons-logos/react";


export default function Home() {
  return (
    <section id="overview" className="text-gray-400 bg-gray-500 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white dark:text-gray100">
            About Me
          </h1>
        </div>
        <p class="text-white dark:text-gray100 leading-relaxed  text-xl mx-auto pb-2 mt-4 text-center">
          My name is Ethan Quinlan and I'm currently a full-stack web
          development student at the University of North Carolina at Charlotte.
          I always had a love for computers and how they function. I grew up as
          a full-time athlete while having video games as a hobby. During my
          times playing countless hours of games, I have always wondered the
          "who", "what", and "how" they are created. This simply translated into
          my interest in computers. Understanding how something is created,
          designed, and deployed has always interest me. Now, currently, I will
          be working on becoming the best and most dedicated full-stack web
          developer I can be!
        </p>
      </div>
      <div className="container  mx-auto text-center lg:px-40 ">
        <div className="flex flex-col ">
          <h1 className="sm:text-4xl  font-medium title-font text-white dark:text-gray100">
            Skills
          </h1>
        </div>
        <ul class="relative pt-20 pb-8 md:pt-24 md:pb-12 dark:bg-opacity-20">
          <li>HTML</li>
          <li>Sequelize</li>
          <li>Express</li>
          <li>Node.js</li>
          <li>React</li>
          <li>JavaScript</li>
          <li>MongoDB</li>
          <li>MySQL</li>
          <li>TailwindCSS</li>
          <li>BootStrap</li>
          <li>GraphQL</li>
        </ul>
      </div>
    </section>
  );
}
