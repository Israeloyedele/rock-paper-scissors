import { motion } from 'framer-motion';
export function Footer(props) {


    const {  resetScore, changeMode, gameMode, open } = props;

    return (
        <motion.div className="footer">
            <motion.button whileHover={{scale: 1.05}} id="rules" onClick={open}>Rules</motion.button>
            <motion.button whileHover={{scale: 1.05}} onClick={changeMode} className="mode">{!gameMode ? "Basic" : "Advanced"}</motion.button>
            <motion.button whileHover={{scale: 1.05}} onClick={resetScore} className="reset">Reset</motion.button>
        </motion.div>
    )
}