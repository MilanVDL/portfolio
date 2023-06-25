import Image from "next/image";
import SectionTitle from "./SectionTitle";

import {TbBrandGithub} from "react-icons/tb";
import {RxOpenInNewWindow} from "react-icons/rx";

const Projects = () => {
  return (
    <section id="projects" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle
        title="Een paar Projecten die ik heb gemaakt"
        titleNo="03"
      />
      <div className="w-full flex flex-col items-center justify-between gap-28 mt-10">
        {/* Project one */}
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            href="https://www.rifco.nl/"
            target="_blank"
            className="w-full xl:w-1/2 h-auto realtive group"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src="/project_placeholder.png"
                alt="Project 1 Image"
                width={1920}
                height={1080}
              />
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
            <p className="font-titleFont text-textGreen text-sm tracking-wide">
              Uitgelicht Project
            </p>
            <h3 className="text-2xl font-bold">Rifco Bv Website</h3>
            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
                De officiele website voor Rifco Bv, gemaakt met <span className="text-textGreen">NextJs</span> en
                <span className="text-textGreen">Tailwind CSS</span>. Bevat een Webshop die werkt via offertes.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>NextJs</li>
                <li>Tailwind CSS</li>
                <li>NodeJs</li>
            </ul>
            <div className="text-2xl flex gap-4">
                <a href="#" target="_blank" className="hover:text-textGreen duration-300">
                    <TbBrandGithub />
                </a><a href="https://www.rifco.nl/" target="_blank" className="hover:text-textGreen duration-300">
                    <RxOpenInNewWindow />
                </a>
            </div>
          </div>
        </div>
      </div>
      {/* Project two */}
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        <div className="flex flex-col xl:flex-row-reverse gap-6">
          <a
            href="http://145.89.192.107/"
            target="_blank"
            className="w-full xl:w-1/2 h-auto realtive group"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src="/project_placeholder.png"
                alt="Project 2 Image"
                width={1920}
                height={1080}
              />
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right z-10">
            <p className="font-titleFont text-textGreen text-sm tracking-wide">
              Uitgelicht Project
            </p>
            <h3 className="text-2xl font-bold">OpenICT Slide Web Applicatie</h3>
            <p className="bg-[#112240] text-sm md:text-base p-2 xl:-mr-16 md:p-6 rounded-md">
                Web Applicatie ontwikkeld voor de opleiding OpenICT, geeft de optie voor docenten en studenten
                om customized slides te uploaden naar een scherm dat op de gang hangt. Maakt gebruik van <span className="text-textGreen">React</span> en 
                <span className="text-textGreen"> SCSS</span> gekoppeld aan een MySQL database.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>React</li>
                <li>SCSS</li>
                <li>MySQL</li>
                <li>NodeJs</li>
            </ul>
            <div className="text-2xl flex gap-4">
                <a href="https://github.com/TimoBrandt1/open-ict-info-scherm" target="_blank" className="hover:text-textGreen duration-300">
                    <TbBrandGithub />
                </a><a href="http://145.89.192.107/" target="_blank" className="hover:text-textGreen duration-300">
                    <RxOpenInNewWindow />
                </a>
            </div>
          </div>
        </div>
      </div>
      {/* Project three */}
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            href="https://github.com/tobiasvdorp/kappersproject"
            target="_blank"
            className="w-full xl:w-1/2 h-auto realtive group"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src="/Kappers_Project.png"
                alt="Project 3 Image"
                width={1920}
                height={1080}
              />
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
            <p className="font-titleFont text-textGreen text-sm tracking-wide">
              Uitgelicht Project
            </p>
            <h3 className="text-2xl font-bold">Kappers Website</h3>
            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
                Website gemaakt voor een school opdracht voor een fictief kappers bedrijf. Deze website is gemaakt in 
                <span className="text-textGreen"> Html</span>, <span className="text-textGreen">CSS</span> en
                <span className="text-textGreen">PhP</span>.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>HTML</li>
                <li>CSS</li>
                <li>PhP</li>
            </ul>
            <div className="text-2xl flex gap-4">
                <a href="https://github.com/tobiasvdorp/kappersproject" target="_blank" className="hover:text-textGreen duration-300">
                    <TbBrandGithub />
                </a><a href="https://github.com/tobiasvdorp/kappersproject" target="_blank" className="hover:text-textGreen duration-300">
                    <RxOpenInNewWindow />
                </a>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Projects;
