import { motion } from "framer-motion"

export function Circle(props) {
    const { className, isButton, color, icon, pick } = props;

    return (
        <motion.div
            initial={{opacity: 0, scale: 0, y:-50}}
            whileHover={isButton && {scale: 1,rotate:  "25deg", y: -10, transition: {duration: 0.2}}}
            animate={{opacity: 1, scale: 1, y:0, transition: {duration: 0.2}}}
            onClick={pick}
            className={`circle ${className}`}
            style={{ "--circle-color": color }}>
            <img src={icon} alt=""  />
        </motion.div>
    )
}