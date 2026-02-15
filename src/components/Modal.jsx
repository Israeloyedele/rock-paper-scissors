import rulesImg from "../assets/images/image-rules.svg"
import closeImg from "../assets/images/icon-close.svg"
import { motion } from "framer-motion";

export function Modal(props) {
    const { close } = props;
    return (


                <motion.div
                    initial={{opacity: 0, scale: 0}}
                    animate={{opacity: 1, scale: 1, transition: { duration: 0.1 }}}
                    exit={{opacity: 0, scale: 0, transition: { duration: 0.5 } }}
                    className="modal">
                        <motion.div
                                initial={{opacity: 0, scale: 0}}
                                animate={{opacity: 1, scale: 1, transition: { duration: 0.3 }}}
                                className="modal-content">
                                <h2>RULES</h2>
                                <img src={rulesImg} alt=""/>
                                <button onClick={close} className="closeModal"><img src={closeImg} alt=""/></button>
                        </motion.div>
                </motion.div>
    )
}