import { motion } from 'framer-motion';
export function Footer(props) {


    const { hasPlayerPicked, setMount, mount, setOutcome, setHasPlayerPicked, resetScore, changeMode, gameMode, open } = props;
    function changeGameMode() {
        changeMode();
        setHasPlayerPicked(false);
        setOutcome("");
        hasPlayerPicked ? setMount(!mount): "";
    }

    return (
        <motion.div className="footer">
            <motion.button whileHover={{scale: 1.05}} id="rules" onClick={open}>Rules</motion.button>
            <motion.button whileHover={{scale: 1.05}} onClick={changeGameMode} className="mode">{!gameMode ? "Basic" : "Advanced"}</motion.button>
            <motion.button whileHover={{scale: 1.05}} onClick={resetScore} className="reset">Reset</motion.button>
        </motion.div>
    )
}