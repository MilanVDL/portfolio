import { motion } from "framer-motion";
import { TiArrowForward} from "react-icons/ti";

const Qbil = () => {
    return(
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="w-full">
            <h3 className="flex gap-1 font-medium text-xl font-titleFont">
                Stagair <span className="text-textGreen tracking-wide">@Qbil</span>
            </h3>
            <p className="text-sm mt-1 font-medium text-textDark">MBO - Stage periode</p>
            <ul className="mt-6 flex flex-col gap-3">
                <li className="text-base flex gap-2 text-textDark">
                    <span className="text-textGreen mt-1"><TiArrowForward /></span>
                    Qbil is een bedrijf dat ERP software maakt voor grote schaal handel en logistiek in commodities, grondstoffen, ingrediënten en additieven.
                </li>
                <li className="text-base flex gap-2 text-textDark">
                    <span className="text-textGreen mt-1"><TiArrowForward /></span>
                    Als stagair kreeg ik de opdracht om een nieuwe website voor hun te maken met de framework Symfony.
                </li>
                <li className="text-base flex gap-2 text-textDark">
                    <span className="text-textGreen mt-1"><TiArrowForward /></span>
                    In mijn stage tijd heb ik geleerd hoe ik moest werken met Symfony en hoe het process werkt om international te werken aan een project.
                    Qbil maakte gebruik van programeurs in India en mijn taak was om hier dagelijks in contact mee te blijven.
                </li>
            </ul>
        </motion.div>
    );
}

export default Qbil;