import { motion } from "framer-motion"

export function Circle(props) {
    const { className, isButton, color, icon, pick } = props;

    return (
        <motion.div
            initial={!isButton && {opacity: 0, scale: 0}}
            whileHover={isButton && {scale: 1.1, transition: {duration: 0.3}}}
            animate={!isButton && {opacity: 1, scale: 1.1, transition: {duration: 0.5}}}
            onClick={pick}
            className={`circle ${className}`}
            style={{ "--circle-color": color }}>
            <img src={icon} alt=""  />
        </motion.div>
    )
}