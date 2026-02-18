import { motion } from 'framer-motion';
export function Footer(props) {


    const { setMountKey, setOutcome, setHasPlayerPicked, resetScore, changeMode, gameMode, open } = props;
    function changeGameMode() {
        changeMode();
        setHasPlayerPicked(false);
        setOutcome("");
        setMountKey(k => k+1);
    }

    return (
        <motion.div className="footer">
            <motion.button whileHover={{scale: 1.05}} id="rules" onClick={open}>Rules</motion.button>
            <motion.button whileHover={{scale: 1.05}} onClick={changeGameMode} className="mode">{!gameMode ? "Basic" : "Advanced"}</motion.button>
            <motion.button whileHover={{scale: 1.05}} onClick={() => { setMountKey(k => k+1); resetScore()}} className="reset">Reset</motion.button>
        </motion.div>
    )
}