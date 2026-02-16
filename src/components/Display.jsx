import { getOutcome, PICK, setIcon } from "../utils/constants.js";
import { useState } from "react";
import iconPaper from "../assets/images/icon-paper.svg"
import iconScissors from "../assets/images/icon-scissors.svg"
import iconRock from "../assets/images/icon-rock.svg"
import iconSpock from "../assets/images/icon-spock.svg"
import iconLizard from "../assets/images/icon-lizard.svg"
import bgTriangle from "../assets/images/bg-triangle.svg"
import bgPentagon from "../assets/images/bg-pentagon.svg"

import { WINNER, COLORS, housePick, getResult } from "../utils/constants.js";
import { Circle } from "./Circle.jsx";
import { easeInOut, motion} from "framer-motion"



export function Display(props) {
    const [hasPlayerPicked, setHasPlayerPicked] = useState(false);
    const [playerIcon, setPlayerIcon] = useState(null);
    const [houseIcon, setHouseIcon] = useState(null);
    const [resultText, setResultText] = useState(null);
    const { gameMode, setScore, setOutcome } = props;
    const [playerColor, setPlayerColor] = useState(null);
    const [houseColor, setHouseColor] = useState(null);
    const [buttonColor, setButtonColor] = useState("hsl(229, 25%, 31%)");



    function checkWinner(player, house) {
        const result = getResult(player, house);
        switch (result) {
            case WINNER.TIE:
                setResultText("It's a Tie!")
                setButtonColor("hsl(229, 25%, 31%)")
                break;
            case WINNER.PLAYER:
                setResultText("You Win!")
                setScore(prevScore => prevScore + 1)
                setButtonColor("hsl(229, 25%, 31%)")
                break;
            case WINNER.HOUSE:
                setResultText("You Lose!")
                setButtonColor("hsl(349, 71%, 52%)")
                break;
        }
    }

    function handlePlayerPicked(value) {

        const house = housePick(gameMode ? 3 : 5);
        setPlayerIcon(setIcon(value)) ;
        setHouseIcon(setIcon(house)) ;
        checkWinner(value, house);
        setOutcome(getOutcome(value, house));
        setHasPlayerPicked(true);
        setPlayerColor(COLORS[value]);
        setHouseColor(COLORS[house]);
    }

    return (
        <div className="display">
            {!hasPlayerPicked ?
                <div
                    style={{ backgroundImage: gameMode? `url(${bgTriangle})` : `url(${bgPentagon})` }}
                    className="btn-display ">
                    <Circle isButton={true} pick={() =>  handlePlayerPicked(PICK.PAPER)} icon={iconPaper} color={COLORS.PAPER} />
                    <Circle isButton={true} pick={() =>  handlePlayerPicked(PICK.SCISSORS)} icon={iconScissors} color={COLORS.SCISSORS} />
                    <Circle isButton={true} pick={() =>  handlePlayerPicked(PICK.ROCK)} icon={iconRock} color={COLORS.ROCK} />
                    {
                        !gameMode && <>
                        <Circle isButton={true} pick={() =>  handlePlayerPicked(PICK.LIZARD)} icon={iconLizard} color={COLORS.LIZARD} />
                        <Circle isButton={true} pick={() =>  handlePlayerPicked(PICK.SPOCK)} icon={iconSpock} color={COLORS.SPOCK} />
                        </>
                    }
                </div>
                :
                <div className="result-container">
                    <div className="result-display">
                        <div className="pick player">
                            <Circle icon={playerIcon} color={playerColor} />
                            <p>YOU PICKED</p>
                        </div>

                        <div className="pick house">
                            <Circle icon={houseIcon} color={houseColor} />
                            <p>THE HOUSE PICKED</p>
                        </div>

                    <div className="win">
                        <motion.h1
                            initial={{opacity: 0, scale: 0}}
                            animate={{opacity: 1, scale: 1, transition: { duration: 0.5, ease: easeInOut }}}
                            exit={{scale: 1}}
                            className="winner">{resultText}</motion.h1>
                        <motion.button
                            whileHover={{scale: 1.05}}
                            onClick={() => { setHasPlayerPicked(false); setOutcome("") }}
                            style={{ "--buttonColor": buttonColor}}
                            className="play-again" >Play Again</motion.button>
                    </div>
                    </div>
                </div>
            }

        </div>

    )
}