import { motion } from "framer-motion";
import { TiArrowForward} from "react-icons/ti";

const Rifco = () => {
    return(
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="w-full">
            <h3 className="flex gap-1 font-medium text-xl font-titleFont">
                Leidinggevende <span className="text-textGreen tracking-wide">@Rifco Bv</span>
            </h3>
            <p className="text-sm mt-1 font-medium text-textDark">2021 - 2022</p>
            <ul className="mt-6 flex flex-col gap-3">
                <li className="text-base flex gap-2 text-textDark">
                    <span className="text-textGreen mt-1"><TiArrowForward /></span>
                    Rifco is een bedrijf dat zich focused op het professioneel bijhouden en schoonmaken van datacenters door heel Nederland.
                </li>
                <li className="text-base flex gap-2 text-textDark">
                    <span className="text-textGreen mt-1"><TiArrowForward /></span>
                    Mijn taak was het aansturen van werknemers zodat het opgeleverde resultaat aan de eisen voldeed en de klant tevreden was met het resultaat.
                </li>
                <li className="text-base flex gap-2 text-textDark">
                    <span className="text-textGreen mt-1"><TiArrowForward /></span>
                    Bij Rifco heb ik geleerd hoe je effectief leiding kan geven en mensen kan stimuleren om actief na te denken voor de optimale oplossingen voor problemen.
                    Ook heb ik in deze tijd veel nieuwe contacten gelegd met bedrijven zoals; Serverfarm, NorthC en EdgeConneX.
                </li>
            </ul>
        </motion.div>
    );
}

export default Rifco;