import { motion } from 'framer-motion';
export function Footer(props) {


    const {  open } = props;

    return (
        <motion.div whileHover={{scale: 1.05}} className="footer">
            <button id="rules" onClick={open}>Rules</button>
        </motion.div>
    )
}