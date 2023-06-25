import Image from "next/image";
import SectionTitle from "./SectionTitle";
import {AiFillThunderbolt} from "react-icons/ai";

const About = () => {
    return(
        <section id="about" className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8">
            <SectionTitle title="Over Mij" titleNo="01"/>
            <div className="flex flex-col lgl:flex-row gap-16">
                <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
                    <p>
                        Hi! Mijn naam is Milan van der Linden, 21 jaar oud en woon in Veenendaal. 
                        Ik ben op het moment een student aan de <span className="text-textGreen">Hogeschool van Utrecht</span> en studeer daar <span className="text-textGreen">OpenICT</span>, 
                        hiervoor heb ik de <span className="text-textGreen">MBO opleiding Applicatie en Media Ontwikkeling</span> gedaan op het Technova College.
                        Sinds jongs af aan liggen mijn intresses al bij computers en probeer dit nu mijn baan te maken.
                        Op het moment focus ik mijzelf op het maken van web applicaties en artifical intelligence. {" "}
                    </p>
                    <p>
                        Op het moment ben ik veel bezig met het leren van nieuwe technologiën op het gebied van web development,
                        denk aan <span className="text-textGreen">NextJS, TailwindCSS en Progressive Web Apps</span>. Ook ben ik op het moment bezig met het te studeren
                        van Artificial Intelligence.
                    </p>
                    <p>
                        Mijn droom is om uiteindelijk deze twee sectoren samen te voegen doormiddel van het maken van Web Applicaties
                        die gebruik maken van Artifical Intelligence, het beroemste voorbeeld hiervan is natuurlijk ChatGPT.
                    </p>
                    <p>Hieronder zijn een paar technologiën te vinden waar ik de laatste tijd mee heb gewerkt :</p>
                    <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
                        <li className="flex items-center gap-2">
                            <span className="text-textGreen"><AiFillThunderbolt /></span>ES6
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-textGreen"><AiFillThunderbolt /></span>React
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-textGreen"><AiFillThunderbolt /></span>NextJS
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-textGreen"><AiFillThunderbolt /></span>Node.js
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-textGreen"><AiFillThunderbolt /></span>TypeScript
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-textGreen"><AiFillThunderbolt /></span>MySQL
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-textGreen"><AiFillThunderbolt /></span>TailwindCSS
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-textGreen"><AiFillThunderbolt /></span>C / C#
                        </li>
                    </ul>
                </div>
                <div className="w-full lgl:w-1/3 h-80 relative group">
                    <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg">
                        <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
                            <Image 
                            className="rounded-lg h-full object-cover"
                            src="/profileImg.png"
                            alt="profile_imagae"
                            width={400}
                            height={400}
                            />
                            <div className="hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20 rouned-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
                        </div>      
                    </div>
                    <div className="hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
                </div>
            </div>
        </section>
    );
}

export default About;