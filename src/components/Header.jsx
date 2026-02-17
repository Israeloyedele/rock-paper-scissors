import { Score } from "./Score.jsx";
import logo from "../assets/images/logo.svg"
import advancedLogo from "../assets/images/logo-bonus.svg"
import { easeOut, motion } from "framer-motion";

export function Header(props) {
    const { outcome, gameMode, score } = props;
    return (
        <div className="header-wrapper">
            <div className="header">
                <img id="logo" src={gameMode? logo : advancedLogo} alt="img" />
                <Score score={score} />
            </div>
            {outcome && <motion.p
                initial={{opacity: 0, scale: 0}}
                animate={{opacity: 1, scale: 1, transition: { duration: 0.5, ease: easeOut }}}
                className="outcome">{outcome}</motion.p>
            }
        </div>


    )
}