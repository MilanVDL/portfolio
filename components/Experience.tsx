import SectionTitle from "./SectionTitle";
import Doelbewust from "./works/Doelbewust";
import Qbil from "./works/Qbil";
import Rifco from "./works/Rifco";
import React, {useState} from "react";

const Experience = () => {
    const [workRifco, setWorkRifco] = useState(true);
    const [workQbil, setWorkQbil] = useState(false);
    const [workDoelbewust, setWorkDoelbewust] = useState(false);

    const handleRifco = () => {
        setWorkRifco(true);
        setWorkQbil(false);
        setWorkDoelbewust(false);
    }

    const handleQbil = () => {
        setWorkRifco(false);
        setWorkQbil(true);
        setWorkDoelbewust(false);
    }

    const handleDoelbewust = () => {
        setWorkRifco(false);
        setWorkQbil(false);
        setWorkDoelbewust(true);
    }

    return(
        <section id="experience" className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4">
            <SectionTitle title="Waar ik heb Gewerkt" titleNo="02"/>
            <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
                <ul className="md:w-32 flex flex-col">
                    <li onClick={handleRifco} 
                    className={`${workRifco ? "border-l-textGreen text-textGreen" : "border-l-hoverColor text-textDark"} border-l-2 bg-transparent
                    hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>
                        Rifco Bv
                    </li>
                    <li onClick={handleQbil} 
                    className={`${workQbil ? "border-l-textGreen text-textGreen" : "border-l-hoverColor text-textDark"} border-l-2 bg-transparent
                    hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>
                        <span className="text-textGreen">[Stage]</span> Qbil
                    </li>
                    <li onClick={handleDoelbewust} 
                    className={`${workDoelbewust ? "border-l-textGreen text-textGreen" : "border-l-hoverColor text-textDark"} border-l-2 bg-transparent
                    hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>
                        <span className="text-textGreen">[Stage]</span> Doelbewust
                    </li>
                </ul>
                {workRifco && <Rifco />}
                {workQbil && <Qbil />}
                {workDoelbewust && <Doelbewust />}
            </div>
        </section>
    );
}

export default Experience;