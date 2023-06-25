import { motion } from "framer-motion";
import { TiArrowForward} from "react-icons/ti";

const Doelbewust = () => {
    return(
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="w-full">
            <h3 className="flex gap-1 font-medium text-xl font-titleFont">
                Stagair <span className="text-textGreen tracking-wide">@Doelbewust</span>
            </h3>
            <p className="text-sm mt-1 font-medium text-textDark">MBO - Stage periode</p>
            <ul className="mt-6 flex flex-col gap-3">
                <li className="text-base flex gap-2 text-textDark">
                    <span className="text-textGreen mt-1"><TiArrowForward /></span>
                    Doelbewust is een marketing bedrijf dat zich focused op het ontwerpen en ontwikkelen van websites en webshops.
                </li>
                <li className="text-base flex gap-2 text-textDark">
                    <span className="text-textGreen mt-1"><TiArrowForward /></span>
                    Als stagair kreeg ik de opdracht om met Wordpress websites om te zetten naar een nieuw thema en ook zelf websites te ontwerpen voor klaten.
                </li>
                <li className="text-base flex gap-2 text-textDark">
                    <span className="text-textGreen mt-1"><TiArrowForward /></span>
                    In mijn stage tijd heb ik geleerd hoe Wordpress werkt en hoe je effectief hiermee een website kan opzetten. Ook heb ik in mijn periode hier
                    af en toe met PhP gewerkt om custom plugins voor Wordpress te schrijven.
                </li>
            </ul>
        </motion.div>
    );
}

export default Doelbewust;