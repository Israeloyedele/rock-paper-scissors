import { PICK } from "../utils/constants.js";
import { useState } from "react";
import iconpaper from "../assets/images/icon-paper.svg"
import iconscissors from "../assets/images/icon-scissors.svg"
import iconrock from "../assets/images/icon-rock.svg"
import { COLORS } from "../utils/constants.js";
import { Circle } from "./Circle.jsx";
import { easeInOut, motion} from "framer-motion"



export function Display(props) {
    const [hasPlayerPicked, setHasPlayerPicked] = useState(false);
    const [playerIcon, setPlayerIcon] = useState(null);
    const [houseIcon, setHouseIcon] = useState(null);
    const [winner, setWinner] = useState(null);
    const { setScore } = props;
    const [playerColor, setPlayerColor] = useState(null);
    const [houseColor, setHouseColor] = useState(null);
    const [buttonColor, setButtonColor] = useState("hsl(229, 25%, 31%)");



    function housePick() {
        const random = Math.floor((Math.random() * 3));
        let house;
        switch (random) {
            case 0:
                house = PICK.ROCK;
                break;
            case 1:
                house = PICK.PAPER;
                break;
            case 2:
                house = PICK.SCISSORS;
                break;
        }
        return house;
    }
    function setIcon(value) {
        let icon;
        switch (value) {
            case PICK.ROCK:
                icon = iconrock;
                break;
            case PICK.PAPER:
                icon = iconpaper;
                break;
            case PICK.SCISSORS:
                icon = iconscissors;
                break;
        }
        return icon;
    }

    function checkWinner(house, player) {
        if (house === player) { setWinner("It's a Tie!"); setButtonColor("hsl(229, 25%, 31%)")}
        else if (
            player === PICK.ROCK  && house === PICK.SCISSORS ||
            player === PICK.PAPER && house === PICK.ROCK ||
            player === PICK.SCISSORS && house === PICK.PAPER
        ){
            setWinner("You Win!")
            setScore(prevScore => prevScore + 1)
            setButtonColor("hsl(229, 25%, 31%)")

        }

        else {
            setWinner("You Lose!")
            setButtonColor("hsl(349, 71%, 52%)")

        }
    }

    function handlePlayerPicked(value) {

        const house = housePick();
        setPlayerIcon(setIcon(value)) ;
        setHouseIcon(setIcon(house)) ;
        checkWinner(house, value);
        setHasPlayerPicked(true);
        setPlayerColor(COLORS[value]);
        setHouseColor(COLORS[house]);
    }

    return (
        <div className="display">
            {!hasPlayerPicked ?
                <div className="btn-display">
                    <Circle isButton={true} pick={() =>  handlePlayerPicked(PICK.PAPER)} icon={iconpaper} color={COLORS.PAPER} />
                    <Circle isButton={true} pick={() =>  handlePlayerPicked(PICK.SCISSORS)} icon={iconscissors} color={COLORS.SCISSORS} />
                    <Circle isButton={true} pick={() =>  handlePlayerPicked(PICK.ROCK)} icon={iconrock} color={COLORS.ROCK} />
                </div>
                :
                <div className="result-container">
                    <div className="result-display">
                        <div className="pick player">
                            {/*<img src={playerIcon} alt=""/>*/}
                            <Circle icon={playerIcon} color={playerColor} />
                            <p>YOU PICKED</p>
                        </div>

                        <div className="pick house">
                            {/*<img src={houseIcon} alt=""/>*/}
                            <Circle icon={houseIcon} color={houseColor} />
                            <p>THE HOUSE PICKED</p>
                        </div>

                    <div className="win">
                        <motion.h1
                            initial={{opacity: 0, scale: 0}}
                            animate={{opacity: 1, scale: 1, transition: { duration: 0.5, ease: easeInOut }}}
                            exit={{scale: 1}}
                            className="winner">{winner}</motion.h1>
                        <motion.button
                            whileHover={{scale: 1.05}}
                            onClick={() => setHasPlayerPicked(false)}
                            style={{ "--buttonColor": buttonColor}}
                            className="play-again">Play Again</motion.button>
                    </div>
                    </div>
                </div>
            }

        </div>

    )
}